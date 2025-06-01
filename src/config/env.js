// Environment configuration
// This file safely handles environment variables with fallbacks

export const ENV_CONFIG = {
  // Contact Form
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'arnolddsouza1999@gmail.com',
  FORMSUBMIT_ENDPOINT: import.meta.env.VITE_FORMSUBMIT_ENDPOINT || 'https://formsubmit.co/arnolddsouza1999@gmail.com',
  
  // Google Services
  GOOGLE_SITE_VERIFICATION: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || 'ZYNfZwMUiNwSMF3EMvY85bid2BVvB12uMMRfUNWw75A',
  
  // Social Media Links
  SOCIAL_LINKS: {
    LINKEDIN: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/arnold-dsouza-a169b8195',
    GITHUB: import.meta.env.VITE_GITHUB_URL || 'https://github.com/Arnold-Dsouza',
    INSTAGRAM: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/arnolddsouza1999/',
    YOUTUBE: import.meta.env.VITE_YOUTUBE_URL || 'https://www.youtube.com/@arnolddsouza9287'
  },
  
  // Website Metadata
  SITE_URL: import.meta.env.VITE_SITE_URL || 'https://portfolio-website-m8g7titn4-arnold-dsouzas-projects.vercel.app',
  SITE_NAME: import.meta.env.VITE_SITE_NAME || 'Arnold D\'Souza',
  SITE_DESCRIPTION: import.meta.env.VITE_SITE_DESCRIPTION || 'Robotics Engineer and Software Developer',
  
  // Development flags
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD
};

// Helper function to safely get environment variables
export const getEnvVar = (key, fallback = '') => {
  const value = import.meta.env[key];
  if (!value && import.meta.env.DEV) {
    console.warn(`Environment variable ${key} is not set. Using fallback: ${fallback}`);
  }
  return value || fallback;
};

// Validate required environment variables in production
export const validateEnvVars = () => {
  const requiredVars = [
    'VITE_CONTACT_EMAIL',
    'VITE_FORMSUBMIT_ENDPOINT'
  ];
  
  if (ENV_CONFIG.IS_PRODUCTION) {
    const missingVars = requiredVars.filter(varName => !import.meta.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('Missing required environment variables:', missingVars);
      // In production, you might want to show a user-friendly error
    }
  }
};

// Initialize validation
validateEnvVars();
