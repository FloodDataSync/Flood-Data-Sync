import { Box, Typography, Paper, Button, Stack } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function Validation() {
  // This would be mapped from fetched reports in a real app
  return (
    <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" gutterBottom>
          Validate Reports
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          <b>Location:</b> Lagos, Nigeria<br />
          <b>Description:</b> Heavy flooding on main road, cars stranded.<br />
          <b>Photo:</b> (Image preview here)
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="success" startIcon={<ThumbUpIcon />}>
            Yes
          </Button>
          <Button variant="contained" color="error" startIcon={<ThumbDownIcon />}>
            No
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}

export default Validation;
