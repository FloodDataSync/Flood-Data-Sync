import { Box, Typography, Paper } from "@mui/material";

function Dashboard() {
  return (
    <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: 600 }}>
        <Typography variant="h5" gutterBottom>
          Authority Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Live map and data feed will appear here.
        </Typography>
        <Box sx={{ height: 300, background: "#e3e3e3", borderRadius: 2, mb: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Typography color="text.secondary">[Map Placeholder]</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Recent reports and sensor data will be listed here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Dashboard;
