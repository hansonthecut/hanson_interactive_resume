# Deployment Guide - HANSONFLIX Interactive Resume

This guide details the critical technical requirements and common "gotchas" for successfully deploying this project from your local machine to GitHub Pages.

## 1. The "Golden Rules" of File Naming
GitHub Pages runs on Linux, which is **case-sensitive**. Your Mac is **case-insensitive**. This is the #1 cause of deployment failure.

*   **Rule:** Use ONLY lowercase letters for all files and folders.
*   **Rule:** Use underscores (`_`) instead of spaces.
*   **Bad:** `Assets/My Photo.jpg`
*   **Good:** `assets/my_photo.jpg`

### How to fix case-sensitivity errors:
If you rename a folder from `Assets` to `assets` on a Mac, Git might not notice. You MUST use a two-step move to force the change:
```bash
git mv Assets assets_temp
git mv assets_temp assets
git add .
git commit -m "Fix case sensitivity"
```

## 2. GitHub File Size Limits
GitHub has a hard limit of **100MB** per file and a soft limit of 50MB.
*   **The Drone Video:** The original 4K drone footage was **370MB**, which blocked deployment. We compressed it to **69MB** (`Drone github version.mp4`).
*   **Tip:** If you add high-res photos or videos in the future, check their size before pushing. Anything over 100MB will break the build.

## 3. Resolving Submodule Errors
If you see an error like `fatal: No url found for submodule path...` in your GitHub Actions log:
*   **Cause:** This happens when a folder was previously added as a Git repository (submodule) but the link is broken.
*   **Fix:** Force-remove the broken reference from the Git index:
```bash
git rm -f --cached Documents/Netflix-Resume
git add .
git commit -m "Clean up broken submodules"
```

## 4. Relative vs. Absolute Paths
Always use **relative paths** in your `index.html`, `style.css`, and `script.js`.
*   **Bad:** `/assets/video.mp4` (This looks for the file at the root of the server).
*   **Good:** `assets/video.mp4` (This looks for the file relative to the project folder).

## 5. Audio Playback Rules
Modern browsers (Chrome, Safari) block audio from playing automatically until the user interacts with the page.
*   **Logic:** The `initAudio` function in `script.js` waits for a click or keypress before starting the sound sequence. 
*   **Troubleshooting:** If the audio doesn't play, make sure you have clicked anywhere on the page first.

## 6. Deployment Checklist
Before pushing to GitHub, run these checks:
1.  [ ] **Open Developer Tools** (F12) on localhost and check the Console for 404 (Not Found) errors.
2.  [ ] **Check Case:** Ensure no paths in your code start with `Assets/` or `Documents/`.
3.  [ ] **Run Build:** Check your GitHub "Actions" tab after pushing. If you see a green checkmark, it's live!

## 7. Troubleshooting Localhost Discrepancies
If your localhost looks correct but GitHub doesn't (or vice versa):
*   **Clear Cache:** Perform a "Hard Reload" in your browser (Cmd+Shift+R).
*   **Check Branch:** Ensure you are pushing to the `main` branch.
*   **Check Port:** If you suspect caching on localhost, try running the server on a different port: `python3 -m http.server 3005`.
