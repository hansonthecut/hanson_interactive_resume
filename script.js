/* ============================================
   HANSON — Interactive Resume Engine
   ============================================ */

const resumeData = {
    portfolio: [
        {
            id: "port-concert",
            title: "Live Concert Coverage",
            company: "Event Photography",
            date: "2025",
            type: "Featured",
            description: "High-energy live concert and event photography showcasing cinematic lighting techniques, stage presence capture, and crowd energy documentation.",
            skills: ["Event Photography", "Low Light", "Sony a7R III", "Stage Coverage"],
            match: "99% Match",
            image: "assets/web/concert.jpg"
        },
        {
            id: "port-event",
            title: "Black Golf Club DC",
            company: "Brand & Event Coverage",
            date: "2026",
            type: "Featured",
            description: "Professional brand event photography for Black Golf Club DC — capturing authentic moments, lifestyle branding, and community engagement.",
            skills: ["Brand Photography", "Lifestyle", "Event Coverage", "Portraiture"],
            match: "98% Match",
            image: "assets/web/event.jpg"
        },
        {
            id: "port-drone",
            title: "Colorado Mountain Aerials",
            company: "Drone Cinematography",
            date: "2025",
            type: "Featured",
            description: "Cinematic 4K drone footage capturing the Colorado Rockies — sweeping mountain vistas, alpine terrain mapping, and aerial storytelling.",
            skills: ["DJI Drone", "4K Video", "Aerial", "Color Grading"],
            match: "97% Match",
            image: "assets/web/aerial.jpg"
        },
        {
            id: "port-guatemala",
            title: "Guatemala Documentary",
            company: "Travel Cinematography",
            date: "2026",
            type: "Featured",
            description: "Full documentary-style travel film capturing Guatemalan culture, landscapes, and daily life through cinematic compositions and local storytelling.",
            skills: ["Documentary", "Travel Film", "Storytelling", "DaVinci Resolve"],
            match: "96% Match",
            image: "Assets/web/wildlife.jpg"
        }
    ],
    roles: [
        {
            id: "amazon",
            title: "Operations & Logistic Manager",
            company: "Amazon",
            date: "May 2023 – Present",
            type: "Blockbuster",
            description: "<strong>Situation:</strong> Managing diverse teams in a high-volume Amazon warehouse environment required maintaining optimal performance and safety standards.<br><br><strong>Task:</strong> Needed to optimize complex workflows, reduce reporting times, and improve cost-efficiency while ensuring 99%+ safety compliance.<br><br><strong>Action:</strong> Lead, mentor, and manage diverse teams. Developed and executed strategic operational plans exceeding daily goals. Orchestrated AI training workshops for executive stakeholders, empowering leadership to leverage AI protocols. Spearheaded a special project for a Fortune 500 partner, developing a comprehensive workforce skills-tracking system. Championed a culture of safety and accountability leveraging data analytics.<br><br><strong>Result:</strong> Achieved 99%+ safety compliance, resulted in a 20% reduction in project delivery time via the skills-tracking system, and optimized end-to-end logistics for a 15% increase in cost-efficiency.",
            skills: ["Operations", "AI Systems", "SQL", "Python", "Logistics", "Team Leadership"],
            match: "99% Match",
            image: "Assets/web/studio.jpg"
        },
        {
            id: "bridgepark",
            title: "Performance Consultant & Project Manager",
            company: "Richmond BridgePark Foundation",
            date: "May 2022 – May 2023",
            type: "Critically Acclaimed",
            description: "<strong>Situation:</strong> A high-profile community infrastructure project required precise direction, budgetary accountability, and strong stakeholder alignment.<br><br><strong>Task:</strong> Ensure successful and timely delivery of the project within strict budgetary constraints and mitigate risks throughout the project lifecycle.<br><br><strong>Action:</strong> Led a cross-functional team of 10 members. Architected and implemented a transformative project management framework based on Agile principles. Orchestrated all project phases from initial conception to final fruition, including meticulous project planning, scope delineation, and resource management.<br><br><strong>Result:</strong> The Agile framework resulted in a 20% reduction in project delivery time and a measurable increase in stakeholder satisfaction.",
            skills: ["Agile", "Project Management", "Cross-functional Leadership", "Budgeting", "Stakeholder Management"],
            match: "98% Match",
            image: "assets/web/branding.jpg"
        },
        {
            id: "ghana-energy",
            title: "Energy Transition Analyst",
            company: "Ghana Ministry of Energy",
            date: "Jan 2021 – Aug 2021",
            type: "International Hit",
            description: "<strong>Situation:</strong> West Africa needed to evaluate the feasibility of transitioning to renewable energy to bypass fossil fuel reliance.<br><br><strong>Task:</strong> Analyze regional energy policies, economic trends, and environmental factors to support sustainable energy initiatives.<br><br><strong>Action:</strong> Researched and analyzed regional energy policies and economic trends. Developed strategic recommendations and policy frameworks for renewable energy adoption. Engaged in advocacy efforts and stakeholder outreach to foster collaboration.<br><br><strong>Result:</strong> Successfully delivered comprehensive policy frameworks that garnered support for sustainable energy initiatives within the West African context.",
            skills: ["Policy Analysis", "Renewable Energy", "Research", "Advocacy", "Stakeholder Engagement"],
            match: "96% Match",
            image: "assets/web/landscape.jpg"
        },
        {
            id: "freelance-policy",
            title: "Policy Analyst",
            company: "Freelance",
            date: "May 2020 – Aug 2020",
            type: "Indie Favorite",
            description: "<strong>Situation:</strong> Increasing Chinese investments in Africa necessitated an in-depth understanding of their socio-economic implications.<br><br><strong>Task:</strong> Assess the dynamics of Chinese-African relations, including trade agreements, infrastructure projects, and technology transfers.<br><br><strong>Action:</strong> Conducted in-depth policy analysis and research on investments in various sectors. Collaborated with interdisciplinary teams and stakeholders to formulate evidence-based recommendations.<br><br><strong>Result:</strong> Identified key opportunities and challenges, delivering strategic approaches for maximizing the benefits of Chinese engagement while mitigating potential vulnerabilities.",
            skills: ["Research", "Socio-economic Analysis", "Policy", "Strategy", "Interdisciplinary Collaboration"],
            match: "94% Match",
            image: "assets/web/lens.jpg"
        },
        {
            id: "satellite-lab",
            title: "Satellite Imaging Project Lead",
            company: "University of Richmond",
            date: "Sept 2019 – May 2023",
            type: "Cult Classic",
            description: "<strong>Situation:</strong> Various analytical assignments required optimal application of satellite imaging technology for data intelligence.<br><br><strong>Task:</strong> Lead project planning and execution to guarantee punctual delivery of reports and data visualizations.<br><br><strong>Action:</strong> Provided expert consultation on satellite imaging technology. Led project planning and execution. Leveraged a diverse set of tools including Excel, ArcGIS suite, Tableau, Stata, and QGIS for comprehensive data intelligence and analysis.<br><br><strong>Result:</strong> Ensured optimal resource deployment, delivering comprehensive data intelligence that contributed directly to informed project management decisions.",
            skills: ["ArcGIS", "QGIS", "Tableau", "Stata", "Spatial Analysis"],
            match: "95% Match",
            image: "assets/web/mountains.jpg"
        },
        {
            id: "giddings-foundation",
            title: "Member for the Board of Advisors",
            company: "The Giddings Foundation",
            date: "May 2016 – May 2019",
            type: "Classic",
            description: "<strong>Situation:</strong> The foundation required high-level strategic guidance to advance its mission in community development and education.<br><br><strong>Task:</strong> Provide executive oversight, ensure financial accountability, and engage in fundraising strategy to support programs in Colorado Springs.<br><br><strong>Action:</strong> Actively participated in quarterly board meetings, strategic discussions, and key decision-making processes. Engaged in donor cultivation and partnership development.<br><br><strong>Result:</strong> Secured essential resources and support for programs, ensuring organizational transparency and alignment with stated long-term community development objectives.",
            skills: ["Strategic Guidance", "Executive Oversight", "Fundraising", "Partnership Development"],
            match: "93% Match",
            image: "assets/web/aerial.jpg"
        }
    ],
    education: [
        {
            id: "richmond-dev",
            title: "BA Global Studies in Development & Change",
            company: "University of Richmond",
            date: "Graduated",
            type: "Documentary",
            description: "Bachelor of Arts in Global Studies in Development and Change with a Minor in Geography and Minor in Sustainability.",
            skills: ["Global Studies", "Geography", "Sustainability", "Development"],
            match: "100% Match",
            image: "assets/web/landscape.jpg"
        },
        {
            id: "richmond-lead",
            title: "BA Leadership",
            company: "University of Richmond",
            date: "Graduated",
            type: "Documentary",
            description: "Bachelor of Arts in Leadership — studying organizational behavior, group dynamics, strategic management, and cross-cultural leadership.",
            skills: ["Leadership", "Management", "Strategy", "Organizational Behavior"],
            match: "100% Match",
            image: "assets/web/mountains.jpg"
        }
    ],
    certifications: [
        {
            id: "cert-pm",
            title: "Project Management Expert",
            company: "Methodologies & Tools",
            date: "Current",
            type: "Special Feature",
            description: "Advanced proficiency in Agile, Scrum, JIRA, Salesforce, MS Project, and Microsoft Suite for directing cross-functional teams and ensuring on-time delivery.",
            skills: ["Agile", "Scrum", "JIRA", "Salesforce", "MS Project"],
            match: "100% Match",
            image: "assets/web/concert.jpg"
        },
        {
            id: "cert-data",
            title: "Data Analytics & BI Master",
            company: "Analytics Stack",
            date: "Current",
            type: "Special Feature",
            description: "Expert-level command of Power BI, DAX, Power Query Editor, Tableau Desktop/Server, Excel, SQL, and Python for transforming raw data into actionable insights.",
            skills: ["Power BI", "Tableau", "SQL", "Python", "DAX", "Excel"],
            match: "100% Match",
            image: "assets/web/studio.jpg"
        },
        {
            id: "cert-geo",
            title: "Geospatial Information Systems",
            company: "GIS Suite",
            date: "Current",
            type: "Special Feature",
            description: "Specialized in spatial analysis and image processing utilizing the ESRI suite, ArcGIS, and QGIS for complex environmental and logistical reporting.",
            skills: ["ESRI", "ArcGIS", "QGIS", "Spatial Analysis"],
            match: "100% Match",
            image: "assets/web/aerial.jpg"
        }
    ],
    competencies: [
        {
            id: "comp-project-management",
            title: "Project Management",
            company: "Operations",
            date: "Core",
            type: "Behind the Scenes",
            description: "Ability to create comprehensive project plans, define goals, set timelines, and allocate resources effectively. Competence in budgeting, tracking expenses, and managing stakeholders while adapting to changing requirements.",
            skills: ["Project Planning", "Budgeting", "Time Management", "Stakeholder Management", "Adaptability"],
            match: "100% Match",
            image: "assets/web/lens.jpg"
        },
        {
            id: "comp-leadership",
            title: "Leadership & Communication",
            company: "Soft Skills",
            date: "Core",
            type: "Behind the Scenes",
            description: "Capability to lead and motivate cross-functional teams, delegate tasks, and facilitate collaboration. Strong verbal and written communication skills. Ability to negotiate, resolve conflicts, and make informed decisions.",
            skills: ["Leadership", "Communication", "Negotiation", "Conflict Resolution", "Decision Making"],
            match: "100% Match",
            image: "assets/web/event.jpg"
        },
        {
            id: "comp-risk",
            title: "Risk & Quality Management",
            company: "Operations",
            date: "Core",
            type: "Behind the Scenes",
            description: "Proficiency in identifying potential risks, developing mitigation strategies, and creating contingency plans. Understanding of quality standards and maintaining assurance processes.",
            skills: ["Risk Management", "Quality Management", "Contingency Planning"],
            match: "100% Match",
            image: "assets/web/mountains.jpg"
        },
        {
            id: "comp-data-analysis",
            title: "Data Analysis & Database Management",
            company: "Analytics",
            date: "Core",
            type: "Behind the Scenes",
            description: "Proficiency in data analysis techniques, data cleaning, transformation, and SQL database management. Familiarity with visualization tools like Tableau and Power BI, and statistical software for modeling.",
            skills: ["Data Analysis", "SQL", "Data Cleaning", "Data Visualization", "Statistical Software"],
            match: "100% Match",
            image: "assets/web/studio.jpg"
        },
        {
            id: "comp-data",
            title: "Data Storytelling & Statistics",
            company: "Analytics",
            date: "Core",
            type: "Behind the Scenes",
            description: "Skill in translating complex data into clear narratives for non-technical stakeholders. Deep understanding of statistical concepts, hypothesis testing, and probability. Strong problem-solving and critical thinking abilities. Maintaining domain knowledge and continuous learning.",
            skills: ["Data Storytelling", "Statistical Knowledge", "Problem Solving", "Critical Thinking", "Continuous Learning"],
            match: "100% Match",
            image: "assets/web/branding.jpg"
        }
    ]
};

