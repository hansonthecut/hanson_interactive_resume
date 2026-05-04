# Deployment Status & Issues Log — HansonFlix Resume

## 1. Technical Context & Workflow
The project is a static web application (HTML/CSS/JS) hosted on **GitHub Pages**, deploying from the `main` branch of the repository `hansonthecut/hanson_interactive_resume`.

### Recent Actions Taken:
- **Local Verification:** Confirmed that `index.html` locally is updated to reflect the "HANSONFLIX" branding and includes references to new portrait assets in `Assets/Portraits of me/`.
- **Git Sync:** Attempted to push local changes. Verified that the `main` branch on GitHub matches the local `index.html`.
- **Heartbeat Commit:** Performed a minor change to `index.html` (adding a build timestamp comment) and pushed to force a GitHub Actions rebuild of the site.

## 2. Current State
- **Localhost:** Correctly displays "HANSONFLIX" and loads all local assets.
- **GitHub Repository:** The code on the `main` branch is up-to-date with your local version.
- **GitHub Pages (Live):** The live site is currently **out of sync**. It is still displaying the old "HANSON" branding and failing to load the new portrait images.

## 3. Critical Issues & Roadblocks

### A. File Size Constraint (GitHub Limit)
- **Problem:** The new background video (`Assets/Colorado mountain drone shots 4K.mp4`) is **370.4 MB**.
- **Impact:** GitHub has a hard limit of **100 MB** for single files.
- **Status:** The video is currently listed in `.gitignore`. It exists on your local machine but **cannot be pushed to GitHub** in its current state. This is why the live site may be missing the hero video or showing a fallback.

### B. Path & Case Sensitivity Issues
- **Problem:** GitHub Pages servers are Linux-based and **case-sensitive**, whereas local Mac filesystems often are not.
- **Impact:** The folder `Assets/` (capital 'A') and filenames with spaces (e.g., `Portraits of me`) can cause 404 errors on the live site if the URL doesn't match perfectly.
- **Status:** The live site is reporting 404 errors for images like `IMG_6409.PNG`.

### C. GitHub Pages Deployment Delay
- **Problem:** Even after a successful push to `main`, the "GitHub Pages" action must complete its build process.
- **Status:** There appears to be a lag or a build failure in the GitHub Actions pipeline preventing the site from updating.

## 4. Required Next Steps for Resolution
1. **Compress the Video:** Use a tool (like Handbrake or FFmpeg) to bring the video under 100MB, or host it on a CDN/Vimeo.
2. **Standardize Paths:** Rename folders to lowercase (e.g., `assets/`) and remove spaces from filenames to ensure cross-platform compatibility.
3. **Verify GitHub Actions:** Check the "Actions" tab on GitHub to see if the deployment script is failing.
