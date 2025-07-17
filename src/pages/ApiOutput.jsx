import { Box, Typography, Paper } from "@mui/material";

const mockJson = {
  reports: [
    {
      id: 1,
      location: "Lagos",
      type: "Urban Flood",
      validated: true,
      timestamp: "2024-06-01T12:00:00Z"
    }
  ],
  sensors: [
    {
      id: "sensor-001",
      location: "Niger",
      waterLevel: 3.2,
      timestamp: "2024-06-01T12:05:00Z"
    }
  ]
};

function ApiOutput() {
  return (
    <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: 600 }}>
        <Typography variant="h5" gutterBottom>
          API Output (Mock)
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Example JSON output for integration:
        </Typography>
        <Box component="pre" sx={{ background: "#222", color: "#fff", p: 2, borderRadius: 2, fontSize: 14 }}>
          {JSON.stringify(mockJson, null, 2)}
        </Box>
      </Paper>
    </Box>
  );
}

export default ApiOutput;
