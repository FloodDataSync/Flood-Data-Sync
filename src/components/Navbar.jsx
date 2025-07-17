import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  IconButton,
  useTheme
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import FloodIcon from "@mui/icons-material/Flood";
import HomeIcon from "@mui/icons-material/Home";
import ReportIcon from "@mui/icons-material/Report";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { themeConfig } from "../theme";

function Navbar() {
  const theme = useTheme();
  const location = useLocation();

  const navItems = [
    { path: "/home", label: "Home", icon: <HomeIcon /> },
    { path: "/report", label: "Report", icon: <ReportIcon /> },
    { path: "/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{ 
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${themeConfig.neutral[200]}`,
        color: themeConfig.neutral[900]
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Logo Section */}
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 40,
              height: 40,
              borderRadius: '12px',
              background: themeConfig.gradients.primary,
              color: 'white',
              boxShadow: themeConfig.shadows.button
            }}
          >
            <FloodIcon sx={{ fontSize: 24 }} />
          </Box>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              fontWeight: 700,
              background: themeConfig.gradients.primary,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            Flood Data Sync
          </Typography>
        </Link>

        {/* Navigation Items */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              startIcon={item.icon}
              variant={isActive(item.path) ? "contained" : "text"}
              sx={{
                minWidth: { xs: 'auto', sm: 120 },
                px: { xs: 1, sm: 2 },
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                color: isActive(item.path) ? 'white' : themeConfig.neutral[600],
                background: isActive(item.path) 
                  ? themeConfig.gradients.primary 
                  : 'transparent',
                '&:hover': {
                  background: isActive(item.path) 
                    ? 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)'
                    : `rgba(25, 118, 210, 0.08)`,
                  color: isActive(item.path) ? 'white' : themeConfig.primary[700],
                },
                '& .MuiButton-startIcon': {
                  mr: { xs: 0, sm: 1 }
                },
                '& .MuiButton-startIcon > svg': {
                  fontSize: { xs: 20, sm: 18 }
                }
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {item.label}
              </Box>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
// export default Navbar;
