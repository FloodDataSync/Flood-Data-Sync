import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Int "mo:base/Int";

persistent actor class FloodDataSync() {
  type Report = {
    id: Text;
    location: Text;
    timestamp: Int;
    waterLevel: Float;
    reportedBy: Principal;
    verified: Bool;
  };

  private transient var floodReports = HashMap.HashMap<Text, Report>(16, Text.equal, Text.hash);

  var stableReportsEntries : [(Text, Report)] = [];

  system func preupgrade() {
    stableReportsEntries := Iter.toArray(floodReports.entries());
  };

  system func postupgrade() {
    floodReports := HashMap.fromIter<Text, Report>(
      stableReportsEntries.vals(),
      16,
      Text.equal,
      Text.hash
    );
    stableReportsEntries := [];
  };

  public shared({ caller }) func submitReport(location: Text, waterLevel: Float): async Text {
    let now = Int.abs(Time.now());
    let id = "report-" # Nat.toText(now);

    let report: Report = {
      id = id;
      location = location;
      timestamp = now;
      waterLevel = waterLevel;
      reportedBy = caller;
      verified = false;
    };

    floodReports.put(id, report);
    return id;
  };

  public shared func verifyReport(id: Text): async Bool {
    switch (floodReports.get(id)) {
      case null { return false };
      case (?report) {
        let updatedReport = { report with verified = true };
        floodReports.put(id, updatedReport);
        return true;
      };
    };
  };

  public query func getReports(): async [Report] {
    return Iter.toArray(floodReports.vals());
  };
};
