import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";


actor FloodDataSync {

  type Report = {
    id: Text;
    location: Text;
    timestamp: Int;
    waterLevel: Float;
    reportedBy: Principal;
    verified: Bool;
  };

  var floodReports = HashMap.HashMap<Text, Report>(16, Text.equal, Text.hash);

  public func submitReport(location: Text, waterLevel: Float): async Text {
    let id = "report-" # Nat.toText(Nat64.toNat(Nat64.fromIntWrap(Time.now())));
    let caller = Principal.fromActor(FloodDataSync); 
    let report : Report = {
      id = id;
      location = location;
      timestamp = Time.now();
      waterLevel = waterLevel;
      reportedBy = caller; 
      verified = false;
    };
    floodReports.put(id, report);
    return id;
  };
  public func verifyReport(id: Text): async Bool {
    switch (floodReports.get(id)) {
      case null { return false };
      case (?report) {
        let updatedReport = { report with verified = true };
        floodReports.put(id, updatedReport);
        return true;
      };
    };
  };

  public func getReports(): async [Report] {
    return Iter.toArray(floodReports.vals());
  };
};
