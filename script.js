/* ============================================
   HANSON — Interactive Resume Engine
   ============================================ */

const resumeData = {
    portfolio: [
        {
            id: "port-cloud-connect",
            title: "Amazon Cloud Connect",
            company: "Corporate Event Film & Media Package",
            date: "2026",
            type: "Corporate Media",
            description: "Turnkey corporate media package for Amazon's internal Cloud Connect conference: pre-event kickoff anthem film, mobile cinema interviews, an on-site executive headshot studio, and a sponsorship impact documentary — produced end-to-end through Hansonthecut LLC.",
            skills: ["Corporate Events", "Executive Headshots", "Documentary", "DaVinci Resolve"],
            match: "Flagship Engagement",
            image: "assets/web/event.jpg"
        },
        {
            id: "port-concert",
            title: "Live Concert Coverage",
            company: "Event Photography",
            date: "2025",
            type: "Live Events",
            description: "High-energy live concert and event photography showcasing cinematic lighting techniques, stage presence capture, and crowd energy documentation.",
            skills: ["Event Photography", "Low Light", "Sony a7R III", "Stage Coverage"],
            match: "Event Photography",
            image: "assets/web/concert.jpg"
        },
        {
            id: "port-event",
            title: "Black Golf Club DC",
            company: "Brand & Event Coverage",
            date: "2026",
            type: "Brand & Events",
            description: "Professional brand event photography for Black Golf Club DC — capturing authentic moments, lifestyle branding, and community engagement.",
            skills: ["Brand Photography", "Lifestyle", "Event Coverage", "Portraiture"],
            match: "Brand Coverage",
            image: "assets/web/event.jpg"
        },
        {
            id: "port-drone",
            title: "Colorado Mountain Aerials",
            company: "Drone Cinematography",
            date: "2025",
            type: "Aerial Work",
            description: "Cinematic 4K drone footage capturing the Colorado Rockies — sweeping mountain vistas, alpine terrain mapping, and aerial storytelling.",
            skills: ["DJI Drone", "4K Video", "Aerial", "Color Grading"],
            match: "Aerial Cinematography",
            image: "assets/web/aerial.jpg"
        },
        {
            id: "port-guatemala",
            title: "Guatemala Documentary",
            company: "Travel Cinematography",
            date: "2026",
            type: "Documentary",
            description: "Full documentary-style travel film capturing Guatemalan culture, landscapes, and daily life through cinematic compositions and local storytelling.",
            skills: ["Documentary", "Travel Film", "Storytelling", "DaVinci Resolve"],
            match: "Documentary",
            image: "assets/web/wildlife.jpg"
        }
    ],
    roles: [
        {
            id: "amazon",
            title: "Area Manager & AI Subject Matter Expert",
            company: "Amazon — SDC1, Springfield VA",
            date: "Jul 2024 – Present",
            type: "Operations & AI Leadership",
            description: "<strong>Situation:</strong> A high-volume Amazon sortation operation needed stronger cost discipline, faster planning cycles, and leaders who could actually use AI — not just talk about it.<br><br><strong>Task:</strong> Run daily operations as an L4 Area Manager (cross-trained Outbound, Inbound, and Sort) while serving as the site's AI & Technology SME: automate manual planning work, own headcount decisions typically held at L5, and raise AI fluency across the leadership bench.<br><br><strong>Action:</strong> Built SDC1's SharePoint from scratch and created an AI agent (Slack/Firefox integration) for real-time operational support. Engineered automation that prevents 60-hour policy breaches, optimizes headcount allocation, and flags problem routes before they disrupt Sort. Led the BEN SPS AI workshop, training 600+ leaders from L4 to L8. Serve on the BEN DMV committee and as a Lead Tech SME for BEN Tech.<br><br><strong>Result:</strong> Rated Performance 5 / Potential 4 and recommended for promotion to L5. Took over Sort at 69.23 TPH and drove it to 78.68 TPH year-to-date (top 10), with the team ranked #2 in the network for Building TPH. Zero recordable injuries, a Leadership Safety Score of 83.6%, and 100% associate engagement.",
            skills: ["Operations Leadership", "AI Enablement", "Automation", "SQL", "Python", "Team Leadership"],
            match: "Current Role",
            image: "assets/web/studio.jpg"
        },
        {
            id: "hansonthecut",
            title: "Founder, Owner & Director of Photography",
            company: "Hansonthecut LLC",
            date: "Current",
            type: "Business Leadership",
            description: "<strong>Situation:</strong> Corporate and conference clients need event media that looks like a production company delivered it — films, executive headshots, and documentaries on deadline, without agency overhead.<br><br><strong>Task:</strong> Build and run a full-service media business: win the work, produce it end-to-end, and deliver at a premium standard.<br><br><strong>Action:</strong> Direct photography and cinematography for corporate events and conferences, including Amazon's Cloud Connect conference — kickoff anthem film, executive interview cinema, an on-site headshot studio, and a sponsorship documentary. Built proprietary post-production software (the HansOn suite) and AI-assisted editing pipelines that keep turnaround fast and quality consistent.<br><br><strong>Result:</strong> A growing corporate client base, repeat conference engagements, and a product line of professional media tools sold to other creators.",
            skills: ["Corporate Events", "Cinematography", "Executive Headshots", "Business Development", "DaVinci Resolve"],
            match: "Founder",
            image: "assets/web/branding.jpg"
        },
        {
            id: "church-media",
            title: "Director of Media",
            company: "Church Media Ministry",
            date: "Current",
            type: "Media Leadership",
            description: "<strong>Situation:</strong> A growing church moving into a new facility needed a media operation built from the ground up — cameras, lighting, audio, and a volunteer team that could run it every week.<br><br><strong>Task:</strong> Direct the end-to-end media studio rollout for the new facility and lead the team that produces live broadcasts and service media.<br><br><strong>Action:</strong> Lead studio buildouts across camera, lighting, and audio; own procurement and infrastructure decisions; design the live broadcast workflow; recruit, train, and schedule the media team.<br><br><strong>Result:</strong> A functioning studio and broadcast operation in the new facility, run by a trained team on a repeatable weekly workflow.",
            skills: ["Studio Buildout", "Live Broadcast", "Team Leadership", "Procurement", "Production Workflows"],
            match: "Leadership Role",
            image: "assets/web/studio.jpg"
        },
        {
            id: "bridgepark",
            title: "Performance Consultant & Project Manager",
            company: "Richmond BridgePark Foundation",
            date: "May 2022 – May 2023",
            type: "Consulting & Project Management",
            description: "<strong>Situation:</strong> A high-profile community infrastructure project required precise direction, budgetary accountability, and strong stakeholder alignment.<br><br><strong>Task:</strong> Ensure successful and timely delivery of the project within strict budgetary constraints and mitigate risks throughout the project lifecycle.<br><br><strong>Action:</strong> Led a cross-functional team of 10 members. Architected and implemented a transformative project management framework based on Agile principles. Orchestrated all project phases from initial conception to final fruition, including meticulous project planning, scope delineation, and resource management.<br><br><strong>Result:</strong> Delivered under an Agile framework with disciplined budget controls and a measurable increase in stakeholder satisfaction.",
            skills: ["Agile", "Project Management", "Cross-functional Leadership", "Budgeting", "Stakeholder Management"],
            match: "Consulting",
            image: "assets/web/branding.jpg"
        },
        {
            id: "ghana-energy",
            title: "Energy Transition Analyst",
            company: "Ghana Ministry of Energy",
            date: "Jan 2021 – Aug 2021",
            type: "Policy Analysis",
            description: "<strong>Situation:</strong> West Africa needed to evaluate the feasibility of transitioning to renewable energy to bypass fossil fuel reliance.<br><br><strong>Task:</strong> Analyze regional energy policies, economic trends, and environmental factors to support sustainable energy initiatives.<br><br><strong>Action:</strong> Researched and analyzed regional energy policies and economic trends. Developed strategic recommendations and policy frameworks for renewable energy adoption. Engaged in advocacy efforts and stakeholder outreach to foster collaboration.<br><br><strong>Result:</strong> Successfully delivered comprehensive policy frameworks that garnered support for sustainable energy initiatives within the West African context.",
            skills: ["Policy Analysis", "Renewable Energy", "Research", "Advocacy", "Stakeholder Engagement"],
            match: "Policy Research",
            image: "assets/web/landscape.jpg"
        },
        {
            id: "freelance-policy",
            title: "Policy Analyst",
            company: "Freelance",
            date: "May 2020 – Aug 2020",
            type: "Policy Research",
            description: "<strong>Situation:</strong> Increasing Chinese investments in Africa necessitated an in-depth understanding of their socio-economic implications.<br><br><strong>Task:</strong> Assess the dynamics of Chinese-African relations, including trade agreements, infrastructure projects, and technology transfers.<br><br><strong>Action:</strong> Conducted in-depth policy analysis and research on investments in various sectors. Collaborated with interdisciplinary teams and stakeholders to formulate evidence-based recommendations.<br><br><strong>Result:</strong> Identified key opportunities and challenges, delivering strategic approaches for maximizing the benefits of Chinese engagement while mitigating potential vulnerabilities.",
            skills: ["Research", "Socio-economic Analysis", "Policy", "Strategy", "Interdisciplinary Collaboration"],
            match: "Research",
            image: "assets/web/lens.jpg"
        },
        {
            id: "satellite-lab",
            title: "Satellite Imaging Project Lead",
            company: "University of Richmond",
            date: "Sep 2019 – May 2023",
            type: "Geospatial Analysis",
            description: "<strong>Situation:</strong> Various analytical assignments required optimal application of satellite imaging technology for data intelligence.<br><br><strong>Task:</strong> Lead project planning and execution to guarantee punctual delivery of reports and data visualizations.<br><br><strong>Action:</strong> Provided expert consultation on satellite imaging technology. Led project planning and execution. Leveraged a diverse set of tools including Excel, ArcGIS suite, Tableau, Stata, and QGIS for comprehensive data intelligence and analysis.<br><br><strong>Result:</strong> Ensured optimal resource deployment, delivering comprehensive data intelligence that contributed directly to informed project management decisions.",
            skills: ["ArcGIS", "QGIS", "Tableau", "Stata", "Spatial Analysis"],
            match: "Project Leadership",
            image: "assets/web/mountains.jpg"
        },
        {
            id: "giddings-foundation",
            title: "Board of Advisors Member",
            company: "The Giddings Foundation",
            date: "May 2016 – May 2019",
            type: "Board Governance",
            description: "<strong>Situation:</strong> The foundation required high-level strategic guidance to advance its mission in community development and education.<br><br><strong>Task:</strong> Provide executive oversight, ensure financial accountability, and engage in fundraising strategy to support programs in Colorado Springs.<br><br><strong>Action:</strong> Actively participated in quarterly board meetings, strategic discussions, and key decision-making processes. Engaged in donor cultivation and partnership development.<br><br><strong>Result:</strong> Secured essential resources and support for programs, ensuring organizational transparency and alignment with stated long-term community development objectives.",
            skills: ["Strategic Guidance", "Executive Oversight", "Fundraising", "Partnership Development"],
            match: "Board Service",
            image: "assets/web/aerial.jpg"
        }
    ],
    education: [
        {
            id: "richmond-dev",
            title: "BA Global Studies in Development & Change",
            company: "University of Richmond",
            date: "Graduated",
            type: "Degree Program",
            description: "Bachelor of Arts in Global Studies in Development and Change with a Minor in Geography and Minor in Sustainability.",
            skills: ["Global Studies", "Geography", "Sustainability", "Development"],
            match: "Bachelor of Arts",
            image: "assets/web/landscape.jpg"
        },
        {
            id: "richmond-lead",
            title: "BA Leadership",
            company: "University of Richmond",
            date: "Graduated",
            type: "Degree Program",
            description: "Bachelor of Arts in Leadership — studying organizational behavior, group dynamics, strategic management, and cross-cultural leadership.",
            skills: ["Leadership", "Management", "Strategy", "Organizational Behavior"],
            match: "Bachelor of Arts",
            image: "assets/web/mountains.jpg"
        }
    ],
    certifications: [
        {
            id: "cert-ai",
            title: "AI Enablement & Automation",
            company: "Amazon — Site AI Practice",
            date: "Current",
            type: "Applied AI",
            description: "Site-level AI subject matter expertise at Amazon: designed and built an AI agent and custom tooling for worked-hours tracking and headcount planning, and delivered AI training to 600+ leaders (L4–L8). Builds multi-agent automation systems that run real business operations.",
            skills: ["AI Agents", "Automation", "Python", "Training & Enablement", "Process Design"],
            match: "Core Skill",
            image: "assets/web/studio.jpg"
        },
        {
            id: "cert-pm",
            title: "Project Management",
            company: "Methods & Tooling",
            date: "Current",
            type: "Project Management",
            description: "Advanced proficiency in Agile, Scrum, JIRA, Salesforce, MS Project, and Microsoft Suite for directing cross-functional teams and ensuring on-time delivery.",
            skills: ["Agile", "Scrum", "JIRA", "Salesforce", "MS Project"],
            match: "Core Skill",
            image: "assets/web/concert.jpg"
        },
        {
            id: "cert-data",
            title: "Data Analytics & Business Intelligence",
            company: "Analytics Stack",
            date: "Current",
            type: "Analytics",
            description: "Expert-level command of Power BI, DAX, Power Query Editor, Tableau Desktop/Server, Excel, SQL, and Python for transforming raw data into actionable insights.",
            skills: ["Power BI", "Tableau", "SQL", "Python", "DAX", "Excel"],
            match: "Core Skill",
            image: "assets/web/studio.jpg"
        },
        {
            id: "cert-geo",
            title: "Geospatial Information Systems",
            company: "GIS Tooling",
            date: "Current",
            type: "Geospatial",
            description: "Specialized in spatial analysis and image processing utilizing the ESRI suite, ArcGIS, and QGIS for complex environmental and logistical reporting.",
            skills: ["ESRI", "ArcGIS", "QGIS", "Spatial Analysis"],
            match: "Core Skill",
            image: "assets/web/aerial.jpg"
        }
    ],
    competencies: [
        {
            id: "comp-project-management",
            title: "Project Management",
            company: "Operations",
            date: "Core",
            type: "Competency",
            description: "Ability to create comprehensive project plans, define goals, set timelines, and allocate resources effectively. Competence in budgeting, tracking expenses, and managing stakeholders while adapting to changing requirements.",
            skills: ["Project Planning", "Budgeting", "Time Management", "Stakeholder Management", "Adaptability"],
            match: "Core Competency",
            image: "assets/web/lens.jpg"
        },
        {
            id: "comp-leadership",
            title: "Leadership & Communication",
            company: "Soft Skills",
            date: "Core",
            type: "Competency",
            description: "Capability to lead and motivate cross-functional teams, delegate tasks, and facilitate collaboration. Strong verbal and written communication skills. Ability to negotiate, resolve conflicts, and make informed decisions.",
            skills: ["Leadership", "Communication", "Negotiation", "Conflict Resolution", "Decision Making"],
            match: "Core Competency",
            image: "assets/web/event.jpg"
        },
        {
            id: "comp-risk",
            title: "Risk & Quality Management",
            company: "Operations",
            date: "Core",
            type: "Competency",
            description: "Proficiency in identifying potential risks, developing mitigation strategies, and creating contingency plans. Understanding of quality standards and maintaining assurance processes.",
            skills: ["Risk Management", "Quality Management", "Contingency Planning"],
            match: "Core Competency",
            image: "assets/web/mountains.jpg"
        },
        {
            id: "comp-data-analysis",
            title: "Data Analysis & Database Management",
            company: "Analytics",
            date: "Core",
            type: "Competency",
            description: "Proficiency in data analysis techniques, data cleaning, transformation, and SQL database management. Familiarity with visualization tools like Tableau and Power BI, and statistical software for modeling.",
            skills: ["Data Analysis", "SQL", "Data Cleaning", "Data Visualization", "Statistical Software"],
            match: "Core Competency",
            image: "assets/web/studio.jpg"
        },
        {
            id: "comp-data",
            title: "Data Storytelling & Statistics",
            company: "Analytics",
            date: "Core",
            type: "Competency",
            description: "Skill in translating complex data into clear narratives for non-technical stakeholders. Deep understanding of statistical concepts, hypothesis testing, and probability. Strong problem-solving and critical thinking abilities. Maintaining domain knowledge and continuous learning.",
            skills: ["Data Storytelling", "Statistical Knowledge", "Problem Solving", "Critical Thinking", "Continuous Learning"],
            match: "Core Competency",
            image: "assets/web/branding.jpg"
        }
    ],
    innovation: [
        {
            id: "mag-bridge",
            title: "MAG Bridge",
            company: "Multi-Agent Orchestration System",
            date: "Current",
            type: "Systems Engineering",
            description: "MAG Bridge — the multi-agent orchestration system Frank designed to run his software studio. He directs; the mesh executes. A planning layer breaks product specs into phased builds, a build fleet writes and tests the code, and every phase is verified against evidence before the next begins — payments, publishing, and external sends stay behind his personal approval. Google Workspace is the shared state bus, so every agent works from one source of truth. MAG has shipped three commercial macOS applications and runs the automation behind his media business — while he works full-time at Amazon.",
            skills: ["Multi-Agent Systems", "Orchestration", "Google Workspace", "Automation", "AI Operations"],
            match: "Flagship System",
            image: "assets/web/dsc.jpg"
        }
    ],
    suite: [
        {
            id: "suite-grades",
            title: "HansOnGrades",
            company: "HansOn Suite",
            date: "macOS",
            type: "Software",
            description: "Color grading for DaVinci Resolve: an Edit-page effect plus a standalone Edit Studio, per-camera CST presets, one-click looks.",
            skills: ["DaVinci Resolve", "Color Grading", "CST Presets"],
            match: "In the Store",
            image: "assets/suite/hansongrades-edit-studio.png",
            link: "https://store.hansonthecut.com"
        },
        {
            id: "suite-enhancer",
            title: "HansOnEnhancer",
            company: "HansOn Suite",
            date: "macOS",
            type: "Software",
            description: "Batch photo polish for event photographers: drop in a folder, get delivery-ready images.",
            skills: ["Photo Editing", "Batch Processing", "Event Photography"],
            match: "In the Store",
            image: "assets/suite/hansonenhancer-main.png",
            link: "https://store.hansonthecut.com"
        },
        {
            id: "suite-match",
            title: "HansOffMatch",
            company: "HansOn Suite",
            date: "macOS",
            type: "Software",
            description: "Multicam sync for DaVinci Resolve: absolute-time timeline assembly across cameras, waveform-verified, nothing dropped.",
            skills: ["DaVinci Resolve", "Multicam Sync", "Waveform Analysis"],
            match: "In the Store",
            image: "assets/suite/hansoffmatch-main.png",
            link: "https://store.hansonthecut.com"
        }
    ]
};

