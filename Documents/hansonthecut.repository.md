# HansOnthecut: Netflix Interactive Resume Repository Guide

## Links
* **Repository:** [https://github.com/hansonthecut/hanson_interactive_resume](https://github.com/hansonthecut/hanson_interactive_resume)
* **Website:** [https://hansonthecut.github.io/hanson_interactive_resume/](https://hansonthecut.github.io/hanson_interactive_resume/)

---

## Part 1: The Setup & Process

### 1. Initialization
The project began by extracting data from two PDF resumes (Analyst and Management) and transforming them into Markdown format to identify key career highlights. We opted to build a static website using **pure HTML, CSS, and Vanilla JavaScript** rather than a complex framework (like React/Vite) to ensure lightning-fast deployment, simple hosting, and zero dependency issues.

### 2. Architecture & Netflix UI Mapping
The codebase is structured to mirror Netflix's user interface:
* **`index.html`**: The structural backbone. 
    * *Hero Billboard:* Showcases Frank Hanson as the "Operations & Data Analytics Leader."
    * *Sliders (Rows):* Maps professional experience to "Trending Now" and education to "Critically Acclaimed."
* **`style.css`**: The design system. Implements `var(--netflix-red)` and `var(--netflix-black)`, dark gradients, cinematic hover states, and smooth modal transitions.
* **`script.js`**: The interactive engine. It stores the resume data in a JavaScript object, dynamically generates the "Movie Posters" (job thumbnails), and controls the popup modal (showing Cast, Genres, and Match Score).

### 3. GitHub Connection
1. We initialized a local Git repository (`git init`).
2. We linked it to the remote GitHub server (`git remote add origin`).
3. After encountering terminal authentication hangs (a common macOS issue), we used GitHub's web drag-and-drop as a temporary bypass.
4. Finally, we forced the local and remote repositories to sync completely using `git push -f -u origin main`.

### 4. Deployment (GitHub Pages)
The site is hosted for free via GitHub Pages. 
* **Settings Configuration:** Settings -> Pages -> Source: Deploy from branch -> Branch: `main` -> `/ (root)`.
* *Note on 404 Errors:* GitHub Pages can take up to 5-10 minutes to clear its cache and show the site for the very first time. A 404 error during the first few minutes is standard behavior while the GitHub Actions "Build" script is running.

---

## Part 2: Addressing Your Checklist

**1. "Once it’s connected use anti gravity for uploading the pics and all let it handle the github stuff"**
* **How we do this:** You don't need to fight with the terminal or GitHub Desktop anymore. Simply drop your photos and videos directly into the `@[/Users/frankhanson/Antigravity/Personal/Resume/Netflix-Resume/assets]` folder on your Mac. Tell me (Antigravity) that the assets are there, and I will write the code to place them in the website and automatically run the `git commit` and `git push` commands to send them to GitHub. I will handle 100% of the GitHub syncing from here on out.

**2. "Once it’s ready ask how do you run the development server to see your changes"**
* **How we do this:** Because I built this using pure, static web technologies (HTML/CSS), **you do not need a development server**. To see your changes locally before they go to the internet, all you have to do is double-click the `index.html` file on your Mac. It will open in Chrome/Safari instantly and show your changes. 

**3. "Once it’s ready ask how to use github pages so everyone can access your website"**
* **How we do this:** GitHub Pages is already turned on. Every single time I (Antigravity) push new code or images to your repository, GitHub Pages will automatically detect it, rebuild the server in the background, and update your live public link (`https://hansonthecut.github.io/hanson_interactive_resume/`) within 60 seconds.

---

## Part 3: Future Recommendations (How to make it better)

To elevate this from a "great project" to a "world-class portfolio," here is what we need to execute next:

1. **Implement High-End Visuals:**
    * *Hero Video:* Replace the static background with a 10-second looping, compressed `.mp4` of your drone footage or you working on a set. 
    * *Thumbnails:* Create custom 16:9 thumbnail images for the "Movie Posters" (e.g., an Amazon logo with a cinematic warehouse background, a BridgePark logo).
2. **Add a "Who's Watching?" Intro Screen:**
    * Create the classic Netflix profile selection screen when the user first opens the site: "Are you a Recruiter?", "Are you a Creative Agency?", "Are you a B2B Client?". Clicking one tailors the experience.
3. **Custom Domain Name:**
    * Purchase `frankhanson.com` or `hansonthecut.com` and route it through GitHub Pages so your URL is fully white-labeled.
4. **Mobile Optimization & Touch Swiping:**
    * Currently, the sliders scroll left and right. We can upgrade the JavaScript to support native touch-swiping on mobile devices to make it feel exactly like the Netflix iOS app.