/* ============================================
   COLOR SYSTEM — Deterministic palette per card
   ============================================ */
const cardGradients = [
    "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    "linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)",
    "linear-gradient(135deg, #1b1b2f 0%, #162447 100%)",
    "linear-gradient(135deg, #2d132c 0%, #1a1a2e 100%)",
    "linear-gradient(135deg, #1f4037 0%, #1a1a2e 100%)",
    "linear-gradient(135deg, #283048 0%, #1a1a2e 100%)",
    "linear-gradient(135deg, #3a1c71 0%, #1a1a2e 100%)",
    "linear-gradient(135deg, #1c1c2e 0%, #0c2340 100%)",
];

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
        poster.setAttribute('aria-label', `View details for ${item.title}`);

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

        poster.addEventListener('click', () => openModal(item));
        poster.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(item);
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
    const bgMusic = document.getElementById('bg-music');
    const jingle = document.getElementById('intro-jingle');
    const soundToggle = document.getElementById('sound-toggle');
    const soundOnIcon = document.getElementById('sound-on-icon');
    const soundOffIcon = document.getElementById('sound-off-icon');
    
    let hasInteracted = false;
    let isMuted = false;

    const toggleSound = (e) => {
        if (e) e.stopPropagation();
        isMuted = !isMuted;
        bgMusic.muted = isMuted;
        jingle.muted = isMuted;
        
        soundOnIcon.style.display = isMuted ? 'none' : 'block';
        soundOffIcon.style.display = isMuted ? 'block' : 'none';
    };

    const playIntro = () => {
        if (hasInteracted) return;
        hasInteracted = true;

        // Play jingle
        jingle.volume = 0.6;
        jingle.play().catch(e => console.log("Audio play blocked", e));

        // Start background music after jingle or immediately if jingle fails
        setTimeout(() => {
            bgMusic.volume = 0.2;
            bgMusic.play().catch(e => console.log("BG Audio play blocked", e));
        }, 1200);

        // Remove listener
        document.removeEventListener('click', playIntro);
        document.removeEventListener('keydown', playIntro);
    };

    soundToggle.addEventListener('click', toggleSound);
    document.addEventListener('click', playIntro);
    document.addEventListener('keydown', playIntro);
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

    initAudio();
    initScrollReveal();
});
