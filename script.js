const resumeData = {
    roles: [
        {
            id: "amazon",
            title: "Operations & Logistic Manager",
            company: "Amazon",
            date: "May 2023 - Present",
            type: "Blockbuster",
            description: "Lead, mentor, and manage diverse teams in a high-volume warehouse environment. Architected and deployed custom AI systems to automate reporting, reducing manual data entry by 30%. Managed complex, end-to-end logistics ensuring a 15% increase in cost-efficiency.",
            skills: ["Operations", "AI Systems", "SQL", "Python", "Logistics"],
            match: "99% Match"
        },
        {
            id: "bridgepark",
            title: "Performance Consultant & Data Analyst",
            company: "Richmond BridgePark Foundation",
            date: "May 2022 – May 2023",
            type: "Critically Acclaimed",
            description: "Led a cross-functional team of 10 members. Architected a transformative project management framework based on Agile principles, reducing delivery time by 20%. Designed highly interactive dashboards using Tableau and Power BI.",
            skills: ["Power BI", "Tableau", "Agile", "SQL Server"],
            match: "97% Match"
        },
        {
            id: "ghana-energy",
            title: "Energy Transition Analyst",
            company: "Ghana Ministry of Energy",
            date: "Jan 2021 - Aug 2021",
            type: "International Hit",
            description: "Researched and analyzed regional energy policies to evaluate the impact of transitioning to renewable energy. Developed strategic recommendations and policy frameworks to mitigate environmental degradation.",
            skills: ["Policy Analysis", "Renewable Energy", "Research"],
            match: "94% Match"
        },
        {
            id: "freelance-policy",
            title: "Policy Analyst",
            company: "Freelance",
            date: "May 2020 - Aug 2020",
            type: "Indie Favorite",
            description: "Conducted in-depth policy analysis assessing the socio-economic implications of Chinese investments and partnerships across Africa.",
            skills: ["Research", "Socio-economic Analysis", "Policy"],
            match: "90% Match"
        },
        {
            id: "satellite-lab",
            title: "Satellite Imaging Project Lead",
            company: "University of Richmond",
            date: "Sept 2019 – May 2023",
            type: "Cult Classic",
            description: "Applied advanced image processing techniques and spatial analysis using QGIS and ArcGIS. Designed interactive dashboards using Tableau Desktop. Utilized SQL Server extensively to query large geospatial datasets.",
            skills: ["ArcGIS", "QGIS", "Tableau", "Spatial Analysis", "SQL"],
            match: "95% Match"
        }
    ],
    education: [
        {
            id: "richmond-dev",
            title: "BA Global Studies in Development",
            company: "University of Richmond",
            date: "Graduated",
            type: "Documentary",
            description: "Bachelor of Arts in Global Studies in Development and Change. Minor in Geography and Sustainability.",
            skills: ["Global Studies", "Geography", "Sustainability"],
            match: "100% Match"
        },
        {
            id: "richmond-lead",
            title: "BA Leadership",
            company: "University of Richmond",
            date: "Graduated",
            type: "Documentary",
            description: "Bachelor of Arts in Leadership.",
            skills: ["Leadership", "Management", "Strategy"],
            match: "100% Match"
        }
    ]
};

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Render Posters
function renderPosters(containerId, items) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
        const poster = document.createElement('div');
        poster.className = 'poster';
        // Random background color for variation since we don't have images
        const hue = Math.floor(Math.random() * 360);
        poster.style.backgroundColor = `hsl(${hue}, 30%, 15%)`;
        
        poster.innerHTML = `
            <div class="poster-bg"></div>
            <div class="poster-content">
                <div class="poster-title">${item.title}</div>
                <div class="poster-company">${item.company}</div>
            </div>
        `;
        
        poster.addEventListener('click', () => openModal(item));
        container.appendChild(poster);
    });
}

// Modal Logic
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
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPosters('experience-posters', resumeData.roles);
    renderPosters('education-posters', resumeData.education);
});
