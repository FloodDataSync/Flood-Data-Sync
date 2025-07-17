import { Box, Typography, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

function Settings() {
  const [language, setLanguage] = useState("en");

  return (
    <Box sx={{ mt: 8, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" gutterBottom>
          Settings
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Language
        </Typography>
        <ToggleButtonGroup
          color="primary"
          value={language}
          exclusive
          onChange={(_, val) => val && setLanguage(val)}
          fullWidth
        >
          <ToggleButton value="en">English</ToggleButton>
          <ToggleButton value="yo">Yoruba</ToggleButton>
          <ToggleButton value="ha">Hausa</ToggleButton>
        </ToggleButtonGroup>
      </Paper>
    </Box>
  );
}

export default Settings;
