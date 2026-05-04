# GEMINI.md: AI Operating Instructions

This document codifies the architectural boundaries and coding conventions for AI-driven development in the HansonFlix workspace.

## 🛠 Tech Stack Mandates
- **Core**: HTML5 (Semantic), Vanilla CSS3 (Custom Properties), Vanilla Javascript (ES6+).
- **Styling**: No utility frameworks (Tailwind, Bootstrap). All styles must reside in `style.css` using the project's color tokens.
- **Data**: All resume content must be added to the `resumeData` object in `script.js`. Do not hardcode content in `index.html` unless it is structural (headers, footers).

## 📐 Architectural Boundaries
- **Modality**: The app follows a "Netflix-style" UX. Animations should be cinematic (smooth transitions, staggered reveals).
- **Responsiveness**: Mobile-first design is critical. The hamburger menu and card scaling must remain fluid across all viewports.
- **Audio Logic**: Sound is an "opt-in" experience. Always respect the `isMuted` state and ensure audio sequences are triggered by user interaction.

## 📝 Coding Conventions
- **Naming**: Use camelCase for JS variables and kebab-case for CSS classes.
- **Documentation**: All new features or logic blocks must be commented in `script.js`.
- **Media**: Always use optimized assets. Favor `.mp4` for video backgrounds and `.webp` or compressed `.jpg` for images.

## 🚫 Operational Constraints
- **External Dependencies**: Avoid adding external libraries unless absolutely necessary. The project's strength is its lean, vanilla architecture.
- **Persistence**: No backend or database. All data is static and managed locally in the source.
