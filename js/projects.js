// Simple Projects Filter - Working Version

const projectsData = {
    1: {
        title: "Sales Analytics Dashboard",
        description: "Interactive dashboard for real-time sales monitoring and trend analysis with predictive forecasting.",
        liveLink: "https://your-live-link-1.com",
        repoLink: "https://github.com/goyanshi27/sales-analytics-dashboard"
    },
    2: {
        title: "Customer Churn Prediction",
        description: "Machine learning model to predict customer churn with 89% accuracy using ensemble methods.",
        liveLink: "https://your-live-link-2.com",
        repoLink: "https://github.com/goyanshi27/customer-churn-prediction"
    },
    3: {
        title: "Data Visualization Suite",
        description: "Comprehensive visualization toolkit for creating interactive charts and graphs from complex datasets.",
        liveLink: "https://your-live-link-3.com",
        repoLink: "https://github.com/goyanshi27/data-visualization-suite"
    },
    4: {
        title: "Financial Analysis System",
        description: "Automated financial reporting system with real-time KPI tracking and anomaly detection.",
        liveLink: "https://your-live-link-4.com",
        repoLink: "https://github.com/goyanishi27/financial-analysis-system"
    },
    5: {
        title: "Student Performance Analysis Tool",
        description: "NLP-based Student Performance analysis for student reviews and monitoring.",
        liveLink: "https://your-live-link-5.com",
        repoLink: "https://github.com/goyanshi27/student-performance-analysis"
    },
    6: {
        title: "Weapon Analytics",
        description: "Real-time supply chain monitoring dashboard with predictive inventory management.",
        liveLink: "https://your-live-link-6.com",
        repoLink: "https://github.com/goyanishi27/weapon-analytics"
    },
    7: {
        title: "Crime Analysis",
        description: "Data-driven crime analysis dashboard identifying patterns, hotspots and trends across regions.",
        liveLink: "https://your-live-link-7.com",
        repoLink: "https://github.com/goyanshi27/crime-analysis"
    },
    8: {
        title: "Education Analysis",
        description: "Comprehensive analysis of education metrics including enrollment, performance and dropout rates.",
        liveLink: "https://your-live-link-8.com",
        repoLink: "https://github.com/goyanishi27/education-analysis"
    },
    9: {
        title: "India Union Budget Analysis",
        description: "Visual breakdown and trend analysis of India's Union Budget allocations across sectors over the years.",
        liveLink: "https://your-live-link-9.com",
        repoLink: "https://github.com/goyanshi27/india-union-budget-analysis"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeFiltering();
    initializeProjectAnimations();
    initializeProjectModals();
    initializeCardLinkPopups();
});

// ── Shared: build and show the modal ─────────────────────────────────────────
function showProjectModal(project, focusType) {
    // focusType: 'live' | 'repo' | 'both'
    const isLiveFocus  = focusType === 'live';
    const isRepoFocus  = focusType === 'repo';
    const isBoth       = focusType === 'both';

    const liveHighlight = (isLiveFocus || isBoth) ? 'link-highlighted' : 'link-dimmed';
    const repoHighlight = (isRepoFocus || isBoth) ? 'link-highlighted' : 'link-dimmed';
    const liveBadge     = (isLiveFocus || isBoth) ? `<span class="ms-auto selected-badge" style="background:rgba(13,202,240,0.2);color:#0dcaf0;border:1px solid #0dcaf0;">Selected</span>` : '';
    const repoBadge     = (isRepoFocus || isBoth) ? `<span class="ms-auto selected-badge" style="background:rgba(111,66,193,0.2);color:#e83e8c;border:1px solid #e83e8c;">Selected</span>` : '';
    const hint          = isBoth ? 'Choose where to go' : (isLiveFocus ? 'Opening Live Link' : 'Opening Repository');

    document.getElementById('projectModalTitle').textContent = project.title;
    document.getElementById('projectModalBody').innerHTML = `
        <div class="modal-desc-box">${project.description}</div>
        <p style="color:rgba(255,255,255,0.5);font-size:0.8rem;text-transform:uppercase;letter-spacing:2px;margin-bottom:1rem;">
            <i class="fas fa-mouse-pointer me-1"></i> ${hint}
        </p>
        <div class="d-flex flex-column gap-3">
            <div class="modal-link-card confirm-link-btn ${liveHighlight}" data-url="${project.liveLink}">
                <div class="link-icon" style="background:linear-gradient(135deg,#0d6efd,#0dcaf0);">
                    <i class="fas fa-external-link-alt"></i>
                </div>
                <div>
                    <div class="link-label">Live Demo</div>
                    <div class="link-title">View Live Project &rarr;</div>
                </div>
                ${liveBadge}
            </div>
            <div class="modal-link-card confirm-link-btn ${repoHighlight}" data-url="${project.repoLink}">
                <div class="link-icon" style="background:linear-gradient(135deg,#6f42c1,#e83e8c);">
                    <i class="fab fa-github"></i>
                </div>
                <div>
                    <div class="link-label">Source Code</div>
                    <div class="link-title">Open Repository &rarr;</div>
                </div>
                ${repoBadge}
            </div>
        </div>
        <p style="color:rgba(255,255,255,0.3);font-size:0.78rem;margin-top:1.2rem;">
            <i class="fas fa-shield-alt me-1"></i> Click the highlighted card to confirm and open.
        </p>
    `;

    // Attach confirm behavior only to non-dimmed cards
    document.querySelectorAll('.confirm-link-btn:not(.link-dimmed)').forEach(btn => {
        btn.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (!url || url.includes('your-live-link')) {
                alert('This link has not been set yet.');
                return;
            }
            const confirmed = confirm(`Open this link in a new tab?\n\n${url}`);
            if (confirmed) window.open(url, '_blank');
        });
    });

    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}

// ── View Details button ───────────────────────────────────────────────────────
function initializeProjectModals() {
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', function() {
            const project = projectsData[this.getAttribute('data-project')];
            if (project) showProjectModal(project, 'both');
        });
    });
}

// ── Card-level Live Link / Repository buttons ─────────────────────────────────
function initializeCardLinkPopups() {
    document.querySelectorAll('.project-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectItem = this.closest('.project-item');
            const projectId   = projectItem.querySelector('.view-details').getAttribute('data-project');
            const project     = projectsData[projectId];
            if (!project) return;
            const focusType = this.classList.contains('btn-primary') ? 'live' : 'repo';
            showProjectModal(project, focusType);
        });
    });
}

// ── Filter Functionality ──────────────────────────────────────────────────────
function initializeFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems  = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'btn-primary');
                btn.classList.add('btn-outline-primary');
            });
            this.classList.add('active', 'btn-primary');
            this.classList.remove('btn-outline-primary');

            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => { item.style.display = 'none'; }, 300);
                }
            });
        });
    });
}

// ── Project Animations ────────────────────────────────────────────────────────
function initializeProjectAnimations() {
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, index * 100);
    });
}

// ── Theme Toggle ──────────────────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    const html = document.documentElement;
    themeToggle.addEventListener('click', () => {
        const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.querySelector('i').className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    });
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    themeToggle.querySelector('i').className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}