/* ============================================
   COLOR SYSTEM — Deterministic palette per card
   ============================================ */
const cardGradients = [
    "linear-gradient(135deg, #1D1D20 0%, #0E0E10 100%)",
    "linear-gradient(135deg, #232328 0%, #131315 100%)",
    "linear-gradient(135deg, #17171B 0%, #0A0A0B 100%)",
    "linear-gradient(135deg, #202027 0%, #101014 100%)",
    "linear-gradient(135deg, #1A1D23 0%, #0C0E12 100%)",
    "linear-gradient(135deg, #25252B 0%, #151517 100%)",
    "linear-gradient(135deg, #1E2126 0%, #0D0F13 100%)",
    "linear-gradient(135deg, #2A2A2E 0%, #131315 100%)",
];

/* ============================================
   THEME — Spectrum slider (HansOn master template)
   t in [0,1]: 0 = light, 0.5 = neutral grey, 1 = dark.
   One --t custom property drives every token's OKLCH
   interpolation in style.css. Both navbar control
   instances (desktop + mobile menu) stay in sync
   through applyTheme(). Persisted in localStorage.
   ============================================ */
(function initTheme() {
    const STORAGE_KEY = 'hanson-theme';
    const rootEl = document.documentElement;
    const sliders = document.querySelectorAll('.theme-slider');
    const presetButtons = document.querySelectorAll('.theme-preset');
    const schemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Default on first load: Dark
    let state = { t: 1, preset: 'dark' };
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (saved && typeof saved.t === 'number' && typeof saved.preset === 'string') {
            state = saved;
        }
    } catch (e) { /* no saved theme yet — keep the Dark default */ }

    function systemT() {
        return schemeQuery.matches ? 1 : 0;
    }

    function applyTheme(t, preset) {
        state = { t: t, preset: preset };
        rootEl.style.setProperty('--t', t);
        sliders.forEach(slider => { slider.value = t; });
        presetButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.preset === preset);
        });
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) { /* storage unavailable — theme still applies for the session */ }
    }

    sliders.forEach(slider => {
        slider.addEventListener('input', () => {
            applyTheme(parseFloat(slider.value), 'custom');
        });
    });

    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const preset = btn.dataset.preset;
            if (preset === 'system') applyTheme(systemT(), 'system');
            else if (preset === 'light') applyTheme(0, 'light');
            else if (preset === 'grey') applyTheme(0.5, 'grey');
            else if (preset === 'dark') applyTheme(1, 'dark');
        });
    });

    // While System is the active preset, follow OS scheme changes live
    const onSchemeChange = () => {
        if (state.preset === 'system') applyTheme(systemT(), 'system');
    };
    if (typeof schemeQuery.addEventListener === 'function') {
        schemeQuery.addEventListener('change', onSchemeChange);
    } else if (typeof schemeQuery.addListener === 'function') {
        schemeQuery.addListener(onSchemeChange);
    }

    // Initial paint: System resolves through the OS, everything else uses its saved t
    if (state.preset === 'system') applyTheme(systemT(), 'system');
    else applyTheme(state.t, state.preset);
})();

