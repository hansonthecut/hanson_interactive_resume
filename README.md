# HansonFlix: Interactive Resume

An immersive, Netflix-inspired interactive resume showcasing the professional experience, data analytics expertise, and creative portfolio of Frank Hanson.

## 🚀 Quick Start

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/hansonthecut/hanson_interactive_resume.git
    ```
2.  **Run locally**:
    Open `index.html` in any modern web browser or use a local server:
    ```bash
    python3 -m http.server 3000
    ```
3.  **Live Demo**: [https://hansonthecut.github.io/hanson_interactive_resume/](https://hansonthecut.github.io/hanson_interactive_resume/)

---

## 🛠 Tech Stack

-   **Frontend**: HTML5, Vanilla CSS3, Javascript (ES6+)
-   **Audio**: Web Audio API / HTML5 Audio
-   **Animations**: CSS Transitions, Intersection Observer API
-   **Deployment**: GitHub Pages

---

## 📂 Project Structure

```text
hanson_interactive_resume/
├── assets/                 # Visual and audio media
│   ├── portraits_of_me/    # Profile images
│   ├── web/                # Card background images
│   ├── sounds/             # Intro and cinematic tracks
│   └── ...                 # Drone videos and banner icons
├── documents/              # Project documentation and source PDFs
│   ├── hansonthecut.repository.md
│   └── checklist.md
├── index.html              # Main application entry point
├── script.js               # Application logic and resume data
├── style.css               # Design system and UI styling
└── README.md               # This file
```

---

## 🏛 Architectural Overview

-   **Logical Domain (Data)**: Managed within `resumeData` in `script.js`. This acts as the single source of truth for all professional and creative content.
-   **UI Domain (Presentation)**: Handled by `style.css` using a custom "HansonFlix" design system inspired by premium streaming platforms.
-   **Interactive Domain (Logic)**: Managed by `script.js`, orchestrating modal transitions, scroll-reveal animations, and the cinematic audio sequence.

---

## 👨‍💼 Author

**Frank Hanson**  
Operations & Data Analytics Leader  
[LinkedIn Profile](https://www.linkedin.com/in/frankhanson4614)
