# Security Guidelines

## 🔒 Environment Variables

This project uses environment variables to protect sensitive information. Never commit sensitive data directly to the repository.

### Setup Environment Variables

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Fill in your actual values:**
   ```bash
   # Contact Form Configuration
   VITE_CONTACT_EMAIL=your-actual-email@example.com
   VITE_FORMSUBMIT_ENDPOINT=https://formsubmit.co/your-actual-email@example.com

   # Google Services
   VITE_GOOGLE_SITE_VERIFICATION=your-actual-verification-code

   # Social Media Links
   VITE_LINKEDIN_URL=https://linkedin.com/in/your-actual-profile
   VITE_GITHUB_URL=https://github.com/your-actual-username
   VITE_INSTAGRAM_URL=https://instagram.com/your-actual-username
   VITE_YOUTUBE_URL=https://youtube.com/@your-actual-channel
   ```

### Vercel Deployment

For production deployment on Vercel, add environment variables in the Vercel dashboard:

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable with the `VITE_` prefix

## 🛡️ Security Best Practices

### ✅ What We Do Right

- **Environment Variables**: All sensitive data is stored in environment variables
- **Gitignore Protection**: `.env*` files are ignored by git
- **Fallback Values**: Safe fallback values for development
- **No Hardcoded Secrets**: No API keys or credentials in source code

### ⚠️ Security Considerations

1. **Email Exposure**: Contact form endpoint contains email address
   - This is necessary for FormSubmit.co functionality
   - Consider using a dedicated contact email

2. **Social Media Links**: Personal social media URLs are public
   - This is intentional for portfolio purposes
   - Use professional accounts only

3. **Google Site Verification**: Verification token is public
   - This is safe and necessary for Google Search Console
   - No security risk

## 🔍 Security Audit Checklist

- [ ] No API keys in source code
- [ ] No database credentials exposed
- [ ] Environment variables properly configured
- [ ] `.env*` files in `.gitignore`
- [ ] Production environment variables set in Vercel
- [ ] No sensitive data in git history

## 🚨 If You Find a Security Issue

1. **Do NOT** create a public issue
2. Email security concerns to: [your-security-email@example.com]
3. Include detailed description of the vulnerability
4. Allow reasonable time for response before public disclosure

## 📋 Regular Security Maintenance

### Monthly Tasks
- [ ] Review environment variables
- [ ] Check for exposed secrets in new commits
- [ ] Update dependencies for security patches
- [ ] Review access logs (if applicable)

### Before Each Deployment
- [ ] Verify no secrets in code
- [ ] Check environment variables are set
- [ ] Test with production-like environment
- [ ] Review recent commits for sensitive data

## 🔧 Tools for Security

### Recommended Tools
- **git-secrets**: Prevent committing secrets
- **truffleHog**: Find secrets in git history
- **npm audit**: Check for vulnerable dependencies

### Installation
```bash
# Install git-secrets
git secrets --install
git secrets --register-aws

# Check for vulnerabilities
npm audit
npm audit fix
```

## 📞 Contact

For security-related questions or concerns:
- Email: [your-security-email@example.com]
- Create a private security issue in GitHub

---

*Last updated: December 2024*