/* ============================================
   NAVBAR — Scroll effect + hamburger toggle
   ============================================ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navbarNav = document.getElementById('navbar-nav');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
    const isOpen = navbarNav.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
navbarNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbarNav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

/* ============================================
   RENDER POSTER CARDS
   ============================================ */
function renderPosters(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    items.forEach((item, index) => {
        const poster = document.createElement('div');
        poster.className = 'poster';
        poster.setAttribute('role', 'button');
        poster.setAttribute('tabindex', '0');
        poster.setAttribute('aria-label', item.link ? `Open ${item.title} in the store` : `View details for ${item.title}`);

        // Background: use image if available, otherwise use gradient
        const bgStyle = item.image
            ? `background-image: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 60%), url('${item.image}'); background-size: cover; background-position: center;`
            : `background: ${cardGradients[index % cardGradients.length]};`;

        poster.innerHTML = `
            <div class="poster-bg" style="${bgStyle}"></div>
            <div class="poster-content">
                <div class="poster-match">${item.match}</div>
                <div class="poster-title">${item.title}</div>
                <div class="poster-company">${item.company}</div>
            </div>
        `;

        // Items with a `link` open it in a new tab; everything else opens the modal
        const activate = () => {
            if (item.link) {
                window.open(item.link, '_blank', 'noopener');
            } else {
                openModal(item);
            }
        };

        poster.addEventListener('click', activate);
        poster.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate();
            }
        });

        container.appendChild(poster);
    });
}

