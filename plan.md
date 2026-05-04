# Project Plan: HansonFlix Interactive Resume

## 1. Current Progress (Completed)
- [x] **Rebranding:** "Hanson" changed back to **HANSONFLIX**.
- [x] **Naming Convention Overhaul:** 
    - Renamed folders to lowercase (`assets/`, `documents/`).
    - Standardized subfolders to snake_case (`assets/portraits_of_me/`).
- [x] **Asset Optimization:**
    - Replaced 4K drone video (370MB) with a GitHub-optimized version (72MB).
    - Updated `index.html` and `script.js` to point to the new lowercase paths.
- [x] **Local Verification:** Verified that the site loads correctly on localhost with the new video and images.

## 2. Best Future Conventions (To Avoid Deployment Issues)
To ensure smooth deployment to GitHub Pages (which is Linux-based and case-sensitive), always follow these rules:

| Rule | Bad Practice | Best Practice | Rationale |
| :--- | :--- | :--- | :--- |
| **Case Sensitivity** | `Assets/Logo.PNG` | `assets/logo.png` | Linux servers treat `A` and `a` as different folders. Lowercase is the web standard. |
| **Spaces in Names** | `Drone shot 4K.mp4` | `drone_shot_4k.mp4` | Spaces require URL encoding (`%20`) and often break script logic. |
| **File Size** | Files > 100MB | Files < 50MB | GitHub rejects any single file over 100MB. Aim for <50MB for faster loading. |
| **Paths** | `/Users/frank/Assets/...` | `assets/...` | Always use relative paths so the code works on any machine/server. |

## 3. Pending Actions
- [ ] **Final Push:** Stage all renamed files and the new video, then push to `main`.
- [ ] **Verify Live Site:** Check GitHub Actions to ensure the build completes and assets load on the `.io` domain.
- [ ] **Cleanup:** Remove the old 4K video from the local `assets/` folder if no longer needed (it's currently ignored by Git).

## 4. Maintenance
Keep the `assets/` folder lean. Regularly audit for unused high-resolution images that can be compressed.
