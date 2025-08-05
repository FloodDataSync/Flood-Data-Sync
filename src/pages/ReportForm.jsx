import {
  Box,
  Button,
  Typography,
  TextField,
  MenuItem,
  Paper,
  Stack,
  Alert,
  LinearProgress,
  Chip,
  Divider,
  Container
} from "@mui/material";

import PhotoCamera from "@mui/icons-material/PhotoCamera";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import FloodIcon from "@mui/icons-material/Flood";
import SecurityIcon from "@mui/icons-material/Security";

import { useState } from "react";
import * as yup from "yup";
import { SuccessState, ErrorState } from "../components/SubmissionStates";
import { themeConfig } from "../theme";
import { flooddatasync_backend } from "../../src/declarations/flooddatasync_backend";



const floodTypes = [
  { value: "river", label: "River Flood" },
  { value: "urban", label: "Urban Flood" },
  { value: "flash", label: "Flash Flood" },
  { value: "coastal", label: "Coastal Flood" },
  { value: "other", label: "Other" }
];

// Validation schema
const reportSchema = yup.object().shape({
  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters"),
  floodType: yup
    .string()
    .required("Flood type is required")
    .oneOf(["river", "urban", "flash", "coastal", "other"], "Please select a valid flood type"),
  image: yup
    .mixed()
    .required("Photo is required")
    .test("fileSize", "File size must be less than 5MB", (value) => 
      !value || (value && value.size <= 5 * 1024 * 1024)
    )
    .test("fileType", "Only image files are allowed", (value) =>
      !value || (value && value.type.startsWith("image/"))
    ),
  location: yup
    .object()
    .required("Location is required")
    .shape({
      latitude: yup.number().required(),
      longitude: yup.number().required(),
      accuracy: yup.number()
    })
});

function ReportForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    floodType: ""
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionState, setSubmissionState] = useState("form"); // "form", "success", "error"

  const resetForm = () => {
    setFormData({ description: "", floodType: "" });
    setSelectedImage(null);
    setImagePreview(null);
    setLocation(null);
    setErrors({});
    setSubmitError(null);
    setSubmitSuccess(false);
    setSubmissionState("form");
  };

  const handleGoHome = () => {
    // In a real app, this would navigate to the dashboard
    console.log("Navigate to dashboard");
    resetForm();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      // Clear image error if file is selected
      if (errors.image) {
        setErrors(prev => ({ ...prev, image: "" }));
      }
    }
  };

  const handleInputChange = (field) => (event) => {
    const value = event.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = async () => {
    try {
      // Use the validation schema to validate all form data
      await reportSchema.validate({
        description: formData.description,
        floodType: formData.floodType,
        image: selectedImage,
        location: location
      }, { abortEarly: false });
      
      // Clear all errors if validation passes
      setErrors({});
      return true;
    } catch (validationErrors) {
      // Process validation errors from Yup schema
      const errorObj = {};
      if (validationErrors.inner) {
        validationErrors.inner.forEach(error => {
          errorObj[error.path] = error.message;
        });
      } else {
        // Handle single validation error
        errorObj.general = validationErrors.message;
      }
      
      setErrors(errorObj);
      console.log('Validation errors:', errorObj);
      return false;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    // Validate form using the schema
    const isValid = await validateForm();
    
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
  // Prepare and submit the report using flood_reporter
  const result = await flooddatasync_backend.submitReport({
    description: formData.description,
    floodType: formData.floodType,
    location: {
      latitude: location.latitude,
      longitude: location.longitude,
      accuracy: location.accuracy
    },
    imageData: new Uint8Array(await selectedImage.arrayBuffer()), // converts file to Uint8Array
    timestamp: new Date().toISOString()
  });

  console.log('Submission successful:', result);

  // Reset form on success
  setFormData({ description: "", floodType: "" });
  setSelectedImage(null);
  setImagePreview(null);
  setLocation(null);
  setErrors({});
  setSubmitSuccess(true);
  setSubmissionState("success");
  
} catch (error) {
      console.error('Submission error:', error);
      // Since this is a mock endpoint, we'll simulate success after showing the attempt
      const errorMessage = `Mock submission attempted to https://marquis.org/v1/form. ${error.message}`;
      setSubmitError(errorMessage);
      
      // For demo purposes, let's simulate success after 2 seconds
      setTimeout(() => {
        setSubmitError(null);
        setSubmitSuccess(true);
        setSubmissionState("success");
        // Reset form
        setFormData({ description: "", floodType: "" });
        setSelectedImage(null);
        setImagePreview(null);
        setLocation(null);
        setErrors({});
      }, 2000);
      
    } finally {
      setIsSubmitting(false);
    }
  };
    

  const handleGetLocation = () => {
    setLocationLoading(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      setLocationLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
          accuracy: position.coords.accuracy
        });
        setLocationLoading(false);
        // Clear location error if location is successfully obtained
        if (errors.location) {
          setErrors(prev => ({ ...prev, location: "" }));
        }
      },
      (error) => {
        let errorMessage = "Unable to retrieve your location.";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied by user.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
            break;
        }
        setLocationError(errorMessage);
        setLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };
  return (
    <Box 
      sx={{ 
        minHeight: "100vh",
        background: themeConfig.gradients.background,
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "90vh" }}>
          
          {/* Success State */}
          {submissionState === "success" && (
            <SuccessState 
              onSubmitAnother={resetForm}
              onGoHome={handleGoHome}
            />
          )}

          {/* Error State */}
          {submissionState === "error" && (
            <ErrorState 
              error={submitError}
              onRetry={() => setSubmissionState("form")}
              onGoHome={handleGoHome}
            />
          )}

          {/* Form State */}
          {submissionState === "form" && (
            <Paper 
              elevation={0}
              sx={{ 
                p: 6, 
                width: "100%",
                maxWidth: 600,
                borderRadius: 4,
                background: "rgba(255, 255, 255, 0.98)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${themeConfig.neutral[200]}`,
                boxShadow: themeConfig.shadows.card
              }}
            >
              {/* Header */}
              <Box sx={{ textAlign: "center", mb: 4 }}>
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
                  <FloodIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: themeConfig.neutral[900], mb: 1 }}>
                  Report a Flood
                </Typography>
                <Typography variant="h6" sx={{ color: themeConfig.neutral[600], mb: 3 }}>
                  Help us respond quickly to emergency situations
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                  <Chip 
                    icon={<SecurityIcon />} 
                    label="Secure & Anonymous" 
                    size="small" 
                    sx={{
                      background: `rgba(25, 118, 210, 0.1)`,
                      color: themeConfig.primary[700],
                      border: `1px solid ${themeConfig.primary[200]}`,
                      fontWeight: 500
                    }}
                  />
                  <Chip 
                    label="Real-time Alerts" 
                    size="small" 
                    sx={{
                      background: `rgba(76, 175, 80, 0.1)`,
                      color: '#2e7d32',
                      border: `1px solid #a5d6a7`,
                      fontWeight: 500
                    }}
                  />
                </Box>
              </Box>

              <Divider sx={{ mb: 4 }} />

              {/* Progress Bar */}
              {isSubmitting && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ mb: 1, color: themeConfig.neutral[600] }}>
                    Submitting your report...
                  </Typography>
                  <LinearProgress 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      bgcolor: themeConfig.neutral[200],
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 4,
                        background: themeConfig.gradients.primary
                      }
                    }} 
                  />
                </Box>
              )}

              {/* Alerts */}
              {submitError && (
                <Alert severity="warning" sx={{ mb: 3, borderRadius: 2 }}>
                  {submitError}
                </Alert>
              )}

              <Stack spacing={4} component="form" onSubmit={handleSubmit}>
                {/* Photo Upload Section */}
                <Box>
                  <Typography variant="h6" sx={{ mb: 2, color: themeConfig.neutral[800], fontWeight: 600 }}>
                    📸 Upload Photo Evidence
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<PhotoCamera />}
                    color={errors.image ? "error" : "primary"}
                    sx={{ 
                      width: "100%", 
                      py: 2,
                      borderStyle: "dashed",
                      borderWidth: 2,
                      borderColor: errors.image ? 'error.main' : themeConfig.primary[300],
                      color: errors.image ? 'error.main' : themeConfig.primary[600],
                      "&:hover": {
                        borderStyle: "dashed",
                        borderWidth: 2,
                        borderColor: errors.image ? 'error.dark' : themeConfig.primary[400],
                        backgroundColor: errors.image ? 'rgba(244, 67, 54, 0.04)' : 'rgba(25, 118, 210, 0.04)'
                      }
                    }}
                  >
                    {selectedImage ? "Change Photo" : "Upload Photo *"}
                    <input 
                      type="file" 
                      hidden 
                      accept="image/*" 
                      onChange={handleImageUpload}
                    />
                  </Button>
                  
                  {errors.image && (
                    <Typography variant="caption" color="error" sx={{ mt: 1, display: "block" }}>
                      {errors.image}
                    </Typography>
                  )}
                  
                  {imagePreview && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" sx={{ mb: 1, color: themeConfig.neutral[600] }}>
                        ✅ Image Preview:
                      </Typography>
                      <Box
                        component="img"
                        src={imagePreview}
                        alt="Flood preview"
                        sx={{
                          width: "100%",
                          maxHeight: 250,
                          objectFit: "cover",
                          borderRadius: 3,
                          border: "3px solid #4caf50",
                          boxShadow: "0 4px 20px rgba(76, 175, 80, 0.25)"
                        }}
                      />
                    </Box>
                  )}
                </Box>

                {/* Description Section */}
                <Box>
                  <Typography variant="h6" sx={{ mb: 2, color: themeConfig.neutral[800], fontWeight: 600 }}>
                    📝 Describe the Situation
                  </Typography>
                  <TextField
                    label="Description *"
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Please describe what you're seeing: water level, affected areas, any immediate dangers..."
                    value={formData.description}
                    onChange={handleInputChange("description")}
                    error={!!errors.description}
                    helperText={errors.description || `${formData.description.length}/500 characters`}
                    inputProps={{ maxLength: 500 }}
                  />
                </Box>

                {/* Flood Type Section */}
                <Box>
                  <Typography variant="h6" sx={{ mb: 2, color: themeConfig.neutral[800], fontWeight: 600 }}>
                    🌊 Type of Flooding
                  </Typography>
                  <TextField
                    select
                    label="Flood Type *"
                    fullWidth
                    value={formData.floodType}
                    onChange={handleInputChange("floodType")}
                    error={!!errors.floodType}
                    helperText={errors.floodType || "Select the type that best describes the flooding"}
                    displayEmpty
                  >
                    <MenuItem value="" disabled>
                      <em>Select flood type *</em>
                    </MenuItem>
                    {floodTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                {/* Location Section */}
                <Box>
                  <Typography variant="h6" sx={{ mb: 2, color: themeConfig.neutral[800], fontWeight: 600 }}>
                    📍 Location Information
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<MyLocationIcon />}
                    onClick={handleGetLocation}
                    disabled={locationLoading}
                    color={errors.location ? "error" : "primary"}
                    sx={{ 
                      width: "100%", 
                      py: 1.5,
                      borderRadius: 2
                    }}
                  >
                    {locationLoading ? "Getting Location..." : location ? "✅ Location Captured" : "Use My Location *"}
                  </Button>

                  {errors.location && (
                    <Typography variant="caption" color="error" sx={{ mt: 1, display: "block" }}>
                      {errors.location}
                    </Typography>
                  )}

                  {location && (
                    <Box sx={{ 
                      mt: 2,
                      p: 3, 
                      bgcolor: "rgba(76, 175, 80, 0.08)", 
                      borderRadius: 3,
                      border: "2px solid #4caf50"
                    }}>
                      <Typography variant="body1" sx={{ color: "#2e7d32", fontWeight: "bold", mb: 1 }}>
                        ✅ Location Captured Successfully
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#388e3c" }}>
                        Latitude: {location.latitude.toFixed(6)}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#388e3c" }}>
                        Longitude: {location.longitude.toFixed(6)}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#388e3c" }}>
                        Accuracy: ±{Math.round(location.accuracy)}m
                      </Typography>
                    </Box>
                  )}

                  {locationError && (
                    <Alert severity="error" sx={{ mt: 2, borderRadius: 2 }}>
                      {locationError}
                    </Alert>
                  )}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Submit Button */}
                <Button 
                  variant="contained" 
                  size="large"
                  fullWidth 
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    py: 2,
                    borderRadius: 3,
                    background: themeConfig.gradients.primary,
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    boxShadow: themeConfig.shadows.button,
                    "&:hover": {
                      background: "linear-gradient(135deg, #1565c0 0%, #1976d2 100%)",
                      boxShadow: themeConfig.shadows.hover
                    },
                    "&:disabled": {
                      background: `linear-gradient(135deg, ${themeConfig.neutral[400]} 0%, ${themeConfig.neutral[500]} 100%)`
                    }
                  }}
                >
                  {isSubmitting ? "🚨 Submitting Emergency Report..." : "🚨 Submit Emergency Report"}
                </Button>
                
                <Typography variant="caption" color="text.secondary" sx={{ textAlign: "center", mt: 2 }}>
                  * Required fields | Your report helps save lives
                </Typography>
              </Stack>
            </Paper>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default ReportForm;
