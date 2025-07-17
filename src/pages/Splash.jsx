import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Stack,
  Paper,
  Chip,
  Fade
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FloodIcon from "@mui/icons-material/Flood";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PublicIcon from "@mui/icons-material/Public";
import GroupsIcon from "@mui/icons-material/Groups";
import SecurityIcon from "@mui/icons-material/Security";
import { themeConfig } from "../theme";
import { useState, useEffect } from "react";

function Splash() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Box 
      sx={{ 
        minHeight: "100vh",
        background: themeConfig.gradients.secondary,
        display: 'flex',
        alignItems: 'center',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Fade in={fadeIn} timeout={1000}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 8, 
              textAlign: "center",
              borderRadius: 6,
              background: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${themeConfig.neutral[200]}`,
              boxShadow: '0 20px 60px rgba(25, 118, 210, 0.2)'
            }}
          >
            {/* Logo and Title */}
            <Box sx={{ mb: 6 }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 140,
                  height: 140,
                  borderRadius: '35px',
                  background: themeConfig.gradients.primary,
                  color: 'white',
                  mb: 4,
                  boxShadow: '0 12px 40px rgba(25, 118, 210, 0.4)'
                }}
              >
                <FloodIcon sx={{ fontSize: 70 }} />
              </Box>
              
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: "bold", 
                  mb: 2,
                  background: themeConfig.gradients.primary,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Flood Data Sync
              </Typography>
              
              <Typography 
                variant="h4" 
                sx={{ 
                  color: themeConfig.neutral[600], 
                  fontWeight: 400,
                  mb: 1
                }}
              >
                Crowdsourced & IoT-powered flood monitoring
              </Typography>
              
              <Chip 
                label="🇳🇬 Built for Nigeria" 
                sx={{
                  background: `rgba(76, 175, 80, 0.1)`,
                  color: '#2e7d32',
                  border: `1px solid #a5d6a7`,
                  fontWeight: 600,
                  fontSize: '1rem',
                  py: 2,
                  px: 1
                }}
              />
            </Box>

            {/* Value Proposition */}
            <Typography 
              variant="h6" 
              sx={{ 
                color: themeConfig.neutral[700], 
                mb: 6,
                lineHeight: 1.6,
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Flooding devastates communities across Nigeria every year. Our platform empowers 
              citizens and authorities with <strong>real-time, peer-validated flood reports</strong> and 
              sensor data to <strong>save lives and protect property</strong>.
            </Typography>

            {/* Feature Highlights */}
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center" 
              sx={{ mb: 6 }}
            >
              <Chip 
                icon={<GroupsIcon />} 
                label="Community-Driven" 
                sx={{
                  background: `rgba(25, 118, 210, 0.1)`,
                  color: themeConfig.primary[700],
                  border: `1px solid ${themeConfig.primary[200]}`,
                  fontWeight: 500,
                  py: 2
                }}
              />
              <Chip 
                icon={<PublicIcon />} 
                label="Real-time Monitoring" 
                sx={{
                  background: `rgba(76, 175, 80, 0.1)`,
                  color: '#2e7d32',
                  border: `1px solid #a5d6a7`,
                  fontWeight: 500,
                  py: 2
                }}
              />
              <Chip 
                icon={<SecurityIcon />} 
                label="Emergency Response" 
                sx={{
                  background: `rgba(255, 152, 0, 0.1)`,
                  color: '#f57c00',
                  border: `1px solid #ffcc02`,
                  fontWeight: 500,
                  py: 2
                }}
              />
            </Stack>

            {/* CTA Button */}
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/home")}
              sx={{
                py: 2.5,
                px: 6,
                fontSize: '1.2rem',
                fontWeight: 600,
                borderRadius: 4,
                background: themeConfig.gradients.primary,
                boxShadow: '0 8px 30px rgba(25, 118, 210, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                  boxShadow: '0 12px 40px rgba(25, 118, 210, 0.5)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Started Now
            </Button>

            <Typography 
              variant="body2" 
              sx={{ 
                color: themeConfig.neutral[500], 
                mt: 3,
                fontStyle: 'italic'
              }}
            >
              Join thousands of Nigerians protecting their communities
            </Typography>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}

export default Splash;