/* ============================================
   MODAL
   ============================================ */
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

function openModal(item) {
    if (window.gtag) gtag('event', 'card_open', { card_title: item.title, card_company: item.company });
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-match').textContent = item.match;
    document.getElementById('modal-date').textContent = item.date;
    document.getElementById('modal-desc').innerHTML = item.description;
    document.getElementById('modal-company').textContent = item.company;
    document.getElementById('modal-skills').textContent = item.skills.join(', ');
    document.getElementById('modal-type').textContent = item.type;

    // Set modal header background
    const headerEl = document.getElementById('modal-header-bg');
    if (item.image) {
        headerEl.style.backgroundImage = `url('${item.image}')`;
    } else {
        headerEl.style.backgroundImage = 'none';
        headerEl.style.background = cardGradients[0];
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

/* ============================================
   TOAST — "More Info" contact card
   ============================================ */
const btnMoreInfo = document.getElementById('btn-more-info');
const infoToast = document.getElementById('info-toast');
let toastTimeout;

btnMoreInfo.addEventListener('click', () => {
    infoToast.classList.add('visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        infoToast.classList.remove('visible');
    }, 5000);
});

// Dismiss toast on click
infoToast.addEventListener('click', () => {
    infoToast.classList.remove('visible');
    clearTimeout(toastTimeout);
});

/* ============================================
   AUDIO CONTROLS
   ============================================ */
function initAudio() {
    const introAudio = document.getElementById('intro-audio');
    const cinematicAudio = document.getElementById('cinematic-audio');
    const soundToggle = document.getElementById('sound-toggle');
    const soundOnIcon = document.getElementById('sound-on-icon');
    const soundOffIcon = document.getElementById('sound-off-icon');
    
    let hasInteracted = false;
    let isMuted = false;

    const toggleSound = (e) => {
        if (e) e.stopPropagation();
        isMuted = !isMuted;
        introAudio.muted = isMuted;
        cinematicAudio.muted = isMuted;
        
        soundOnIcon.style.display = isMuted ? 'none' : 'block';
        soundOffIcon.style.display = isMuted ? 'block' : 'none';
    };

    const startAudioSequence = () => {
        if (hasInteracted) return;
        hasInteracted = true;

        // 1. Play Intro
        introAudio.volume = 0.7;
        introAudio.play().catch(e => console.log("Intro audio blocked", e));

        // 2. When Intro ends, wait 3 seconds then play Cinematic
        introAudio.onended = () => {
            setTimeout(() => {
                cinematicAudio.volume = 0.5;
                cinematicAudio.play().catch(e => console.log("Cinematic audio blocked", e));
            }, 3000);
        };

        // Remove listener
        document.removeEventListener('click', startAudioSequence);
        document.removeEventListener('keydown', startAudioSequence);
    };

    soundToggle.addEventListener('click', toggleSound);
    document.addEventListener('click', startAudioSequence);
    document.addEventListener('keydown', startAudioSequence);
}

/* ============================================
   SCROLL-REVEAL — Staggered section entrance
   ============================================ */
function initScrollReveal() {
    const sections = document.querySelectorAll('.row');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('row-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    sections.forEach(section => observer.observe(section));
}

/* ============================================
   INITIALIZE
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderPosters('portfolio-posters', resumeData.portfolio);
    renderPosters('experience-posters', resumeData.roles);
    renderPosters('education-posters', resumeData.education);
    renderPosters('certifications-posters', resumeData.certifications);
    renderPosters('competencies-posters', resumeData.competencies);
    renderPosters('innovation-posters', resumeData.innovation);
    renderPosters('suite-posters', resumeData.suite);

    initAudio();
    initScrollReveal();
});

/* ====================================
   CONTACT FORM — Formspree AJAX submit
   ==================================== */
(function () {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const status = document.getElementById('contact-status');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        status.textContent = 'Sending\u2026';
        status.className = 'contact-status';
        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });
            if (res.ok) {
                form.reset();
                status.textContent = 'Thanks \u2014 your message is on its way. I\u2019ll get back to you soon.';
                status.className = 'contact-status success';
            } else {
                status.textContent = 'Something went wrong sending that. You can also reach me at fiifi93@gmail.com.';
            }
        } catch (err) {
            status.textContent = 'Something went wrong sending that. You can also reach me at fiifi93@gmail.com.';
        }
    });
})();

/* ====================================
   ANALYTICS — outbound link clicks
   ==================================== */
document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a || !window.gtag) return;
    const href = a.getAttribute('href');
    if (/^(https?:)?\/\//.test(href) && !href.includes('hansonthecut.github.io') && !href.includes('resume.hansonthecut.com')) {
        gtag('event', 'outbound_click', { link_url: href, link_text: (a.textContent || '').trim().slice(0, 60) });
    } else if (href.startsWith('mailto:')) {
        gtag('event', 'email_click', { link_url: href });
    }
});
