import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";


actor FloodDataSync {

  // Flood Report structure
  type Report = {
    id: Text;
    location: Text;
    timestamp: Int;
    waterLevel: Float;
    reportedBy: Principal;
    verified: Bool;
  };

  // Sensor data structure
  type SensorReading = {
    id: Text;
    location: Text;
    timestamp: Int;
    waterLevel: Float;
    sourceId: Text;
  };

  // Alert structure
  type Alert = {
    id: Text;
    sourceType: Text; // "Report" or "Sensor"
    location: Text;
    timestamp: Int;
    waterLevel: Float;
    triggeredBy: Text; // ID of report or sensor
  };

  // HashMaps for storage
  var floodReports = HashMap.HashMap<Text, Report>(16, Text.equal, Text.hash);
  var sensorReadings = HashMap.HashMap<Text, SensorReading>(16, Text.equal, Text.hash);
  var alerts = HashMap.HashMap<Text, Alert>(16, Text.equal, Text.hash);

  // Helper: Maybe trigger alert if threshold is breached
  func maybeTriggerAlert(sourceType: Text, location: Text, level: Float, id: Text): () {
    let threshold = 5.0;
    if (level >= threshold) {
      let alertId = "alert-" # Nat.toText(Nat64.Time.now());
      let alert: Alert = {
        id = alertId;
        sourceType = sourceType;
        location = location;
        timestamp = Time.now();
        waterLevel = level;
        triggeredBy = id;
      };
      alerts.put(alertId, alert);
    };
  };

  // --- REPORT HANDLING ---

  public func submitReport(location: Text, waterLevel: Float): async Text {
    let id = "report-" # Nat.toText(Nat.abs(Time.now()));
    let caller = msg.caller; 
    let report: Report = {
      id = id;
      location = location;
      timestamp = Time.now();
      waterLevel = waterLevel;
      reportedBy = caller;
      verified = false;
    };
    floodReports.put(id, report);
    maybeTriggerAlert("Report", location, waterLevel, id);
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

  public func getReportsByLocation(loc: Text): async [Report] {
    return Iter.toArray(
      Iter.filter<Report>(
        floodReports.vals(),
        func(r) { r.location == loc }
      )
    );
  };

  // --- SENSOR DATA HANDLING ---

  public func submitSensorData(location: Text, waterLevel: Float, sourceId: Text): async Text {
    let id = "sensor-" # Nat.toText(Nat64.Time.now());
    let reading: SensorReading = {
      id = id;
      location = location;
      timestamp = Time.now();
      waterLevel = waterLevel;
      sourceId = sourceId;
    };
    sensorReadings.put(id, reading);
    maybeTriggerAlert("Sensor", location, waterLevel, id);
    return id;
  };

  public func getSensorReadings(): async [SensorReading] {
    return Iter.toArray(sensorReadings.vals());
  };

  // --- ALERT HANDLING ---

  public func getAlerts(): async [Alert] {
    return Iter.toArray(alerts.vals());
  };

  public func getAlertsByLocation(loc: Text): async [Alert] {
    return Iter.toArray(
      Iter.filter<Alert>(
        alerts.vals(),
        func(a) { a.location == loc }
      )
    );
  };
};
