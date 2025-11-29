# StudyFinder - Vercel Deployment Guide

This guide will walk you through building and deploying your StudyFinder project to Vercel step by step.

## Prerequisites

Before you begin, make sure you have:

- A [GitHub](https://github.com) account
- A [Vercel](https://vercel.com) account
- Node.js 18+ installed locally
- Git installed on your machine

## Step 1: Prepare Your Project

### 1.1 Test Build Locally

Before deploying, ensure your project builds without errors:

```bash
npm run build
```

If this command completes without errors, your project is ready to deploy.

### 1.2 Verify `.gitignore`

Make sure your `.gitignore` file exists and contains:

```
node_modules
.env.local
.env.*.local
.next
out
dist
```

## Step 2: Push Your Project to GitHub

### 2.1 Initialize Git Repository (if not already done)

```bash
git init
```

### 2.2 Add All Files

```bash
git add .
```

### 2.3 Create Initial Commit

```bash
git commit -m "Initial commit: StudyFinder project"
```

### 2.4 Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name it `Study-Finder` (or your preferred name)
5. Add a description: "A platform to find the best study resources"
6. Choose **Public** or **Private**
7. Click **Create repository**

### 2.5 Connect Local Repository to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Study-Finder.git
git push -u origin main
```

## Step 3: Deploy to Vercel

### Method 1: Deploy via Vercel Web Dashboard (Recommended)

#### 3.1 Sign Up/Log In to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** (or log in if you already have an account)
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub account

#### 3.2 Import Your Project

1. On the Vercel dashboard, click **Add New** → **Project**
2. Click **Import Git Repository**
3. Find your `Study-Finder` repository and click **Import**

#### 3.3 Configure Project Settings

The import page will show these settings:

- **Project Name**: `study-finder` (or your preferred name)
- **Framework**: Automatically detected as **Next.js** ✓
- **Root Directory**: `./my-app` (if your Next.js app is in this folder)
  - Or leave blank if it's at the root

#### 3.4 Environment Variables (Optional)

If you have any `.env.local` variables needed for production:

1. Click **Environment Variables**
2. Add each variable (Name and Value)
3. Select which environments (Production, Preview, Development)

**Common variables for StudyFinder** (if needed):

```
NEXT_PUBLIC_API_URL=https://your-api.com
```

#### 3.5 Deploy

Click **Deploy** and wait for the build to complete (2-5 minutes).

Once deployment completes, you'll see:

- ✅ **Production URL**: `https://study-finder-xxx.vercel.app`
- View your live site by clicking the URL

### Method 2: Deploy via Vercel CLI

#### 3.1 Install Vercel CLI

```bash
npm i -g vercel
```

#### 3.2 Deploy from Command Line

Navigate to your project root:

```bash
cd d:\Projects\WBD\Study-Finder\my-app
```

Then run:

```bash
vercel
```

#### 3.3 Follow the Prompts

- Confirm project name
- Select scope (your personal account)
- Link to existing project or create new
- Follow on-screen instructions

## Step 4: Verify Deployment

### 4.1 Check Your Live Site

1. Visit the URL provided by Vercel
2. Test all sections:
   - Navigation menu
   - Buttons (gradient, neon effects)
   - Animations (hero, cards, footer)
   - Responsive design on mobile
   - Dark/Light theme toggle

### 4.2 Check Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project
3. View:
   - **Deployments**: History of all deployments
   - **Analytics**: Performance metrics
   - **Settings**: Domain, environment variables, etc.

## Step 5: Custom Domain (Optional)

### 5.1 Add Custom Domain

1. In Vercel project dashboard, go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `studyfinder.com`)
4. Follow DNS configuration instructions from your domain registrar

### 5.2 SSL Certificate

Vercel automatically provides SSL certificates via Let's Encrypt ✓

## Step 6: Continuous Deployment Setup

Vercel automatically redeploys whenever you push to GitHub:

### 6.1 Update Your Project

```bash
git add .
git commit -m "Update: Add new features"
git push origin main
```

### 6.2 Automatic Deployment

Vercel will:

1. Detect the push
2. Build your project
3. Deploy to production

You can monitor this in the Vercel dashboard under **Deployments**.

## Step 7: Environment Variables & Secrets

### 7.1 Add Production Secrets

1. Go to project **Settings** → **Environment Variables**
2. Add variables that shouldn't be in git:
   - Database URLs
   - API keys
   - Secret tokens

Example:

```
NEXT_PUBLIC_API_URL = https://api.example.com
DATABASE_URL = postgresql://...
```

## Step 8: Monitoring & Debugging

### 8.1 Check Build Logs

1. Go to **Deployments** tab
2. Click a deployment
3. View logs under **Build & Deployment Logs**

### 8.2 Common Issues & Solutions

**Issue**: Build fails with module not found

- **Solution**: Run `npm install` locally, commit `package-lock.json`, then push

**Issue**: Styles not loading

- **Solution**: Ensure all CSS imports are correct and Tailwind is configured in `tailwind.config.js`

**Issue**: Environment variables not working

- **Solution**: Verify variable names match exactly (including `NEXT_PUBLIC_` prefix for client-side)

## Step 9: Performance Optimization

### 9.1 Enable Vercel Analytics

1. Project **Settings** → **Analytics**
2. Enable **Web Vitals** to track performance

### 9.2 Image Optimization

Vercel automatically optimizes images via Next.js Image component

### 9.3 Caching Headers

Already configured in Next.js build process

## Quick Reference - Deployment Checklist

- [ ] Local build succeeds: `npm run build`
- [ ] All changes committed: `git add . && git commit -m "..."`
- [ ] Pushed to GitHub: `git push origin main`
- [ ] Vercel project created
- [ ] Deployment complete and verified
- [ ] Custom domain configured (optional)
- [ ] Environment variables set
- [ ] Analytics enabled

## Troubleshooting

### "Build failed"

1. Check build logs on Vercel
2. Run `npm run build` locally to replicate error
3. Fix errors locally, commit, and push again

### "Site is blank or showing errors"

1. Check the Vercel deployment logs
2. Verify framework is set to Next.js
3. Check that root directory is correct (`./my-app` if needed)

### "Styles not showing"

1. Ensure `tailwind.config.js` includes correct paths
2. Verify CSS imports in `app/globals.css`
3. Redeploy by pushing to GitHub

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/learn/basics/deploying-nextjs-app)
- [Vercel GitHub Integration](https://vercel.com/docs/git/vercel-for-github)

---

## Success! 🎉

Your StudyFinder project is now live on Vercel!

**Next Steps:**

- Share your live URL
- Monitor performance in Analytics
- Set up custom domain
- Configure automatic deployments for your team

For questions, visit [Vercel Support](https://vercel.com/support).
