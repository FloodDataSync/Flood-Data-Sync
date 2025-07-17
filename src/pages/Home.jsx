import { 
  Box, 
  Button, 
  Typography, 
  Grid, 
  Paper, 
  Container,
  Stack,
  Chip
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FloodIcon from "@mui/icons-material/Flood";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { themeConfig } from "../theme";

function Home() {
  const navigate = useNavigate();

  return (
    <Box 
      sx={{ 
        minHeight: "100vh",
        background: themeConfig.gradients.background,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 120,
              borderRadius: '30px',
              background: themeConfig.gradients.primary,
              color: 'white',
              mb: 4,
              boxShadow: themeConfig.shadows.button
            }}
          >
            <FloodIcon sx={{ fontSize: 60 }} />
          </Box>
          
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: "bold", 
              mb: 2,
              background: themeConfig.gradients.primary,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Flood Data Sync
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: themeConfig.neutral[600], 
              mb: 4,
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            Empowering communities with real-time flood monitoring and emergency response coordination
          </Typography>

          {/* Feature Chips */}
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" sx={{ gap: 1 }}>
            <Chip 
              icon={<SpeedIcon />} 
              label="Real-time Monitoring" 
              sx={{
                background: `rgba(25, 118, 210, 0.1)`,
                color: themeConfig.primary[700],
                border: `1px solid ${themeConfig.primary[200]}`,
                fontWeight: 500
              }}
            />
            <Chip 
              icon={<SecurityIcon />} 
              label="Secure & Anonymous" 
              sx={{
                background: `rgba(76, 175, 80, 0.1)`,
                color: '#2e7d32',
                border: `1px solid #a5d6a7`,
                fontWeight: 500
              }}
            />
            <Chip 
              icon={<NotificationsActiveIcon />} 
              label="Emergency Alerts" 
              sx={{
                background: `rgba(255, 152, 0, 0.1)`,
                color: '#f57c00',
                border: `1px solid #ffcc02`,
                fontWeight: 500
              }}
            />
          </Stack>
        </Box>

        {/* Role Selection */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: themeConfig.neutral[900] }}>
            How can we help you today?
          </Typography>
          <Typography variant="h6" sx={{ color: themeConfig.neutral[600], mb: 6 }}>
            Choose your role to get started
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={5}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 6, 
                textAlign: 'center',
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${themeConfig.neutral[200]}`,
                boxShadow: themeConfig.shadows.card,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: themeConfig.shadows.hover
                }
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  borderRadius: '20px',
                  background: themeConfig.gradients.primary,
                  color: 'white',
                  mb: 3,
                  boxShadow: themeConfig.shadows.button
                }}
              >
                <PersonIcon sx={{ fontSize: 40 }} />
              </Box>
              
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: themeConfig.neutral[900] }}>
                Citizen
              </Typography>
              <Typography variant="body1" sx={{ color: themeConfig.neutral[600], mb: 4, lineHeight: 1.6 }}>
                Report floods in your area, receive real-time emergency alerts, and help protect your community through collaborative monitoring.
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => navigate("/report")}
                sx={{
                  py: 2,
                  background: themeConfig.gradients.primary,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  boxShadow: themeConfig.shadows.button,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                    boxShadow: themeConfig.shadows.hover
                  }
                }}
              >
                🚨 Report Emergency
              </Button>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={5}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 6, 
                textAlign: 'center',
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${themeConfig.neutral[200]}`,
                boxShadow: themeConfig.shadows.card,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: themeConfig.shadows.hover
                }
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  borderRadius: '20px',
                  background: themeConfig.gradients.secondary,
                  color: 'white',
                  mb: 3,
                  boxShadow: themeConfig.shadows.button
                }}
              >
                <AdminPanelSettingsIcon sx={{ fontSize: 40 }} />
              </Box>
              
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 2, color: themeConfig.neutral[900] }}>
                Authority
              </Typography>
              <Typography variant="body1" sx={{ color: themeConfig.neutral[600], mb: 4, lineHeight: 1.6 }}>
                Access comprehensive dashboards, analyze flood data in real-time, and coordinate emergency response efforts efficiently.
              </Typography>
              
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => navigate("/dashboard")}
                sx={{
                  py: 2,
                  borderColor: themeConfig.primary[400],
                  color: themeConfig.primary[600],
                  borderWidth: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 3,
                  '&:hover': {
                    borderColor: themeConfig.primary[600],
                    borderWidth: 2,
                    backgroundColor: `rgba(25, 118, 210, 0.04)`,
                    color: themeConfig.primary[700]
                  }
                }}
              >
                📊 Access Dashboard
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );

}

export default Home;
