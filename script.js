/* ============================================
   HANSONFLIX — Interactive Resume Engine
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
            image: null
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
            image: null
        }
    ],
    roles: [
        {
            id: "amazon",
            title: "Operations & Logistic Manager",
            company: "Amazon",
            date: "May 2023 – Present",
            type: "Blockbuster",
            description: "Lead, mentor, and manage diverse teams in a high-volume warehouse environment. Architected and deployed custom AI systems to automate reporting, reducing manual data entry by 30%. Orchestrated AI training workshops for executive stakeholders. Managed complex, end-to-end logistics ensuring a 15% increase in cost-efficiency.",
            skills: ["Operations", "AI Systems", "SQL", "Python", "Logistics", "Team Leadership"],
            match: "99% Match",
            image: null
        },
        {
            id: "bridgepark",
            title: "Performance Consultant & Data Analyst",
            company: "Richmond BridgePark Foundation",
            date: "May 2022 – May 2023",
            type: "Critically Acclaimed",
            description: "Led a cross-functional team of 10 members. Architected a transformative project management framework based on Agile principles, reducing delivery time by 20%. Designed highly interactive dashboards using Tableau and Power BI, fostering a 25% improvement in data accessibility.",
            skills: ["Power BI", "Tableau", "Agile", "SQL Server", "Cross-functional Leadership"],
            match: "97% Match",
            image: null
        },
        {
            id: "ghana-energy",
            title: "Energy Transition Analyst",
            company: "Ghana Ministry of Energy",
            date: "Jan 2021 – Aug 2021",
            type: "International Hit",
            description: "Researched and analyzed regional energy policies to evaluate the impact of transitioning to renewable energy. Developed strategic recommendations and policy frameworks to support the adoption of renewable energy technologies.",
            skills: ["Policy Analysis", "Renewable Energy", "Research", "Stakeholder Engagement"],
            match: "94% Match",
            image: null
        },
        {
            id: "freelance-policy",
            title: "Policy Analyst",
            company: "Freelance",
            date: "May 2020 – Aug 2020",
            type: "Indie Favorite",
            description: "Conducted in-depth policy analysis assessing the socio-economic implications of Chinese investments and partnerships across Africa. Collaborated with interdisciplinary teams to formulate evidence-based recommendations.",
            skills: ["Research", "Socio-economic Analysis", "Policy", "Strategy"],
            match: "90% Match",
            image: null
        },
        {
            id: "satellite-lab",
            title: "Satellite Imaging Project Lead",
            company: "University of Richmond",
            date: "Sept 2019 – May 2023",
            type: "Cult Classic",
            description: "Applied advanced image processing techniques and spatial analysis using QGIS and ArcGIS. Designed interactive dashboards using Tableau Desktop. Utilized SQL Server extensively to query large geospatial datasets, achieving a 15% efficiency gain.",
            skills: ["ArcGIS", "QGIS", "Tableau", "Spatial Analysis", "SQL"],
            match: "95% Match",
            image: null
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
            image: null
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
            image: null
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
            image: null
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
            image: null
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
            image: null
        }
    ],
    competencies: [
        {
            id: "comp-leadership",
            title: "Leadership & Group Dynamics",
            company: "Soft Skills",
            date: "Core",
            type: "Behind the Scenes",
            description: "Capability to lead and motivate cross-functional teams, delegate tasks, and facilitate collaboration. Strong verbal and written communication skills to articulate project objectives clearly.",
            skills: ["Leadership", "Communication", "Teamwork", "Collaboration"],
            match: "100% Match",
            image: null
        },
        {
            id: "comp-risk",
            title: "Risk & Quality Management",
            company: "Operations",
            date: "Core",
            type: "Behind the Scenes",
            description: "Proficiency in identifying potential risks, developing mitigation strategies, and creating contingency plans. Understanding of quality standards and assurance processes throughout the project lifecycle.",
            skills: ["Risk Management", "Quality Assurance", "Contingency Planning"],
            match: "100% Match",
            image: null
        },
        {
            id: "comp-data",
            title: "Data Storytelling & Statistics",
            company: "Analytics",
            date: "Core",
            type: "Behind the Scenes",
            description: "Skill in translating complex data analysis into clear and concise narratives. Understanding of statistical concepts such as hypothesis testing, regression analysis, and probability theory.",
            skills: ["Data Storytelling", "Statistical Knowledge", "Problem Solving", "Critical Thinking"],
            match: "100% Match",
            image: null
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
    document.getElementById('modal-desc').textContent = item.description;
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
   INITIALIZE
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderPosters('portfolio-posters', resumeData.portfolio);
    renderPosters('experience-posters', resumeData.roles);
    renderPosters('education-posters', resumeData.education);
    renderPosters('certifications-posters', resumeData.certifications);
    renderPosters('competencies-posters', resumeData.competencies);
});
