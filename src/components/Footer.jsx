import { Box, Typography, Container, Divider, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { themeConfig } from "../theme";

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 'auto',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: `1px solid ${themeConfig.neutral[200]}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Divider sx={{ mb: 3 }} />
          
          {/* Main Footer Content */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2
            }}
          >
            {/* Brand Section */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  background: themeConfig.gradients.primary,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 1
                }}
              >
                Flood Data Sync
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: themeConfig.neutral[600],
                  maxWidth: 300
                }}
              >
                Empowering communities with real-time flood monitoring and emergency response coordination.
              </Typography>
            </Box>

            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                sx={{
                  color: themeConfig.neutral[600],
                  '&:hover': {
                    color: themeConfig.primary[600],
                    backgroundColor: `rgba(25, 118, 210, 0.08)`,
                  }
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: themeConfig.neutral[600],
                  '&:hover': {
                    color: themeConfig.primary[600],
                    backgroundColor: `rgba(25, 118, 210, 0.08)`,
                  }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: themeConfig.neutral[600],
                  '&:hover': {
                    color: themeConfig.primary[600],
                    backgroundColor: `rgba(25, 118, 210, 0.08)`,
                  }
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Copyright */}
          <Typography 
            variant="body2" 
            sx={{ 
              textAlign: 'center',
              color: themeConfig.neutral[500]
            }}
          >
            © 2024 Flood Data Sync. All rights reserved. | Built for emergency response and community safety.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

