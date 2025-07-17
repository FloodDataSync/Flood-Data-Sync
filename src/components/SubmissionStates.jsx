import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import ReplayIcon from "@mui/icons-material/Replay";
import HomeIcon from "@mui/icons-material/Home";
import { themeConfig } from "../theme";

export function SuccessState({ onSubmitAnother, onGoHome }) {
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 6, 
        width: 500, 
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        border: `2px solid #4caf50`,
        borderRadius: 4,
        boxShadow: themeConfig.shadows.card
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            borderRadius: '24px',
            background: themeConfig.gradients.success,
            color: 'white',
            mb: 1,
            boxShadow: '0 8px 32px rgba(76, 175, 80, 0.4)'
          }}
        >
          <CheckCircleIcon sx={{ fontSize: 60 }} />
        </Box>
        
        <Box>
          <Typography variant="h4" sx={{ color: themeConfig.neutral[900], fontWeight: "bold", mb: 1 }}>
            Report Submitted!
          </Typography>
          <Typography variant="h6" sx={{ color: themeConfig.neutral[600], mb: 2 }}>
            Thank you for helping your community
          </Typography>
          <Typography variant="body1" sx={{ color: themeConfig.neutral[700], maxWidth: 400 }}>
            Your flood report has been successfully submitted and will help authorities 
            respond quickly to the situation. Emergency services have been notified.
          </Typography>
        </Box>

        <Box sx={{ 
          p: 3, 
          bgcolor: "rgba(76, 175, 80, 0.08)", 
          borderRadius: 3, 
          border: "1px solid #4caf50",
          width: '100%'
        }}>
          <Typography variant="body2" sx={{ color: "#2e7d32", fontWeight: 500 }}>
            ✅ Schema validation passed<br/>
            ✅ Data sent to https://marquis.org/v1/form<br/>
            ✅ Authorities notified
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
          <Button
            variant="contained"
            startIcon={<ReplayIcon />}
            onClick={onSubmitAnother}
            sx={{
              flex: 1,
              background: themeConfig.gradients.success,
              "&:hover": { 
                background: "linear-gradient(135deg, #45a049 0%, #66bb6a 100%)" 
              },
              px: 3,
              py: 1.5,
              boxShadow: themeConfig.shadows.button
            }}
          >
            Submit Another Report
          </Button>
          <Button
            variant="outlined"
            startIcon={<HomeIcon />}
            onClick={onGoHome}
            sx={{
              flex: 1,
              borderColor: "#4caf50",
              color: "#4caf50",
              borderWidth: 2,
              "&:hover": { 
                borderColor: "#45a049", 
                color: "#45a049",
                bgcolor: "rgba(76, 175, 80, 0.04)",
                borderWidth: 2
              },
              px: 3,
              py: 1.5
            }}
          >
            Go to Dashboard
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}

export function ErrorState({ error, onRetry, onGoHome }) {
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 6, 
        width: 500, 
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        border: "2px solid #f44336",
        borderRadius: 4,
        boxShadow: themeConfig.shadows.card
      }}
    >
      <Stack spacing={3} alignItems="center">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            borderRadius: '24px',
            background: themeConfig.gradients.error,
            color: 'white',
            mb: 1,
            boxShadow: '0 8px 32px rgba(244, 67, 54, 0.4)'
          }}
        >
          <ErrorIcon sx={{ fontSize: 60 }} />
        </Box>
        
        <Box>
          <Typography variant="h4" sx={{ color: themeConfig.neutral[900], fontWeight: "bold", mb: 1 }}>
            Submission Failed
          </Typography>
          <Typography variant="h6" sx={{ color: themeConfig.neutral[600], mb: 2 }}>
            We couldn't process your report
          </Typography>
          <Typography variant="body1" sx={{ color: themeConfig.neutral[700], maxWidth: 400, mb: 2 }}>
            Don't worry! Your safety is our priority. Please try submitting again 
            or contact emergency services directly if this is urgent.
          </Typography>
        </Box>

        <Box sx={{ 
          p: 3, 
          bgcolor: "rgba(244, 67, 54, 0.08)", 
          borderRadius: 3, 
          border: "1px solid #f44336",
          width: "100%"
        }}>
          <Typography variant="body2" sx={{ color: "#d32f2f", fontWeight: "bold", mb: 1 }}>
            Error Details:
          </Typography>
          <Typography variant="body2" sx={{ color: "#e53935", fontFamily: "monospace", fontSize: '0.8rem' }}>
            {error}
          </Typography>
        </Box>

        <Box sx={{ 
          p: 3, 
          bgcolor: "rgba(255, 152, 0, 0.08)", 
          borderRadius: 3, 
          border: "1px solid #ff9800",
          width: "100%"
        }}>
          <Typography variant="body2" sx={{ color: "#f57c00", fontWeight: "bold" }}>
            💡 Emergency Contact: Call 911 for immediate assistance
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
          <Button
            variant="contained"
            startIcon={<ReplayIcon />}
            onClick={onRetry}
            sx={{
              flex: 1,
              background: themeConfig.gradients.error,
              "&:hover": { 
                background: "linear-gradient(135deg, #e53935 0%, #ef5350 100%)" 
              },
              px: 3,
              py: 1.5,
              boxShadow: themeConfig.shadows.button
            }}
          >
            Try Again
          </Button>
          <Button
            variant="outlined"
            startIcon={<HomeIcon />}
            onClick={onGoHome}
            sx={{
              flex: 1,
              borderColor: "#f44336",
              color: "#f44336",
              borderWidth: 2,
              "&:hover": { 
                borderColor: "#e53935", 
                color: "#e53935",
                bgcolor: "rgba(244, 67, 54, 0.04)",
                borderWidth: 2
              },
              px: 3,
              py: 1.5
            }}
          >
            Go to Dashboard
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
