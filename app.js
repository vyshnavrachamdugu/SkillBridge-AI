/* ==========================================================================
   SKILLBRIDGE AI - APPLICATION ENGINE
   ========================================================================== */

// --- 1. CAREER DATASTORE ---
const CAREER_DATABASE = {
    "software-engineer": {
        id: "software-engineer",
        name: "Software Engineer (Frontend Focus)",
        domain: "Technology & Engineering",
        domainKey: "tech",
        description: "Designs, builds, and maintains the user interface and user experience of websites and web applications. Bridges the gap between visual design and technical implementation.",
        salary: "$105,000",
        salaryNum: 105000,
        growth: "+22% (Very High)",
        growthNum: 22,
        stress: "Moderate",
        location: "Remote-friendly",
        locationKey: "remote",
        education: "Bachelors or Self-taught",
        styleKey: "independent",
        // Skill requirements matching the chips
        skills: ["HTML", "CSS", "JavaScript", "React/Vue", "UI Design Principles", "Git", "Problem Solving"],
        interests: {
            tech: 5,
            creative: 4,
            business: 2,
            health: 1,
            data: 4,
            social: 3
        },
        milestones: [
            {
                id: "se-m1",
                title: "Stage 1: Core Web Fundamentals",
                tasks: [
                    { id: "se-t1", text: "Master HTML5 semantic elements and document structures" },
                    { id: "se-t2", text: "Understand CSS Box Model, Flexbox, and Grid layouts" },
                    { id: "se-t3", text: "Deploy your first basic responsive landing page" }
                ]
            },
            {
                id: "se-m2",
                title: "Stage 2: Programming & Logic",
                tasks: [
                    { id: "se-t4", text: "Learn core JavaScript concepts (Variables, Loops, Functions)" },
                    { id: "se-t5", text: "Master DOM manipulation and handling browser events" },
                    { id: "se-t6", text: "Fetch and display dynamic data from third-party Web APIs" }
                ]
            },
            {
                id: "se-m3",
                title: "Stage 3: Modern Tooling & Frameworks",
                tasks: [
                    { id: "se-t7", text: "Learn Git command line basics and setup GitHub repositories" },
                    { id: "se-t8", text: "Build a single-page application using React or Vue framework" },
                    { id: "se-t9", text: "Manage application state using Context API or Redux" }
                ]
            },
            {
                id: "se-m4",
                title: "Stage 4: Professional Delivery",
                tasks: [
                    { id: "se-t10", text: "Optimize web assets and bundle code for fast load times" },
                    { id: "se-t11", text: "Ensure layout accessibility meeting WCAG AA standards" },
                    { id: "se-t12", text: "Set up CI/CD pipelines and host projects on Netlify/Vercel" }
                ]
            }
        ],
        resources: [
            {
                title: "Responsive Web Design Certification",
                provider: "freeCodeCamp",
                type: "course",
                cost: "Free",
                url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
                desc: "300 hours of HTML, CSS, media queries, and design patterns containing hands-on projects."
            },
            {
                title: "MDN Frontend Developer Pathway",
                provider: "Mozilla Docs",
                type: "course",
                cost: "Free",
                url: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer",
                desc: "Deep, industry-standard written tutorials and structured quizzes covering all core technologies."
            },
            {
                title: "The Frontend Developer Career Path",
                provider: "Scrimba",
                type: "course",
                cost: "Paid ($18/mo)",
                url: "https://scrimba.com/learn/frontend",
                desc: "Interactive video coding sandbox environment that lets you pause, edit, and run code directly."
            },
            {
                title: "Interactive Personal Portfolio Website",
                provider: "SkillBridge Lab",
                type: "project",
                cost: "Free",
                url: "#",
                desc: "Design and code a unique, multi-page layout displaying your project case studies, custom bio, and contact forms."
            },
            {
                title: "Eloquent JavaScript",
                provider: "Marijn Haverbeke",
                type: "book",
                cost: "Free (Online)",
                url: "https://eloquentjavascript.net/",
                desc: "Comprehensive book on JavaScript, programming methodologies, and managing node environments."
            }
        ]
    },
    "data-scientist": {
        id: "data-scientist",
        name: "Data Scientist",
        domain: "Technology & Engineering",
        domainKey: "tech",
        description: "Extracts insights from large structured and unstructured datasets using statistical modeling, algorithm construction, and scientific computing.",
        salary: "$120,000",
        salaryNum: 120000,
        growth: "+36% (Extremely High)",
        growthNum: 36,
        stress: "High",
        location: "Hybrid-friendly",
        locationKey: "office",
        education: "Bachelors or Masters in STEM",
        styleKey: "independent",
        skills: ["Python", "SQL", "Statistics & Probability", "Machine Learning", "Data Visualization", "Problem Solving"],
        interests: {
            tech: 4,
            creative: 2,
            business: 3,
            health: 2,
            data: 5,
            social: 2
        },
        milestones: [
            {
                id: "ds-m1",
                title: "Stage 1: Databases & Querying",
                tasks: [
                    { id: "ds-t1", text: "Learn relational database theory and setup PostgreSQL database" },
                    { id: "ds-t2", text: "Master complex SQL operations (joins, subqueries, group by)" },
                    { id: "ds-t3", text: "Learn statistics fundamentals (distributions, hypothesis testing)" }
                ]
            },
            {
                id: "ds-m2",
                title: "Stage 2: Scientific Programming",
                tasks: [
                    { id: "ds-t4", text: "Write clean Python scripts (data structures, file parsing)" },
                    { id: "ds-t5", text: "Master the Pandas and NumPy libraries for data wrangling" },
                    { id: "ds-t6", text: "Create charts using Matplotlib and Seaborn visualization libraries" }
                ]
            },
            {
                id: "ds-m3",
                title: "Stage 3: Applied Machine Learning",
                tasks: [
                    { id: "ds-t7", text: "Understand linear regression and logistic classification models" },
                    { id: "ds-t8", text: "Write predictive code using Scikit-Learn workflows" },
                    { id: "ds-t9", text: "Evaluate models using cross-validation and confusion matrices" }
                ]
            },
            {
                id: "ds-m4",
                title: "Stage 4: Advanced Specialization",
                tasks: [
                    { id: "ds-t10", text: "Build neural network architectures using TensorFlow or PyTorch" },
                    { id: "ds-t11", text: "Analyze massive datasets with Apache Spark clusters" },
                    { id: "ds-t12", text: "Deploy model APIs as cloud endpoints (AWS SageMaker or Flask)" }
                ]
            }
        ],
        resources: [
            {
                title: "Kaggle Micro-Courses",
                provider: "Kaggle Learn",
                type: "course",
                cost: "Free",
                url: "https://www.kaggle.com/learn",
                desc: "Bite-sized, practical tutorials on Python, SQL, data cleaning, and ML models with live sandboxes."
            },
            {
                title: "IBM Data Science Professional Certificate",
                provider: "IBM / Coursera",
                type: "course",
                cost: "Paid ($39/mo)",
                url: "https://www.coursera.org/professional-certificates/ibm-data-science",
                desc: "A 9-course series starting from basic python to advanced machine learning and cloud dashboard deployment."
            },
            {
                title: "Predictive Real-Estate Valuation Tool",
                provider: "SkillBridge Lab",
                type: "project",
                cost: "Free",
                url: "#",
                desc: "Import home sale datasets, strip outliers, engineer geography features, and predict valuations with linear models."
            },
            {
                title: "Hands-On Machine Learning with Scikit-Learn",
                provider: "Aurélien Géron",
                type: "book",
                cost: "Paid ($45)",
                url: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
                desc: "Widely regarded as the bible for machine learning engineering practices in modern corporations."
            }
        ]
    },
    "ux-designer": {
        id: "ux-designer",
        name: "UX/UI Designer",
        domain: "Design & Creative Arts",
        domainKey: "creative",
        description: "Designs the overall interface, layout, and visual flow of digital applications. Employs user research, wireframing, prototyping, and usability audits.",
        salary: "$92,000",
        salaryNum: 92000,
        growth: "+16% (High)",
        growthNum: 16,
        stress: "Low",
        location: "Remote-friendly",
        locationKey: "remote",
        education: "Bachelors or Portfolio-based",
        styleKey: "collaborative",
        skills: ["Figma", "User Research", "Wireframing & Prototyping", "UI Design Principles", "Communication"],
        interests: {
            tech: 2,
            creative: 5,
            business: 3,
            health: 1,
            data: 3,
            social: 4
        },
        milestones: [
            {
                id: "ux-m1",
                title: "Stage 1: Design Fundamentals & Tools",
                tasks: [
                    { id: "ux-t1", text: "Learn core rules of color theory, typography, and grids" },
                    { id: "ux-t2", text: "Master Figma interface, auto-layouts, and component design" },
                    { id: "ux-t3", text: "Recreate popular application pages to analyze visual structure" }
                ]
            },
            {
                id: "ux-m2",
                title: "Stage 2: Human-Centered Research",
                tasks: [
                    { id: "ux-t4", text: "Learn user interview frameworks and structure questions" },
                    { id: "ux-t5", text: "Build user personas, empathy maps, and journey maps" },
                    { id: "ux-t6", text: "Create information architectures and user flow diagrams" }
                ]
            },
            {
                id: "ux-m3",
                title: "Stage 3: Wireframes & High-Fidelity Prototypes",
                tasks: [
                    { id: "ux-t7", text: "Sketch low-fidelity wireframes on paper and digital canvases" },
                    { id: "ux-t8", text: "Construct pixel-perfect UI screens matching responsive viewports" },
                    { id: "ux-t9", text: "Connect screens in Figma with interactive smart animations" }
                ]
            },
            {
                id: "ux-m4",
                title: "Stage 4: Evaluation & Developer Handoff",
                tasks: [
                    { id: "ux-t10", text: "Conduct usability testing sessions with user participants" },
                    { id: "ux-t11", text: "Perform heuristic evaluations to document accessibility friction" },
                    { id: "ux-t12", text: "Create design spec documents and export assets for programmers" }
                ]
            }
        ],
        resources: [
            {
                title: "Figma for Beginners",
                provider: "Figma Academy",
                type: "course",
                cost: "Free",
                url: "https://www.figma.com/resources/learn-design/",
                desc: "Official short course library teaching vector layers, grids, component styling, variables, and smart prototyping."
            },
            {
                title: "Google UX Design Professional Certificate",
                provider: "Google / Coursera",
                type: "course",
                cost: "Paid ($39/mo)",
                url: "https://www.coursera.org/professional-certificates/google-ux-design",
                desc: "An immersive 7-course specialization focusing on design thinking, mobile layouts, web wireframing, and portfolio building."
            },
            {
                title: "Mobile App Interface Design System",
                provider: "SkillBridge Lab",
                type: "project",
                cost: "Free",
                url: "#",
                desc: "Design a comprehensive, atomic-based mobile design system containing buttons, inputs, alerts, and 5 interactive layouts."
            },
            {
                title: "Don't Make Me Think",
                provider: "Steve Krug",
                type: "book",
                cost: "Paid ($25)",
                url: "https://sensible.com/dont-make-me-think/",
                desc: "A legendary guide on intuitive web design, user expectations, and simplicity in digital systems."
            }
        ]
    },
    "digital-marketer": {
        id: "digital-marketer",
        name: "Digital Marketing Manager",
        domain: "Business & Finance",
        domainKey: "business",
        description: "Creates, manages, and measures growth programs across digital channels, integrating SEO search performance, paid campaign optimization, and email marketing.",
        salary: "$85,000",
        salaryNum: 85000,
        growth: "+10% (Medium)",
        growthNum: 10,
        stress: "Moderate",
        location: "Remote-friendly",
        locationKey: "remote",
        education: "Bachelors or Certification-based",
        styleKey: "collaborative",
        skills: ["SEO", "Google Analytics", "Social Media Strategy", "Email Marketing", "Communication", "Copywriting"],
        interests: {
            tech: 2,
            creative: 4,
            business: 5,
            health: 1,
            data: 4,
            social: 5
        },
        milestones: [
            {
                id: "dm-m1",
                title: "Stage 1: Content Marketing & Writing",
                tasks: [
                    { id: "dm-t1", text: "Learn core writing structures of visual copywriting and hook generation" },
                    { id: "dm-t2", text: "Plan a 30-day social media engagement calendar" },
                    { id: "dm-t3", text: "Create high-converting landing page layouts and headlines" }
                ]
            },
            {
                id: "dm-m2",
                title: "Stage 2: Analytics & SEO Basics",
                tasks: [
                    { id: "dm-t4", text: "Configure search tags and keyword mappings for on-page SEO" },
                    { id: "dm-t5", text: "Link Google Analytics trackers to dynamic target sites" },
                    { id: "dm-t6", text: "Interpret traffic drop-offs using funnel metrics" }
                ]
            },
            {
                id: "dm-m3",
                title: "Stage 3: Paid Ads Management",
                tasks: [
                    { id: "dm-t7", text: "Learn search engine marketing frameworks via Google Ads dashboard" },
                    { id: "dm-t8", text: "Deploy target audience segmentation campaigns in Meta Ads Manager" },
                    { id: "dm-t9", text: "Calculate customer acquisition costs (CAC) and campaign ROI" }
                ]
            },
            {
                id: "dm-m4",
                title: "Stage 4: Automated Nurture & Retention",
                tasks: [
                    { id: "dm-t10", text: "Build automated email marketing flows in HubSpot or MailChimp" },
                    { id: "dm-t11", text: "Launch A/B tests analyzing email open rates and link click-throughs" },
                    { id: "dm-t12", text: "Formulate comprehensive quarterly organic vs paid performance presentations" }
                ]
            }
        ],
        resources: [
            {
                title: "Fundamentals of Digital Marketing",
                provider: "Google Garage",
                type: "course",
                cost: "Free",
                url: "https://grow.google/certificates/",
                desc: "26-module interactive certification program covering search, display, maps, and social media platforms."
            },
            {
                title: "Inbound Marketing Certification",
                provider: "HubSpot Academy",
                type: "course",
                cost: "Free",
                url: "https://academy.hubspot.com/courses/inbound",
                desc: "Focuses on content generation, blogging practices, automated workflows, and customer delight strategies."
            },
            {
                title: "Nurturing Email Automation Project",
                provider: "SkillBridge Lab",
                type: "project",
                cost: "Free",
                url: "#",
                desc: "Design and write a complete, high-converting 5-step email follow-up sequence targeting cart-abandonment users."
            },
            {
                title: "Contagious: Why Things Catch On",
                provider: "Jonah Berger",
                type: "book",
                cost: "Paid ($16)",
                url: "https://jonahberger.com/books/contagious/",
                desc: "Investigates the psychology of word-of-mouth, social currency, triggers, and viral loops."
            }
        ]
    },
    "informatics-analyst": {
        id: "informatics-analyst",
        name: "Healthcare Informatics Analyst",
        domain: "Healthcare & Sciences",
        domainKey: "healthcare",
        description: "Bridges the gap between clinical systems and technology. Optimizes Electronic Health Records (EHR), ensures regulatory HIPAA compliance, and designs hospital data visualizations.",
        salary: "$88,000",
        salaryNum: 88000,
        growth: "+17% (High)",
        growthNum: 17,
        stress: "Low",
        location: "In-Person Office / Lab",
        locationKey: "office",
        education: "Bachelors in Health Science/Informatics",
        styleKey: "collaborative",
        skills: ["SQL", "EHR Systems (Epic/Cerner)", "Data Analysis", "Healthcare Standards (HL7)", "Communication"],
        interests: {
            tech: 3,
            creative: 1,
            business: 3,
            health: 5,
            data: 4,
            social: 4
        },
        milestones: [
            {
                id: "ia-m1",
                title: "Stage 1: Clinical Workflows & Systems",
                tasks: [
                    { id: "ia-t1", text: "Learn hospital operations, clinical roles, and bedside workflows" },
                    { id: "ia-t2", text: "Understand Electronic Health Record (EHR) database architectures" },
                    { id: "ia-t3", text: "Review HIPAA privacy laws and medical security configurations" }
                ]
            },
            {
                id: "ia-m2",
                title: "Stage 2: Health Data Querying & Standards",
                tasks: [
                    { id: "ia-t4", text: "Write SQL scripts parsing demographic and diagnostic tables" },
                    { id: "ia-t5", text: "Learn medical coding standards (ICD-10, SNOMED-CT, CPT)" },
                    { id: "ia-t6", text: "Understand HL7 messaging protocols for routing lab test reports" }
                ]
            },
            {
                id: "ia-m3",
                title: "Stage 3: Integration & APIs",
                tasks: [
                    { id: "ia-t7", text: "Map clinical data elements into HL7 FHIR resource interfaces" },
                    { id: "ia-t8", text: "Configure interface engines (Mirth Connect) to process system links" },
                    { id: "ia-t9", text: "Troubleshoot connectivity drops between hospital wings and labs" }
                ]
            },
            {
                id: "ia-m4",
                title: "Stage 4: Insights & Reporting",
                tasks: [
                    { id: "ia-t10", text: "Build executive dashboards displaying hospital capacity analytics" },
                    { id: "ia-t11", text: "Run statistical assessments measuring patient readmission rates" },
                    { id: "ia-t12", text: "Create clinical training manuals explaining updated interface screens" }
                ]
            }
        ],
        resources: [
            {
                title: "Health Informatics Specialization",
                provider: "Johns Hopkins / Coursera",
                type: "course",
                cost: "Paid ($39/mo)",
                url: "https://www.coursera.org/specializations/health-informatics",
                desc: "Understands user interface configurations, security policies, and medical systems architecture."
            },
            {
                title: "FHIR Starter Guide Tutorials",
                provider: "HL7 International",
                type: "course",
                cost: "Free",
                url: "https://www.hl7.org/fhir/summary.html",
                desc: "An outline of Fast Healthcare Interoperability Resources (FHIR) API interfaces, JSON templates, and resources."
            },
            {
                title: "Emergency Department Dashboard",
                provider: "SkillBridge Lab",
                type: "project",
                cost: "Free",
                url: "#",
                desc: "Use clean sample datasets to create an interactive chart dashboard highlighting wait times, bed counts, and surge times."
            },
            {
                title: "Health Informatics: Practical Guide",
                provider: "Robert E. Hoyt",
                type: "book",
                cost: "Paid ($70)",
                url: "https://www.informaticseducation.org/",
                desc: "Comprehensive academic textbook on electronic records, health information exchange, and analytics."
            }
        ]
    },
    "financial-analyst": {
        id: "financial-analyst",
        name: "Financial Analyst",
        domain: "Business & Finance",
        domainKey: "business",
        description: "Assesses commercial performance, builds complex accounting forecast spreadsheets, and models capital valuation to guide corporate investing.",
        salary: "$96,000",
        salaryNum: 96000,
        growth: "+9% (Medium)",
        growthNum: 9,
        stress: "High",
        location: "In-Person Office / Lab",
        locationKey: "office",
        education: "Bachelors in Finance or Accounting",
        styleKey: "independent",
        skills: ["Financial Modeling", "Excel", "Data Analysis", "Statistics & Probability", "Problem Solving"],
        interests: {
            tech: 1,
            creative: 1,
            business: 5,
            health: 1,
            data: 5,
            social: 3
        },
        milestones: [
            {
                id: "fa-m1",
                title: "Stage 1: Corporate Accounting Core",
                tasks: [
                    { id: "fa-t1", text: "Master double-entry bookkeeping rules" },
                    { id: "fa-t2", text: "Understand relationships between Income, Balance, and Cash Flow statements" },
                    { id: "fa-t3", text: "Deconstruct quarterly earnings reports of public corporations" }
                ]
            },
            {
                id: "fa-m2",
                title: "Stage 2: Spreadsheet Mastery",
                tasks: [
                    { id: "fa-t4", text: "Learn key Excel functions (INDEX-MATCH, XLOOKUP, Nested IF)" },
                    { id: "fa-t5", text: "Master database pivot tables and visual chart layouts" },
                    { id: "fa-t6", text: "Eliminate mouse usage using standard financial keyboard shortcuts" }
                ]
            },
            {
                id: "fa-m3",
                title: "Stage 3: Corporate Valuation Modeling",
                tasks: [
                    { id: "fa-t7", text: "Build a Discounted Cash Flow (DCF) valuation model in Excel" },
                    { id: "fa-t8", text: "Perform Comparable Company Analyses (trading multiples)" },
                    { id: "fa-t9", text: "Model capital structural weights (WACC)" }
                ]
            },
            {
                id: "fa-m4",
                title: "Stage 4: Strategic Recommendations",
                tasks: [
                    { id: "fa-t10", text: "Conduct sensitivity analysis grids assessing market swings" },
                    { id: "fa-t11", text: "Draft professional investment recommendation decks" },
                    { id: "fa-t12", text: "Present financial projections directly to executive boards" }
                ]
            }
        ],
        resources: [
            {
                title: "CFI Basic Financial Courses",
                provider: "Corporate Finance Institute",
                type: "course",
                cost: "Free",
                url: "https://corporatefinanceinstitute.com/",
                desc: "Excellent, concise introductory guides on basic calculations, excel shortcuts, and balance sheets."
            },
            {
                title: "Premium Financial Modeling Course",
                provider: "Wall Street Prep",
                type: "course",
                cost: "Paid ($499)",
                url: "https://www.wallstreetprep.com/",
                desc: "The gold standard self-study training program used by global investment banks to train incoming analysts."
            },
            {
                title: "3-Statement Valuation Spreadsheet",
                provider: "SkillBridge Lab",
                type: "project",
                cost: "Free",
                url: "#",
                desc: "Build a clean, dynamic 5-year operating model for a selected company, projecting future statements and intrinsic value."
            },
            {
                title: "Security Analysis",
                provider: "Benjamin Graham & David Dodd",
                type: "book",
                cost: "Paid ($30)",
                url: "https://www.amazon.com/Security-Analysis-Sixth-Edition-Foreword/dp/0071597534",
                desc: "The foundational book on value investing, pricing assets, and evaluating business metrics."
            }
        ]
    }
};

// --- 2. PREDEFINED SYSTEM SKILLS ---
const SYSTEM_SKILLS = {
    tech: ["HTML", "CSS", "JavaScript", "Python", "SQL", "React/Vue", "Git"],
    analytical: ["Statistics & Probability", "Data Analysis", "Financial Modeling", "Excel", "Machine Learning", "Problem Solving"],
    creative: ["Figma", "UI Design Principles", "Wireframing & Prototyping", "User Research", "Content Writing", "Copywriting"],
    business: ["Communication", "Social Media Strategy", "Email Marketing", "Accounting Principles", "EHR Systems (Epic/Cerner)", "Healthcare Standards (HL7)"]
};

// --- 3. APPLICATION STATE ---
let appState = {
    currentTab: "dashboard",
    userProfile: {
        interests: {
            tech: 3,
            creative: 3,
            business: 3,
            health: 3,
            data: 3,
            social: 3
        },
        skills: [],
        workStyle: "collaborative",
        locationPref: "remote",
        assessmentCompleted: false
    },
    activeTargetCareerId: null,
    roadmapProgress: {} // { careerId: { taskId: true/false } }
};

// --- 4. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // Render the available skill chips inside the wizard step
    renderWizardSkillChips();

    // Hydrate state from localStorage if exists
    loadStateFromStorage();

    // Attach navigation click handlers
    document.querySelectorAll(".nav-item").forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");
            switchTab(tabId);
        });
    });

    // Interest Sliders Real-time Badges
    setupSliderListeners();

    // Reset button logic
    document.getElementById("btn-reset").addEventListener("click", handleResetData);

    // Wizard navigation controls
    setupWizardListeners();

    // Chatbot advisor listeners
    setupAdvisorListeners();

    // Filter listener for suggestions tab
    document.getElementById("filter-domain").addEventListener("change", renderSuggestionsView);
    document.getElementById("sort-careers").addEventListener("change", renderSuggestionsView);

    // Dropdowns changes (Roadmap select and Gap select, Compare selects)
    setupSelectorsListeners();

    // Initial UI render based on loaded state
    refreshUI();
});

// --- 5. TABS / VIEW CONTROL ---
function switchTab(tabId) {
    appState.currentTab = tabId;
    
    // Update active nav button class
    document.querySelectorAll(".nav-item").forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update active view pane class
    document.querySelectorAll(".view-pane").forEach(pane => {
        pane.classList.remove("active");
    });
    
    const targetPane = document.getElementById(`tab-${tabId}`);
    if (targetPane) {
        targetPane.classList.add("active");
    }

    // Header title mapping
    const titleMap = {
        "dashboard": "Dashboard Overview",
        "assessment": "Career Interest Assessment",
        "suggestions": "Personalized Matches",
        "roadmap": "Actionable Career Roadmap",
        "gap-analyzer": "Skill Gap Analysis",
        "comparison": "Career Comparison Matrix",
        "advisor": "AI Career Advisor Chat",
        "portfolio": "Portfolio Builder"
    };
    
    const subtitleMap = {
        "dashboard": "Welcome to SkillBridge AI. Start your journey below.",
        "assessment": "Let's explore your skills, core interests, and working styles.",
        "suggestions": "Recommended paths calculated based on your assessment answers.",
        "roadmap": "Step-by-step milestones to help you acquire target credentials.",
        "gap-analyzer": "Review missing technical capabilities and configure plans.",
        "comparison": "Directly compare market salaries, growth rates, and skill focus.",
        "advisor": "Chat with our virtual advisor regarding market paths, certifications, or workflows.",
        "portfolio": "Generate a professional profile card from your assessment data."
    };

    document.getElementById("top-bar-title").textContent = titleMap[tabId] || "SkillBridge AI";
    document.getElementById("top-bar-subtitle").textContent = subtitleMap[tabId] || "";

    // Trigger specific rendering if needed
    if (tabId === "suggestions") {
        renderSuggestionsView();
    } else if (tabId === "roadmap") {
        renderRoadmapView();
    } else if (tabId === "gap-analyzer") {
        renderGapAnalyzerView();
    } else if (tabId === "comparison") {
        renderComparisonView();
    } else if (tabId === "portfolio") {
        renderPortfolioView();
    }

    saveStateToStorage();
}

// --- 6. STATE STORAGE & HYDRATION ---
function saveStateToStorage() {
    localStorage.setItem("skillbridge_state", JSON.stringify(appState));
}

function loadStateFromStorage() {
    const raw = localStorage.getItem("skillbridge_state");
    if (raw) {
        try {
            const parsed = JSON.parse(raw);
            if (parsed) {
                appState = { ...appState, ...parsed };
                // Ensure default empty lists exist if parsed was corrupted
                if (!appState.userProfile) appState.userProfile = {};
                if (!appState.userProfile.skills) appState.userProfile.skills = [];
                if (!appState.userProfile.interests) appState.userProfile.interests = {};
                if (!appState.roadmapProgress) appState.roadmapProgress = {};
            }
        } catch (e) {
            console.error("Failed to parse SkillBridge state", e);
        }
    }
}

function handleResetData() {
    if (confirm("Are you sure you want to reset all assessment data, selected target career, and roadmap progress?")) {
        localStorage.removeItem("skillbridge_state");
        appState = {
            currentTab: "dashboard",
            userProfile: {
                interests: { tech: 3, creative: 3, business: 3, health: 3, data: 3, social: 3 },
                skills: [],
                workStyle: "collaborative",
                locationPref: "remote",
                assessmentCompleted: false
            },
            activeTargetCareerId: null,
            roadmapProgress: {}
        };
        saveStateToStorage();
        window.location.reload();
    }
}

// --- 7. WIZARD GENERATOR & RENDERERS ---
function renderWizardSkillChips() {
    for (const [category, skills] of Object.entries(SYSTEM_SKILLS)) {
        const container = document.getElementById(`category-${category}-skills`);
        if (!container) continue;
        
        container.innerHTML = "";
        skills.forEach(skillName => {
            const chip = document.createElement("div");
            chip.className = "skill-chip";
            chip.textContent = skillName;
            chip.setAttribute("data-skill", skillName);
            
            chip.addEventListener("click", () => {
                chip.classList.toggle("selected");
                const isSelected = chip.classList.contains("selected");
                
                if (isSelected) {
                    if (!appState.userProfile.skills.includes(skillName)) {
                        appState.userProfile.skills.push(skillName);
                    }
                } else {
                    appState.userProfile.skills = appState.userProfile.skills.filter(s => s !== skillName);
                }
                saveStateToStorage();
            });
            
            container.appendChild(chip);
        });
    }
}

function setupSliderListeners() {
    const sliders = ["tech", "creative", "business", "health", "data", "social"];
    const textLevels = ["None", "Low", "Moderate", "High", "Very High"];
    
    sliders.forEach(sliderId => {
        const input = document.getElementById(`interest-${sliderId}`);
        const badge = document.getElementById(`val-interest-${sliderId}`);
        
        if (input && badge) {
            input.addEventListener("input", (e) => {
                const val = parseInt(e.target.value);
                badge.textContent = textLevels[val - 1];
                appState.userProfile.interests[sliderId] = val;
                saveStateToStorage();
            });
        }
    });
}

function setupWizardListeners() {
    let currentStep = 1;
    const btnPrev = document.getElementById("btn-wizard-prev");
    const btnNext = document.getElementById("btn-wizard-next");
    
    btnPrev.addEventListener("click", () => {
        if (currentStep > 1) {
            goToStep(currentStep - 1);
        }
    });
    
    btnNext.addEventListener("click", () => {
        if (currentStep < 3) {
            goToStep(currentStep + 1);
        } else {
            // Save final step answers
            const workStyleVal = document.querySelector('input[name="work-style"]:checked').value;
            const locationVal = document.querySelector('input[name="location-pref"]:checked').value;
            
            appState.userProfile.workStyle = workStyleVal;
            appState.userProfile.locationPref = locationVal;
            appState.userProfile.assessmentCompleted = true;
            
            // Auto select a target career if none is selected
            calculateMatches();
            
            saveStateToStorage();
            refreshUI();
            
            // Redirect to suggestions
            switchTab("suggestions");
        }
    });

    function goToStep(step) {
        // Toggle steps content
        document.querySelectorAll(".step-content").forEach(el => el.classList.remove("active"));
        document.getElementById(`step-${step}-content`).classList.add("active");
        
        // Update steps indicator states
        document.querySelectorAll(".wizard-step").forEach(el => {
            const elStep = parseInt(el.getAttribute("data-step"));
            if (elStep === step) {
                el.className = "wizard-step active";
            } else if (elStep < step) {
                el.className = "wizard-step completed";
            } else {
                el.className = "wizard-step";
            }
        });
        
        currentStep = step;
        
        // Disable/enable prev button
        btnPrev.disabled = (currentStep === 1);
        
        // Change text of Next button on final step
        if (currentStep === 3) {
            btnNext.querySelector("span").textContent = "Submit & Match";
            btnNext.querySelector("i").setAttribute("data-lucide", "check-circle");
        } else {
            btnNext.querySelector("span").textContent = "Next";
            btnNext.querySelector("i").setAttribute("data-lucide", "arrow-right");
        }
        lucide.createIcons();
    }
}

// --- 8. RECOMMENDATION ENGINE ALGORITHM ---
function calculateMatches() {
    const user = appState.userProfile;
    const suggestions = [];

    for (const [key, career] of Object.entries(CAREER_DATABASE)) {
        // 1. Calculate Interest Match (max 70 points)
        // Sum of absolute differences between user sliders (1-5) and career preferences (1-5)
        let diff = 0;
        for (const [interestKey, idealVal] of Object.entries(career.interests)) {
            const userVal = user.interests[interestKey] || 3;
            diff += Math.abs(userVal - idealVal);
        }
        
        // 6 interests * max diff of 4 = max total diff of 24
        // Scale diff so perfect match is 70 points
        let interestScore = 70 - (diff * 2.8); // 24 * 2.8 = 67.2, keeping interestScore >= 0
        if (interestScore < 0) interestScore = 0;

        // 2. Calculate Skill Match (max 30 points)
        const matchedSkills = career.skills.filter(s => user.skills.includes(s));
        const skillRatio = career.skills.length > 0 ? (matchedSkills.length / career.skills.length) : 0;
        const skillScore = skillRatio * 30;

        // 3. Environment bonus (max 5 points, can overflow but we cap total match at 100%)
        let bonus = 0;
        if (career.styleKey === user.workStyle) bonus += 2.5;
        if (career.locationKey === user.locationPref) bonus += 2.5;

        let totalScore = Math.round(interestScore + skillScore + bonus);
        if (totalScore > 100) totalScore = 100;
        if (totalScore < 10) totalScore = 10; // baseline match

        suggestions.push({
            careerId: career.id,
            score: totalScore,
            matchedSkillsCount: matchedSkills.length
        });
    }

    // Sort by score descending
    suggestions.sort((a, b) => b.score - a.score);

    // Auto set the highest matching career as active target career if none is selected yet
    if (!appState.activeTargetCareerId && suggestions.length > 0) {
        appState.activeTargetCareerId = suggestions[0].careerId;
    }

    return suggestions;
}

// --- 9. UI REFRESH (DASHBOARD SYNC & TABS DYNAMICS) ---
function refreshUI() {
    lucide.createIcons();
    
    // 1. Hydrate assessment questionnaire inputs if completed
    const user = appState.userProfile;
    if (user.assessmentCompleted) {
        document.getElementById("dash-assessment-status").textContent = "Completed";
        document.getElementById("dash-assessment-status").className = "stat-value text-success";
        
        // Set values of range sliders
        const textLevels = ["None", "Low", "Moderate", "High", "Very High"];
        for (const [key, val] of Object.entries(user.interests)) {
            const input = document.getElementById(`interest-${key}`);
            const badge = document.getElementById(`val-interest-${key}`);
            if (input) input.value = val;
            if (badge) badge.textContent = textLevels[val - 1];
        }

        // Highlight chosen chips in step 2
        document.querySelectorAll(".skill-chip").forEach(chip => {
            const skillName = chip.getAttribute("data-skill");
            if (user.skills.includes(skillName)) {
                chip.classList.add("selected");
            } else {
                chip.classList.remove("selected");
            }
        });

        // Set radio buttons in step 3
        const wsRadio = document.querySelector(`input[name="work-style"][value="${user.workStyle}"]`);
        if (wsRadio) wsRadio.checked = true;
        const locRadio = document.querySelector(`input[name="location-pref"][value="${user.locationPref}"]`);
        if (locRadio) locRadio.checked = true;
    }

    // 2. Refresh Dashboard Profile Skills list
    const skillsList = document.getElementById("dash-skills-list");
    document.getElementById("dash-skills-count").textContent = `${user.skills.length} Skills`;
    
    if (user.skills.length > 0) {
        skillsList.innerHTML = "";
        user.skills.forEach(skill => {
            const tag = document.createElement("span");
            tag.className = "skill-tag";
            tag.textContent = skill;
            skillsList.appendChild(tag);
        });
    }

    // 3. Run matching logic to hydrate top quick recommendations list on dashboard
    const matches = calculateMatches();
    const suggestionsQuickList = document.getElementById("dash-suggestions-quick");
    
    if (user.assessmentCompleted && matches.length > 0) {
        suggestionsQuickList.innerHTML = "";
        // Take top 3
        matches.slice(0, 3).forEach(match => {
            const careerObj = CAREER_DATABASE[match.careerId];
            
            const matchItem = document.createElement("div");
            matchItem.className = "quick-match-item";
            matchItem.innerHTML = `
                <div class="match-info-group">
                    <span class="match-name">${careerObj.name}</span>
                    <span class="match-domain">${careerObj.domain}</span>
                </div>
                <span class="match-percent-badge">${match.score}% Match</span>
            `;
            matchItem.addEventListener("click", () => {
                switchTab("suggestions");
            });
            
            suggestionsQuickList.appendChild(matchItem);
        });
    }

    // 4. Hydrate Target Career details inside dashboard & sidebar progress cards
    updateActiveRoadmapUIs();
}

function updateActiveRoadmapUIs() {
    const sidebarTargetName = document.getElementById("sidebar-target-career");
    const sidebarTargetProgress = document.getElementById("sidebar-target-progress");
    const sidebarTargetText = document.getElementById("sidebar-target-text");
    
    const dashTargetCareer = document.getElementById("dash-target-career");
    const dashRoadmapPlaceholder = document.getElementById("dash-roadmap-placeholder");
    const dashRoadmapDetails = document.getElementById("dash-roadmap-details");
    
    const targetCareerId = appState.activeTargetCareerId;
    
    if (targetCareerId && CAREER_DATABASE[targetCareerId]) {
        const career = CAREER_DATABASE[targetCareerId];
        
        // Compute overall progress percentage
        const progressPct = calculateCareerProgress(targetCareerId);
        
        // Sidebar hydration
        sidebarTargetName.textContent = career.name;
        sidebarTargetProgress.style.width = `${progressPct}%`;
        sidebarTargetText.textContent = `${progressPct}% Complete`;
        
        // Dashboard hydration
        dashTargetCareer.textContent = career.name;
        dashRoadmapPlaceholder.classList.add("hidden");
        dashRoadmapDetails.classList.remove("hidden");
        
        document.getElementById("dash-roadmap-title").textContent = career.name;
        document.getElementById("dash-roadmap-pct").textContent = `${progressPct}% Done`;
        document.getElementById("dash-roadmap-bar").style.width = `${progressPct}%`;
        
        // Find current stage (first milestone with uncompleted tasks, or last one if all completed)
        let currentMilestone = career.milestones[0];
        let nextTaskText = "All milestones achieved! Great job!";
        let foundCurrent = false;

        const careerProgress = appState.roadmapProgress[targetCareerId] || {};

        for (const milestone of career.milestones) {
            const allTasksDone = milestone.tasks.every(t => careerProgress[t.id] === true);
            if (!allTasksDone && !foundCurrent) {
                currentMilestone = milestone;
                foundCurrent = true;
                const nextTask = milestone.tasks.find(t => !careerProgress[t.id]);
                if (nextTask) nextTaskText = `Next Up: ${nextTask.text}`;
            }
        }

        document.getElementById("dash-roadmap-stage").textContent = currentMilestone.title;
        document.getElementById("dash-roadmap-next-task").textContent = nextTaskText;
    } else {
        sidebarTargetName.textContent = "None Selected";
        sidebarTargetProgress.style.width = "0%";
        sidebarTargetText.textContent = "0% Complete";
        
        dashTargetCareer.textContent = "None";
        dashRoadmapPlaceholder.classList.remove("hidden");
        dashRoadmapDetails.classList.add("hidden");
    }
}

function calculateCareerProgress(careerId) {
    if (!careerId || !CAREER_DATABASE[careerId]) return 0;
    const career = CAREER_DATABASE[careerId];
    const progress = appState.roadmapProgress[careerId] || {};
    
    let totalTasks = 0;
    let completedTasks = 0;
    
    career.milestones.forEach(milestone => {
        milestone.tasks.forEach(task => {
            totalTasks++;
            if (progress[task.id] === true) {
                completedTasks++;
            }
        });
    });
    
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
}

// --- 10. SUGGESTIONS LIST RENDERING ---
function renderSuggestionsView() {
    const listContainer = document.getElementById("suggestions-list-container");
    if (!listContainer) return;

    if (!appState.userProfile.assessmentCompleted) {
        listContainer.innerHTML = `
            <div class="empty-state py-5">
                <i data-lucide="compass" class="lg"></i>
                <h4>No matches generated yet</h4>
                <p class="text-muted">Take the assessment first to calculate matches based on your interest profile.</p>
                <button class="btn btn-primary mt-3" onclick="switchTab('assessment')">Go to Assessment</button>
            </div>
        `;
        document.getElementById("matches-count-badge").textContent = "0 Paths Found";
        lucide.createIcons();
        return;
    }

    const domainFilter = document.getElementById("filter-domain").value;
    const sortBy = document.getElementById("sort-careers").value;

    let matches = calculateMatches(); // list of {careerId, score, matchedSkillsCount}

    // Map details
    let items = matches.map(match => {
        return {
            ...match,
            career: CAREER_DATABASE[match.careerId]
        };
    });

    // Filtering
    if (domainFilter !== "all") {
        items = items.filter(item => item.career.domainKey === domainFilter);
    }

    // Sorting
    if (sortBy === "salary") {
        items.sort((a, b) => b.career.salaryNum - a.career.salaryNum);
    } else if (sortBy === "demand") {
        items.sort((a, b) => b.career.growthNum - a.career.growthNum);
    } else {
        // default match score
        items.sort((a, b) => b.score - a.score);
    }

    document.getElementById("matches-count-badge").textContent = `${items.length} Paths Found`;

    if (items.length === 0) {
        listContainer.innerHTML = `
            <div class="empty-state py-5">
                <i data-lucide="filter-x"></i>
                <h4>No careers match filters</h4>
                <p class="text-muted">Adjust your filter dropdown parameters to display careers.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    listContainer.innerHTML = "";
    items.forEach((item, index) => {
        const career = item.career;
        const userSkills = appState.userProfile.skills;
        
        // Classify which skills user has vs lacks for this specific career
        const possessedChips = career.skills.filter(s => userSkills.includes(s));
        const missingChips = career.skills.filter(s => !userSkills.includes(s));

        const card = document.createElement("div");
        card.className = `career-match-card ${index === 0 && domainFilter === 'all' && sortBy === 'match' ? 'best-fit' : ''}`;
        
        let skillsRowHTML = "";
        if (career.skills.length > 0) {
            skillsRowHTML = `
                <div class="card-skills-row">
                    <span class="card-skills-lbl">Skill Requirements Breakdown:</span>
                    <div class="card-skills-list">
                        ${possessedChips.map(s => `<span class="skill-tag-check"><i data-lucide="check"></i> ${s}</span>`).join("")}
                        ${missingChips.map(s => `<span class="skill-tag-missing">${s}</span>`).join("")}
                    </div>
                </div>
            `;
        }

        const isActive = appState.activeTargetCareerId === career.id;

        card.innerHTML = `
            <div class="card-top-info">
                <div class="card-title-group">
                    <h3>${career.name}</h3>
                    <div class="card-subtitle-group">
                        <span class="badge badge-secondary">${career.domain}</span>
                        <span>&bull;</span>
                        <span>${career.location}</span>
                    </div>
                </div>
                <div class="card-match-score">
                    <span class="score-num">${item.score}%</span>
                    <span class="score-label">Match</span>
                </div>
            </div>
            
            <p class="card-body-desc">${career.description}</p>
            
            <div class="card-stats-row">
                <div class="card-stat-box">
                    <span class="card-stat-lbl">Est. Salary</span>
                    <span class="card-stat-val text-success">${career.salary}</span>
                </div>
                <div class="card-stat-box">
                    <span class="card-stat-lbl">Job Growth</span>
                    <span class="card-stat-val text-highlight">${career.growth}</span>
                </div>
                <div class="card-stat-box">
                    <span class="card-stat-lbl">Stress Level</span>
                    <span class="card-stat-val">${career.stress}</span>
                </div>
                <div class="card-stat-box">
                    <span class="card-stat-lbl">Education</span>
                    <span class="card-stat-val">${career.education}</span>
                </div>
            </div>

            ${skillsRowHTML}

            <div class="card-actions-bar">
                <button class="btn btn-secondary btn-sm" onclick="openComparisonWith('${career.id}')">
                    <i data-lucide="columns"></i> Compare
                </button>
                <button class="btn btn-secondary btn-sm" onclick="openGapAnalysisWith('${career.id}')">
                    <i data-lucide="git-pull-request"></i> Analyze Gaps
                </button>
                <button class="btn ${isActive ? 'btn-primary' : 'btn-outline'} btn-sm" onclick="setActiveTargetCareer('${career.id}')">
                    <i data-lucide="${isActive ? 'check' : 'target'}"></i> 
                    <span>${isActive ? 'Active Target' : 'Set as Target'}</span>
                </button>
            </div>
        `;
        listContainer.appendChild(card);
    });
    lucide.createIcons();
}

function setActiveTargetCareer(careerId) {
    appState.activeTargetCareerId = careerId;
    
    // Create progress profile key if not initialized
    if (!appState.roadmapProgress[careerId]) {
        appState.roadmapProgress[careerId] = {};
    }
    
    saveStateToStorage();
    refreshUI();
    
    // Re-render suggestions view to update the button status
    if (appState.currentTab === "suggestions") {
        renderSuggestionsView();
    }
}

function openComparisonWith(careerId) {
    // Set comparator dropdown 1
    document.getElementById("compare-career-1").value = careerId;
    switchTab("comparison");
}

function openGapAnalysisWith(careerId) {
    document.getElementById("gap-target-selector").value = careerId;
    switchTab("gap-analyzer");
}

// --- 11. INTERACTIVE ROADMAP & CHECKLISTS ---
function renderRoadmapView() {
    const milestonesList = document.getElementById("roadmap-milestones-list");
    const activeCareerId = appState.activeTargetCareerId;
    
    // Build select dropdown inside roadmap view
    const selector = document.getElementById("active-roadmap-selector");
    selector.innerHTML = "";
    
    // If no target is set yet, populate selector with first option as placeholder
    if (!activeCareerId) {
        const option = document.createElement("option");
        option.textContent = "-- Select a target career --";
        option.value = "";
        selector.appendChild(option);
    }

    Object.values(CAREER_DATABASE).forEach(c => {
        const option = document.createElement("option");
        option.value = c.id;
        option.textContent = c.name;
        if (c.id === activeCareerId) {
            option.selected = true;
        }
        selector.appendChild(option);
    });

    if (!activeCareerId || !CAREER_DATABASE[activeCareerId]) {
        milestonesList.innerHTML = `
            <div class="empty-state py-5">
                <i data-lucide="map" class="lg"></i>
                <h4>No Active Career Roadmap</h4>
                <p class="text-muted">Select a target career from your suggestions tab or select one in the dropdown above to view the journey.</p>
            </div>
        `;
        document.getElementById("roadmap-main-title").textContent = "No Active Career";
        document.getElementById("roadmap-radial-pct").textContent = "0%";
        document.querySelector(".progress-radial-placeholder").style.background = `conic-gradient(var(--accent-primary) 0%, rgba(255, 255, 255, 0.05) 0%)`;
        document.getElementById("roadmap-resources-list").innerHTML = `<p class="text-muted text-center py-4">Please select a career to load learning materials.</p>`;
        lucide.createIcons();
        return;
    }

    const career = CAREER_DATABASE[activeCareerId];
    document.getElementById("roadmap-main-title").textContent = career.name;
    
    // Update progress numbers
    const progressPct = calculateCareerProgress(activeCareerId);
    document.getElementById("roadmap-radial-pct").textContent = `${progressPct}%`;
    document.querySelector(".progress-radial-placeholder").style.background = `conic-gradient(var(--accent-primary) ${progressPct}%, rgba(255, 255, 255, 0.05) ${progressPct}%)`;

    // Render Milestone Cards
    milestonesList.innerHTML = "";
    
    const careerProgress = appState.roadmapProgress[activeCareerId] || {};

    career.milestones.forEach((milestone, mIdx) => {
        // Evaluate if milestone is completed (all tasks checked)
        const allTasksCompleted = milestone.tasks.length > 0 && milestone.tasks.every(t => careerProgress[t.id] === true);
        
        // Evaluate if milestone is currently active (first uncompleted milestone, or if previous completed)
        let isActiveNode = false;
        if (!allTasksCompleted) {
            // Find if any prior milestone is uncompleted
            const priorUncompleted = career.milestones.slice(0, mIdx).some(m => !m.tasks.every(t => careerProgress[t.id] === true));
            if (!priorUncompleted) {
                isActiveNode = true;
            }
        }

        const node = document.createElement("div");
        node.className = `roadmap-milestone-node ${allTasksCompleted ? 'completed' : ''} ${isActiveNode ? 'active' : ''}`;
        
        const tasksHTML = milestone.tasks.map(task => {
            const isChecked = careerProgress[task.id] === true;
            return `
                <label class="task-checkbox-item ${isChecked ? 'checked' : ''}">
                    <input type="checkbox" data-task-id="${task.id}" ${isChecked ? 'checked' : ''}>
                    <span>${task.text}</span>
                </label>
            `;
        }).join("");

        node.innerHTML = `
            <div class="milestone-node-dot"></div>
            <div class="milestone-node-card">
                <div class="milestone-card-header">
                    <h4>${milestone.title}</h4>
                    ${allTasksCompleted ? '<span class="badge text-success"><i data-lucide="check" style="width:12px;height:12px;"></i> Ready</span>' : ''}
                </div>
                <div class="milestone-tasks-list">
                    ${tasksHTML}
                </div>
            </div>
        `;

        // Add task checkbox toggle listener
        node.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener("change", (e) => {
                const taskId = e.target.getAttribute("data-task-id");
                const checked = e.target.checked;
                
                if (!appState.roadmapProgress[activeCareerId]) {
                    appState.roadmapProgress[activeCareerId] = {};
                }
                
                appState.roadmapProgress[activeCareerId][taskId] = checked;
                
                saveStateToStorage();
                updateActiveRoadmapUIs();
                renderRoadmapView(); // refresh current view to update milestones complete flags
            });
        });

        milestonesList.appendChild(node);
    });

    // Also render resources inside the right pane
    renderRoadmapResources(career.resources);
    lucide.createIcons();
}

function renderRoadmapResources(resources) {
    const resourcesListContainer = document.getElementById("roadmap-resources-list");
    const activeFilter = document.querySelector(".resource-filter-tabs .res-tab.active").getAttribute("data-res-filter");
    
    let items = resources || [];
    if (activeFilter !== "all") {
        items = items.filter(r => r.type === activeFilter);
    }

    if (items.length === 0) {
        resourcesListContainer.innerHTML = `
            <div class="empty-state py-4">
                <p class="text-muted text-center" style="font-size: 0.85rem;">No resources found matching this filter.</p>
            </div>
        `;
        return;
    }

    resourcesListContainer.innerHTML = "";
    items.forEach(res => {
        const card = document.createElement("div");
        card.className = "resource-card-item";
        
        let typeLabel = "Course";
        if (res.type === "project") typeLabel = "Project";
        if (res.type === "book") typeLabel = "Book/Reference";

        card.innerHTML = `
            <div class="resource-top">
                <span class="res-badge-type res-type-${res.type}">${typeLabel}</span>
                <span class="res-cost">${res.cost}</span>
            </div>
            <span class="resource-title">${res.title}</span>
            <p class="resource-desc">${res.desc}</p>
            <div class="resource-footer-link">
                <span class="resource-provider">via ${res.provider}</span>
                <a href="${res.url}" target="_blank" class="btn-text" style="font-size: 0.78rem;">Learn <i data-lucide="external-link" style="width:12px;height:12px;"></i></a>
            </div>
        `;
        resourcesListContainer.appendChild(card);
    });
}

// --- 12. SKILL GAP ANALYZER ---
function renderGapAnalyzerView() {
    const targetSelector = document.getElementById("gap-target-selector");
    targetSelector.innerHTML = "";

    Object.values(CAREER_DATABASE).forEach(c => {
        const option = document.createElement("option");
        option.value = c.id;
        option.textContent = c.name;
        if (c.id === appState.activeTargetCareerId) {
            option.selected = true;
        }
        targetSelector.appendChild(option);
    });

    calculateGaps();
}

function calculateGaps() {
    const careerId = document.getElementById("gap-target-selector").value;
    const emptyState = document.getElementById("gap-empty-state");
    const resultsWrapper = document.getElementById("gap-results-wrapper");

    if (!careerId || !CAREER_DATABASE[careerId]) {
        emptyState.classList.remove("hidden");
        resultsWrapper.classList.add("hidden");
        return;
    }

    emptyState.classList.add("hidden");
    resultsWrapper.classList.remove("hidden");

    const career = CAREER_DATABASE[careerId];
    const userSkills = appState.userProfile.skills;

    const acquired = career.skills.filter(s => userSkills.includes(s));
    const missing = career.skills.filter(s => !userSkills.includes(s));

    // Update Counts
    document.getElementById("count-acquired-skills").textContent = acquired.length;
    document.getElementById("count-missing-skills").textContent = missing.length;

    // Render Acquired List
    const acquiredList = document.getElementById("gap-list-acquired-skills");
    acquiredList.innerHTML = "";
    if (acquired.length === 0) {
        acquiredList.innerHTML = `<p class="text-muted text-center py-3 text-small">No acquired skills match this career path yet.</p>`;
    } else {
        acquired.forEach(skill => {
            const row = document.createElement("div");
            row.className = "gap-skill-row";
            row.innerHTML = `
                <span class="gap-skill-name">${skill}</span>
                <span class="gap-badge-level lvl-acquired">Acquired</span>
            `;
            acquiredList.appendChild(row);
        });
    }

    // Render Missing List
    const missingList = document.getElementById("gap-list-missing-skills");
    missingList.innerHTML = "";
    if (missing.length === 0) {
        missingList.innerHTML = `<p class="text-success text-center py-3 text-small">Amazing! You possess all required skills for this career path!</p>`;
    } else {
        missing.forEach(skill => {
            const row = document.createElement("div");
            row.className = "gap-skill-row";
            row.innerHTML = `
                <span class="gap-skill-name">${skill}</span>
                <span class="gap-badge-level lvl-missing">Missing</span>
            `;
            missingList.appendChild(row);
        });
    }

    // Readiness calculation
    const totalRequired = career.skills.length;
    const readinessPct = totalRequired > 0 ? Math.round((acquired.length / totalRequired) * 100) : 100;
    
    const bridgePct = document.getElementById("gap-bridge-pct");
    bridgePct.textContent = `${readinessPct}% Ready`;
    
    if (readinessPct >= 80) {
        bridgePct.className = "bridge-pct-number text-success";
    } else if (readinessPct >= 40) {
        bridgePct.className = "bridge-pct-number text-highlight";
    } else {
        bridgePct.className = "bridge-pct-number text-accent";
    }

    // Generate Skill Bridge Actions
    const bridgeActions = document.getElementById("gap-bridge-actions");
    bridgeActions.innerHTML = "";

    if (missing.length === 0) {
        bridgeActions.innerHTML = `
            <div class="empty-state py-3">
                <i data-lucide="check-circle2" class="text-success"></i>
                <p>No bridge plan needed. You have reached 100% skill matching!</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    // Map tailored action steps for common skills
    const customStepData = {
        "HTML": {
            title: "Learn Semantic Markup & Tags",
            desc: "HTML defines the page structure. Allocate 5-10 hours learning paragraph hooks, canvas elements, forms, and validation tags."
        },
        "CSS": {
            title: "Study Modern Box Alignment Styles",
            desc: "Focus on CSS custom variables, modern Flexbox grid structures, responsive layout designs, and transition parameters."
        },
        "JavaScript": {
            title: "Code core programming scripts & algorithms",
            desc: "Study object syntax, async functions, promises, web requests, DOM event hooks, and algorithmic structures."
        },
        "React/Vue": {
            title: "Construct modular, component-based interfaces",
            desc: "Start with components, props, lists rendering, hook dependencies, custom states, and routing routers."
        },
        "UI Design Principles": {
            title: "Deconstruct alignment layouts and spacing rules",
            desc: "Study visual balance guidelines, typography ratios, harmonic color selection, and responsive layouts spacing."
        },
        "Git": {
            title: "Adopt standard version control protocols",
            desc: "Configure git profiles on terminal. Practice stage commit, branches branching, merge disputes, and pushing projects."
        },
        "Python": {
            title: "Build automated tools & processing scripts",
            desc: "Learn standard control flow rules, dictionary parsing models, class configurations, and virtual environments."
        },
        "SQL": {
            title: "Design standard relational database systems",
            desc: "Learn standard CRUD operations. Practice aggregate queries, sub-queries, joins variables, and view setups."
        },
        "Statistics & Probability": {
            title: "Explore central tendencies and hypothesis evaluations",
            desc: "Deconstruct variance levels, mean deviations, probability layouts, Bayes formulas, and confidence scoring."
        },
        "Machine Learning": {
            title: "Build regression and classification analytics scripts",
            desc: "Explore Scikit-learn methods. Configure linear fit pipelines, decision tree limits, random forests, and score logs."
        },
        "Data Visualization": {
            title: "Craft comprehensive, clear data plots",
            desc: "Learn Matplotlib/Seaborn tools. Format graph axes, configure dynamic color mappings, and map trends graphs."
        },
        "Figma": {
            title: "Build reusable visual library vector structures",
            desc: "Learn standard keyboard command links. Work with layout parameters, design sheets, prototype wires, and overlays."
        },
        "User Research": {
            title: "Formulate user inquiry templates",
            desc: "Draft non-leading interview forms. Map user test panels, record usability sessions, and compile research highlights."
        },
        "Wireframing & Prototyping": {
            title: "Build interactive click-through designs",
            desc: "Construct low-fidelity canvas outlines. Connect overlay windows, navigation paths, and transition effects."
        },
        "SEO": {
            title: "Audit search engine visibility configurations",
            desc: "Understand crawlers guidelines. Master meta tag optimizations, keyword configurations, site architectures, and backlinks."
        },
        "Google Analytics": {
            title: "Integrate customer funnel tracking configurations",
            desc: "Learn key Google Analytics setup tasks. Configure custom event goals, page-views tracker tags, and dashboards audits."
        },
        "Email Marketing": {
            title: "Develop high-converting nurture sequences",
            desc: "Structure sequence campaigns. Draft customer engagement templates, manage newsletter cycles, and track click-through scores."
        },
        "Copywriting": {
            title: "Write clear, persuasive sales pages",
            desc: "Study consumer psychology hooks. Learn PAS (Problem-Agitate-Solve) layouts and write targeted call-to-actions."
        },
        "Financial Modeling": {
            title: "Model corporate statement relationships",
            desc: "Forecast integrated accounts. Build dynamic spreadsheet forecasting tabs, calculating DCFs and intrinsic prices."
        },
        "Excel": {
            title: "Master advanced formulas and hotkey bindings",
            desc: "Eliminate mouse usages using hotkey commands. Implement INDEX-MATCH scripts, XLOOKUP lists, and pivot grids."
        },
        "Healthcare Standards (HL7)": {
            title: "Map clinical data message schemas",
            desc: "Examine HL7 v2 pipes formats. Configure clinical resource fields mapping schemas in Mirth Connect paths."
        },
        "EHR Systems (Epic/Cerner)": {
            title: "Configure provider records access settings",
            desc: "Analyze Electronic Health Records systems data flows. Map provider dashboards workflows and order-entry paths."
        },
        "Accounting Principles": {
            title: "Practice balance sheets ledger adjustments",
            desc: "Understand debit credit accounts balancing. Formulate financial positions statements and net cash flow statements."
        },
        "Problem Solving": {
            title: "Deconstruct compound bugs and trace errors",
            desc: "Learn debugging frameworks. Practice dry-running logic workflows and isolate problematic functions."
        },
        "Communication": {
            title: "Structure clean professional reports and documents",
            desc: "Deliver clear engineering specifications, project briefings, customer progress briefs, and design handovers."
        }
    };

    // Take top 3 missing skills to avoid cluttering the dashboard
    missing.slice(0, 3).forEach((skillName, index) => {
        const stepNum = index + 1;
        const defaultStep = {
            title: `Develop competency in ${skillName}`,
            desc: `Search for documentation guides, online tutorials, and build simple sandboxed applications practicing ${skillName}.`
        };
        const stepDetail = customStepData[skillName] || defaultStep;

        const actionCard = document.createElement("div");
        actionCard.className = "bridge-step-item";
        actionCard.innerHTML = `
            <div class="bridge-step-num">${stepNum}</div>
            <div class="bridge-step-content">
                <h5>${stepDetail.title}</h5>
                <p>${stepDetail.desc}</p>
            </div>
        `;
        bridgeActions.appendChild(actionCard);
    });

    if (missing.length > 3) {
        const extraNote = document.createElement("p");
        extraNote.className = "text-muted text-small text-center py-1";
        extraNote.textContent = `+ ${missing.length - 3} more skills needed. Select them in the roadmap milestones checklist to track progress.`;
        bridgeActions.appendChild(extraNote);
    }
    
    lucide.createIcons();
}

// --- 13. CAREER COMPARISON VIEW ---
function renderComparisonView() {
    const c1Select = document.getElementById("compare-career-1");
    const c2Select = document.getElementById("compare-career-2");

    // Hydrate options
    c1Select.innerHTML = "";
    c2Select.innerHTML = "";

    const careers = Object.values(CAREER_DATABASE);
    
    careers.forEach((c, idx) => {
        const opt1 = document.createElement("option");
        opt1.value = c.id;
        opt1.textContent = c.name;
        
        const opt2 = document.createElement("option");
        opt2.value = c.id;
        opt2.textContent = c.name;

        // Default set different selections
        if (idx === 0) opt1.selected = true;
        if (idx === 1 || (careers.length === 1 && idx === 0)) opt2.selected = true;

        c1Select.appendChild(opt1);
        c2Select.appendChild(opt2);
    });

    calculateComparison();
}

function calculateComparison() {
    const c1Id = document.getElementById("compare-career-1").value;
    const c2Id = document.getElementById("compare-career-2").value;
    const resultsPanel = document.getElementById("compare-results-panel");

    if (!c1Id || !c2Id || !CAREER_DATABASE[c1Id] || !CAREER_DATABASE[c2Id]) {
        resultsPanel.classList.add("hidden");
        return;
    }

    resultsPanel.classList.remove("hidden");

    const career1 = CAREER_DATABASE[c1Id];
    const career2 = CAREER_DATABASE[c2Id];

    // Hydrate table columns
    document.getElementById("comp-name-1").textContent = career1.name;
    document.getElementById("comp-name-2").textContent = career2.name;

    document.getElementById("comp-sector-1").textContent = career1.domain;
    document.getElementById("comp-sector-2").textContent = career2.domain;

    document.getElementById("comp-salary-1").textContent = career1.salary;
    document.getElementById("comp-salary-2").textContent = career2.salary;

    document.getElementById("comp-growth-1").textContent = career1.growth;
    document.getElementById("comp-growth-2").textContent = career2.growth;

    document.getElementById("comp-wlb-1").textContent = career1.stress === "Low" ? "Excellent (Low Stress)" : career1.stress === "Moderate" ? "Good (Moderate Stress)" : "Challenging (High Stress)";
    document.getElementById("comp-wlb-2").textContent = career2.stress === "Low" ? "Excellent (Low Stress)" : career2.stress === "Moderate" ? "Good (Moderate Stress)" : "Challenging (High Stress)";

    document.getElementById("comp-education-1").textContent = career1.education;
    document.getElementById("comp-education-2").textContent = career2.education;

    document.getElementById("comp-location-1").textContent = career1.location;
    document.getElementById("comp-location-2").textContent = career2.location;

    // Render Attribute Bar Graphs
    // tech profile comparisons
    document.getElementById("attr-code-1").textContent = career1.interests.tech;
    document.getElementById("attr-code-2").textContent = career2.interests.tech;
    document.getElementById("bar-code-1").style.width = `${career1.interests.tech * 20}%`;
    document.getElementById("bar-code-2").style.width = `${career2.interests.tech * 20}%`;

    // design profile comparisons
    document.getElementById("attr-design-1").textContent = career1.interests.creative;
    document.getElementById("attr-design-2").textContent = career2.interests.creative;
    document.getElementById("bar-design-1").style.width = `${career1.interests.creative * 20}%`;
    document.getElementById("bar-design-2").style.width = `${career2.interests.creative * 20}%`;

    // business profile comparisons
    document.getElementById("attr-business-1").textContent = career1.interests.business;
    document.getElementById("attr-business-2").textContent = career2.interests.business;
    document.getElementById("bar-business-1").style.width = `${career1.interests.business * 20}%`;
    document.getElementById("bar-business-2").style.width = `${career2.interests.business * 20}%`;

    // data analysis profile comparisons
    document.getElementById("attr-data-1").textContent = career1.interests.data;
    document.getElementById("attr-data-2").textContent = career2.interests.data;
    document.getElementById("bar-data-1").style.width = `${career1.interests.data * 20}%`;
    document.getElementById("bar-data-2").style.width = `${career2.interests.data * 20}%`;

    // Legend mapping
    document.getElementById("legend-label-1").textContent = career1.name;
    document.getElementById("legend-label-2").textContent = career2.name;
}

// --- 14. ADVISOR INTERACTIVE CHATBOT (SIMULATED CORE INTERFACE) ---
function setupAdvisorListeners() {
    const chatForm = document.getElementById("chat-input-form");
    const userInput = document.getElementById("chat-user-message");
    
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const msg = userInput.value.trim();
        if (!msg) return;
        
        submitUserChatMessage(msg);
        userInput.value = "";
    });

    // Suggested question buttons click handlers
    document.querySelectorAll(".prompt-pill").forEach(btn => {
        btn.addEventListener("click", () => {
            const promptText = btn.textContent.replace(/"/g, '').trim();
            submitUserChatMessage(promptText);
        });
    });
}

function submitUserChatMessage(text) {
    const chatContainer = document.getElementById("chat-messages-container");
    
    // Append User Message Bubble
    const userMsgNode = document.createElement("div");
    userMsgNode.className = "message msg-user";
    userMsgNode.innerHTML = `
        <div class="message-content">
            <p>${escapeHTML(text)}</p>
        </div>
        <span class="message-timestamp">${getCurrentTimeString()}</span>
    `;
    chatContainer.appendChild(userMsgNode);
    scrollChatToBottom();

    // Create typing indicator node
    const typingNode = document.createElement("div");
    typingNode.className = "message msg-ai typing-wrapper";
    typingNode.innerHTML = `
        <div class="message-content typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
        <span class="message-timestamp">Typing...</span>
    `;
    
    chatContainer.appendChild(typingNode);
    scrollChatToBottom();

    // Simulate AI response delay
    setTimeout(() => {
        // Remove typing indicator
        const typingWrapper = chatContainer.querySelector(".typing-wrapper");
        if (typingWrapper) typingWrapper.remove();

        // Calculate Response
        const replyHTML = generateAdvisorResponse(text);
        
        const aiMsgNode = document.createElement("div");
        aiMsgNode.className = "message msg-ai";
        aiMsgNode.innerHTML = `
            <div class="message-content">
                ${replyHTML}
            </div>
            <span class="message-timestamp">${getCurrentTimeString()}</span>
        `;
        chatContainer.appendChild(aiMsgNode);
        scrollChatToBottom();
        lucide.createIcons();
    }, 1200);
}

function generateAdvisorResponse(query) {
    const q = query.toLowerCase();
    
    // Developer query response
    if (q.includes("developer") || q.includes("software engineer") || q.includes("coding") || q.includes("code")) {
        return `
            <p><strong>Frontend Software Engineering</strong> is an excellent target if you score highly in <strong>Coding & Technology</strong> and enjoy immediate visual feedback. 💻</p>
            <p>Here is what you need to know to get started:</p>
            <ul>
                <li><strong>Core Skills:</strong> You must master HTML5 semantic markers, CSS layouts (Flexbox/Grid), and programming variables in JavaScript.</li>
                <li><strong>Roadmap Milestone:</strong> Start with Stage 1 and focus on creating mobile-responsive landing pages before adding dynamic React or Vue scripts.</li>
                <li><strong>Job Outlook:</strong> Very strong growth (+22%) with an average market salary around <strong>$105,000</strong>. Many roles offer 100% remote flexibility.</li>
            </ul>
            <p>Would you like me to highlight specific HTML or CSS resources currently in our roadmap library?</p>
        `;
    }
    
    // UI/UX designer response
    if (q.includes("designer") || q.includes("ux") || q.includes("ui") || q.includes("figma") || q.includes("creative")) {
        return `
            <p>A career in <strong>UX/UI Design</strong> is perfect for individuals who score highly in <strong>Design & Creative Arts</strong> but want to build digital systems. 🎨</p>
            <p>Common questions answered:</p>
            <ul>
                <li><strong>Do I need to code?</strong> No! UI/UX focus is on user research, empathy maps, wireframes, visual alignment, and prototyping in Figma. No coding is required, though understanding HTML basics helps team handoffs.</li>
                <li><strong>What is the best initial step?</strong> Learn the Figma interface inside out. Build wireframes and create clickable interactive prototypes.</li>
                <li><strong>Earning Potential:</strong> Average salary is around <strong>$92,000</strong>, with healthy job demand growth (+16%).</li>
            </ul>
            <p>I suggest checking our <strong>Google UX Design Professional Certificate</strong> resource under the design roadmap for a comprehensive entry path.</p>
        `;
    }

    // Data scientist response
    if (q.includes("data scientist") || q.includes("statistics") || q.includes("machine learning") || q.includes("math") || q.includes("python")) {
        return `
            <p>Becoming a <strong>Data Scientist</strong> requires strong analytical thinking, mathematics, and programming logic. 📊</p>
            <p>Key information regarding this path:</p>
            <ul>
                <li><strong>Daily Tasks:</strong> Wrangling dirty data using Python Pandas, querying databases with SQL, building forecasting regressions, and presenting visual reports to business leaders.</li>
                <li><strong>Highly Valued Credentials:</strong> A STEM bachelor degree is typical, but a solid portfolio containing real-world data cleanup and predictive model APIs is critical.</li>
                <li><strong>Market Strength:</strong> This is our highest growth career field (+36%) with salaries averaging <strong>$120,000</strong>.</li>
            </ul>
            <p>Check out the <strong>Kaggle Micro-Courses</strong> in our resources section to start practicing database querying and python analytics for free!</p>
        `;
    }

    // Digital Marketer response
    if (q.includes("marketer") || q.includes("marketing") || q.includes("seo") || q.includes("google analytics") || q.includes("social media")) {
        return `
            <p><strong>Digital Marketing Managers</strong> focus on driving customer acquisition and engagement across online platforms. 📣</p>
            <p>Key details on entering this domain:</p>
            <ul>
                <li><strong>Primary Roles:</strong> Formulating SEO keyword strategies, configuring paid Meta/Google advertisements campaigns, analyzing customer funnel click dropoffs, and drafting sales copywriting templates.</li>
                <li><strong>Stress Level:</strong> Moderate, but campaigns require constant monitoring and budget reviews.</li>
                <li><strong>How to start:</strong> Take Google's <em>Fundamentals of Digital Marketing</em> course (Free in our roadmap resource pane) and practice launching a niche blog or social page.</li>
            </ul>
            <p>Would you like to review marketing toolkits or copywriting frameworks?</p>
        `;
    }

    // Informatics / Healthcare analyst response
    if (q.includes("informatics") || q.includes("healthcare") || q.includes("clinical") || q.includes("hospital") || q.includes("hipaa")) {
        return `
            <p>The <strong>Healthcare Informatics Analyst</strong> role is a vital bridge integrating clinical systems database frameworks with patient care delivery systems. 🏥</p>
            <p>Why choose Healthcare Informatics:</p>
            <ul>
                <li><strong>High Stability:</strong> Healthcare environments are highly resilient to standard economic market shifts. Job growth is strong at +17%.</li>
                <li><strong>Skills Gap Note:</strong> You'll need to understand SQL query design, medical coding classifications (ICD-10), EHR architectures (Epic/Cerner), and HIPAA security standards.</li>
                <li><strong>Workspace:</strong> Often works inside hospital settings or medical labs alongside nurses and administrators.</li>
            </ul>
            <p>We recommend starting with Johns Hopkins' <strong>Health Informatics Specialization</strong> course listed under our healthcare resources tab.</p>
        `;
    }

    // Financial Analyst response
    if (q.includes("financial") || q.includes("finance") || q.includes("excel") || q.includes("accounting") || q.includes("market")) {
        return `
            <p>A <strong>Financial Analyst</strong> performs valuation modeling and corporate statement review to guide investment decisions. 📈</p>
            <p>Overview of the path:</p>
            <ul>
                <li><strong>Crucial Skills:</strong> Mastery of Microsoft Excel (pivot tables, complex valuation shortcuts), reading income/balance statement linkages, and building 3-statement corporate models.</li>
                <li><strong>Stress Level:</strong> Can be very high around quarterly reports, with long corporate office hours typical.</li>
                <li><strong>Market Salary:</strong> Average is <strong>$96,000</strong> with a stable growth outlook (+9%).</li>
            </ul>
            <p>You can begin with the free courses from the <strong>Corporate Finance Institute (CFI)</strong> listed in our resources hub to build core statement balance competencies.</p>
        `;
    }

    // Salary comparisons
    if (q.includes("salary") || q.includes("pay") || q.includes("make") || q.includes("income") || q.includes("earn")) {
        return `
            <p>Here is a summary of the average salaries in our database to help you compare:</p>
            <ol>
                <li><strong>Data Scientist:</strong> $120,000 / year</li>
                <li><strong>Software Engineer (Frontend):</strong> $105,000 / year</li>
                <li><strong>Financial Analyst:</strong> $96,000 / year</li>
                <li><strong>UX/UI Designer:</strong> $92,000 / year</li>
                <li><strong>Healthcare Informatics Analyst:</strong> $88,000 / year</li>
                <li><strong>Digital Marketing Manager:</strong> $85,000 / year</li>
            </ol>
            <p>You can use the <strong>Compare Careers</strong> tab to inspect salaries, required education, and growth side-by-side!</p>
        `;
    }

    // Remote queries
    if (q.includes("remote") || q.includes("home") || q.includes("anywhere")) {
        return `
            <p>Several careers in our database are highly remote-friendly: 🏠</p>
            <ul>
                <li><strong>Software Engineer (Frontend Focus):</strong> Most tech companies hire remote engineers.</li>
                <li><strong>UX/UI Designer:</strong> Relies on cloud tools like Figma, which makes remote collaboration seamless.</li>
                <li><strong>Digital Marketing Manager:</strong> Ad dashboards and email hubs are accessed entirely in web browsers.</li>
            </ul>
            <p>On the other hand, fields like **Financial Analyst** and **Healthcare Informatics Analyst** often demand in-person office or hospital lab attendance.</p>
        `;
    }

    // General fallback advice response
    return `
        <p>That is an interesting question! To give you the best advice, I suggest completing our <strong>Career Interest Assessment</strong> first. 📋</p>
        <p>Once completed, I can tell you:</p>
        <ul>
            <li>Which paths score a 90%+ match with your profile.</li>
            <li>What skills you currently lack for that specific path.</li>
            <li>Step-by-step learning stages to bridge that gap.</li>
        </ul>
        <p>Let me know if you would like me to explain how any of our specific profiles (like Software Engineering or UX Design) are structured!</p>
    `;
}

function getCurrentTimeString() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 12 instead of 0
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
}

function escapeHTML(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function scrollChatToBottom() {
    const container = document.getElementById("chat-messages-container");
    if (container) {
        container.scrollTop = container.scrollHeight;
    }
}

// --- 15. SELECTORS & EVENTS REGISTRATION ---
function setupSelectorsListeners() {
    // Roadmap select listener
    const roadmapSelector = document.getElementById("active-roadmap-selector");
    roadmapSelector.addEventListener("change", (e) => {
        const value = e.target.value;
        if (value) {
            setActiveTargetCareer(value);
            renderRoadmapView();
        }
    });

    // Gap target selector listener
    const gapSelector = document.getElementById("gap-target-selector");
    const analyzeBtn = document.getElementById("btn-analyze-gap");
    
    analyzeBtn.addEventListener("click", () => {
        calculateGaps();
    });

    // Comparison selectors listeners
    document.getElementById("compare-career-1").addEventListener("change", calculateComparison);
    document.getElementById("compare-career-2").addEventListener("change", calculateComparison);

    // Resource Filter tabs click listeners
    document.querySelectorAll(".resource-filter-tabs .res-tab").forEach(tab => {
        tab.addEventListener("click", (e) => {
            document.querySelectorAll(".resource-filter-tabs .res-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            const activeCareerId = appState.activeTargetCareerId;
            if (activeCareerId && CAREER_DATABASE[activeCareerId]) {
                renderRoadmapResources(CAREER_DATABASE[activeCareerId].resources);
            }
        });
    });

    // Portfolio live-update listeners
    setupPortfolioListeners();

    // Quiz modal listeners
    setupQuizListeners();
}

// ==========================================================================
// --- 16. PORTFOLIO BUILDER MODULE ---
// ==========================================================================

const QUIZ_BANK = {
    "HTML": [
        { q: "What does the `<semantics>` element convey?", opts: ["Page styling", "Meaning and structure of content", "Inline script blocks", "Media embedding"], ans: 1 },
        { q: "Which HTML tag defines the largest heading?", opts: ["<h6>", "<head>", "<h1>", "<header>"], ans: 2 },
        { q: "The `alt` attribute on `<img>` is for:", opts: ["Image size", "Tooltip on hover", "Accessibility text description", "Border styling"], ans: 2 }
    ],
    "CSS": [
        { q: "Which property places flex children side by side?", opts: ["display: block", "display: flex", "display: inline", "position: relative"], ans: 1 },
        { q: "What does `z-index` control?", opts: ["Font size", "Layer stacking order", "Grid column span", "Margin spacing"], ans: 1 },
        { q: "`border-radius: 50%` on a square makes it:", opts: ["A triangle", "A hexagon", "A circle", "A star"], ans: 2 }
    ],
    "JavaScript": [
        { q: "Which keyword declares a block-scoped variable?", opts: ["var", "global", "let", "fn"], ans: 2 },
        { q: "`Array.map()` returns:", opts: ["Nothing", "A modified original array", "A new transformed array", "A boolean"], ans: 2 },
        { q: "What is the output of `typeof null`?", opts: ['"null"', '"undefined"', '"object"', '"boolean"'], ans: 2 }
    ],
    "Python": [
        { q: "Which function prints to console in Python?", opts: ["console.log()", "echo()", "print()", "write()"], ans: 2 },
        { q: "What is a Python list comprehension?", opts: ["A type annotation", "A concise way to create lists", "An import statement", "A class decorator"], ans: 1 },
        { q: "Python indentation defines:", opts: ["Variable scope only", "Code blocks / structure", "String literals", "Class attributes"], ans: 1 }
    ],
    "SQL": [
        { q: "Which clause filters rows after aggregation?", opts: ["WHERE", "FROM", "HAVING", "ORDER BY"], ans: 2 },
        { q: "A `JOIN` combines rows from:", opts: ["One table only", "Two or more tables", "Views only", "Stored procedures"], ans: 1 },
        { q: "What does `SELECT DISTINCT` do?", opts: ["Picks random rows", "Returns unique values", "Sorts ascending", "Skips NULL rows"], ans: 1 }
    ],
    "Figma": [
        { q: "What are Figma Components?", opts: ["External plugins", "Reusable design elements", "Color themes", "Export formats"], ans: 1 },
        { q: "Auto Layout in Figma helps with:", opts: ["Exporting SVG", "Responsive resizing of elements", "Font licensing", "Prototype transitions"], ans: 1 },
        { q: "Figma Variants allow you to:", opts: ["Link multiple pages", "Group component states in one set", "Publish to npm", "Create animations only"], ans: 1 }
    ],
    "Git": [
        { q: "What does `git commit -m 'msg'` do?", opts: ["Deletes files", "Saves a snapshot of staged changes", "Pushes to remote", "Merges branches"], ans: 1 },
        { q: "`git clone` is used to:", opts: ["Remove a repository", "Copy a remote repo locally", "Switch branches", "Revert changes"], ans: 1 },
        { q: "A `pull request` in GitHub means:", opts: ["Downloading code", "Requesting a code review to merge a branch", "Cloning a fork", "Deleting a branch"], ans: 1 }
    ],
    "default": [
        { q: "Learning new skills requires:", opts: ["Only reading books", "Consistent practice and projects", "Watching tutorials only", "Memorizing theory"], ans: 1 },
        { q: "A growth mindset believes:", opts: ["Talent is fixed at birth", "Effort leads to improvement", "Only gifted people can learn", "Failure is permanent"], ans: 1 },
        { q: "What helps most when studying a new skill?", opts: ["Passive reading only", "Attempting hands-on projects", "Watching without doing", "Copying code without understanding"], ans: 1 }
    ]
};

let activeQuizSkill = null;
let verifiedSkills = [];

function renderPortfolioView() {
    // Hydrate fields from state
    const user = appState.userProfile;
    const targetCareerId = appState.activeTargetCareerId;

    // Name/email/bio real-time update
    const nameEl = document.getElementById("pf-name");
    const emailEl = document.getElementById("pf-email");
    const bioEl = document.getElementById("pf-bio");
    
    // Resume preview update
    updateResumePreview();

    // Render skills section with verify buttons
    const skillsPreviewGrid = document.getElementById("resume-preview-skills");
    skillsPreviewGrid.innerHTML = "";
    
    const allSkills = user.skills || [];
    
    if (allSkills.length === 0) {
        skillsPreviewGrid.innerHTML = `<p class="text-muted" style="font-size:0.82rem;">No skills selected yet. Go to Assessment Step 2 to pick your skills.</p>`;
    } else {
        allSkills.forEach(skill => {
            const isVerified = verifiedSkills.includes(skill);
            const tag = document.createElement("span");
            tag.className = "resume-skill-tag";
            tag.style.display = "inline-flex";
            tag.style.alignItems = "center";
            tag.style.gap = "4px";
            tag.innerHTML = isVerified
                ? `<i data-lucide="check-circle" style="width:12px;height:12px;color:var(--text-success);"></i> ${skill}`
                : `${skill} <button class="btn-verify-skill" onclick="openSkillQuiz('${skill}')"><i data-lucide="zap" style="width:10px;height:10px;"></i> Verify</button>`;
            skillsPreviewGrid.appendChild(tag);
        });
    }

    // Render completed milestones
    const milestonesEl = document.getElementById("resume-preview-milestones");
    milestonesEl.innerHTML = "";
    
    if (targetCareerId && CAREER_DATABASE[targetCareerId]) {
        const career = CAREER_DATABASE[targetCareerId];
        const progress = appState.roadmapProgress[targetCareerId] || {};
        let hasAny = false;

        career.milestones.forEach(milestone => {
            const allDone = milestone.tasks.every(t => progress[t.id] === true);
            if (allDone) {
                const li = document.createElement("li");
                li.className = "resume-milestone-item";
                li.innerHTML = `<i data-lucide="check-circle"></i> <span>${milestone.title}</span>`;
                milestonesEl.appendChild(li);
                hasAny = true;
            }
        });

        if (!hasAny) {
            milestonesEl.innerHTML = `<li class="resume-milestone-item"><span class="text-muted">No milestones completed yet — check off tasks in the Roadmap tab.</span></li>`;
        }
    } else {
        milestonesEl.innerHTML = `<li class="resume-milestone-item"><span class="text-muted">Set a target career to display completed milestones.</span></li>`;
    }

    lucide.createIcons();
}

function updateResumePreview() {
    const nameVal = document.getElementById("pf-name")?.value || "Student Developer";
    const emailVal = document.getElementById("pf-email")?.value || "student@skillbridge.edu";
    const bioVal = document.getElementById("pf-bio")?.value || "Motivated student.";
    const targetCareerId = appState.activeTargetCareerId;

    document.getElementById("resume-preview-name").textContent = nameVal;
    document.getElementById("resume-preview-email").textContent = emailVal;
    document.getElementById("resume-preview-bio").textContent = bioVal;
    document.getElementById("resume-preview-target").textContent = 
        (targetCareerId && CAREER_DATABASE[targetCareerId]) ? CAREER_DATABASE[targetCareerId].name : "None Selected";
    document.getElementById("sidebar-target-career").textContent =
        (targetCareerId && CAREER_DATABASE[targetCareerId]) ? CAREER_DATABASE[targetCareerId].name : "None Selected";
}

function setupPortfolioListeners() {
    const nameInput = document.getElementById("pf-name");
    const emailInput = document.getElementById("pf-email");
    const bioInput = document.getElementById("pf-bio");
    const exportBtn = document.getElementById("btn-export-portfolio");

    [nameInput, emailInput, bioInput].forEach(el => {
        el?.addEventListener("input", () => {
            updateResumePreview();
        });
    });

    exportBtn?.addEventListener("click", () => {
        exportResumeAsMarkdown();
    });
}

function exportResumeAsMarkdown() {
    const name = document.getElementById("pf-name")?.value || "Student";
    const email = document.getElementById("pf-email")?.value || "";
    const bio = document.getElementById("pf-bio")?.value || "";
    const skills = appState.userProfile.skills || [];
    const targetId = appState.activeTargetCareerId;
    const targetName = (targetId && CAREER_DATABASE[targetId]) ? CAREER_DATABASE[targetId].name : "Not set";
    const progress = appState.roadmapProgress[targetId] || {};

    let completedMilestones = [];
    if (targetId && CAREER_DATABASE[targetId]) {
        CAREER_DATABASE[targetId].milestones.forEach(m => {
            if (m.tasks.every(t => progress[t.id] === true)) {
                completedMilestones.push(m.title);
            }
        });
    }

    const verifiedBadge = (s) => verifiedSkills.includes(s) ? " ✅" : "";

    const md = `# ${name}
📧 ${email}

## Target Career
${targetName}

## Professional Summary
${bio}

## Skills
${skills.map(s => `- ${s}${verifiedBadge(s)}`).join("\n") || "None listed."}

## Completed Milestones
${completedMilestones.length > 0 ? completedMilestones.map(m => `- ✔ ${m}`).join("\n") : "No milestones completed yet."}

---
*Generated by SkillBridge AI — Skill → Career Mapper*
`;

    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${name.replace(/\s+/g, "_")}_SkillBridge_Resume.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ==========================================================================
// --- 17. SKILL VERIFICATION QUIZ MODULE ---
// ==========================================================================

function openSkillQuiz(skillName) {
    activeQuizSkill = skillName;
    const modal = document.getElementById("quiz-modal");
    const titleEl = document.getElementById("quiz-title");
    const body = document.getElementById("quiz-questions-body");

    titleEl.textContent = `Verify Skill: ${skillName}`;
    body.innerHTML = "";

    const questions = QUIZ_BANK[skillName] || QUIZ_BANK["default"];

    questions.forEach((qObj, qIdx) => {
        const block = document.createElement("div");
        block.className = "quiz-q-block";
        block.innerHTML = `<p class="quiz-q-text">Q${qIdx + 1}: ${qObj.q}</p>
            <div class="quiz-options-list">
                ${qObj.opts.map((opt, oIdx) => `
                    <label class="quiz-option-label" id="quiz-opt-${qIdx}-${oIdx}">
                        <input type="radio" name="quiz-q-${qIdx}" value="${oIdx}">
                        ${opt}
                    </label>
                `).join("")}
            </div>`;
        body.appendChild(block);
    });

    // Highlight selection on radio change
    body.querySelectorAll("input[type='radio']").forEach(radio => {
        radio.addEventListener("change", () => {
            const qName = radio.getAttribute("name");
            body.querySelectorAll(`[name="${qName}"]`).forEach(r => {
                r.closest(".quiz-option-label").classList.remove("selected-opt");
            });
            radio.closest(".quiz-option-label").classList.add("selected-opt");
        });
    });

    modal.classList.remove("hidden");
    lucide.createIcons();
}

function setupQuizListeners() {
    const modal = document.getElementById("quiz-modal");
    document.getElementById("btn-close-quiz")?.addEventListener("click", () => modal.classList.add("hidden"));
    document.getElementById("btn-cancel-quiz")?.addEventListener("click", () => modal.classList.add("hidden"));

    document.getElementById("btn-submit-quiz")?.addEventListener("click", () => {
        const body = document.getElementById("quiz-questions-body");
        const questions = QUIZ_BANK[activeQuizSkill] || QUIZ_BANK["default"];
        
        let allAnswered = true;
        let correctCount = 0;

        questions.forEach((qObj, qIdx) => {
            const selected = body.querySelector(`input[name="quiz-q-${qIdx}"]:checked`);
            if (!selected) {
                allAnswered = false;
            } else if (parseInt(selected.value) === qObj.ans) {
                correctCount++;
            }
        });

        if (!allAnswered) {
            alert("Please answer all questions before submitting.");
            return;
        }

        const passThreshold = Math.ceil(questions.length * 0.67); // 67% to pass
        modal.classList.add("hidden");

        if (correctCount >= passThreshold) {
            // Mark as verified
            if (!verifiedSkills.includes(activeQuizSkill)) {
                verifiedSkills.push(activeQuizSkill);
            }
            showToast(`🎉 ${activeQuizSkill} verified! Added badge to your portfolio.`, "success");
            renderPortfolioView();
        } else {
            showToast(`❌ ${correctCount}/${questions.length} correct. Need ${passThreshold} to pass. Try again!`, "error");
        }
    });
}

// ==========================================================================
// --- 18. TOAST NOTIFICATION SYSTEM ---
// ==========================================================================

function showToast(message, type = "success") {
    // Remove existing toasts
    document.querySelectorAll(".skillbridge-toast").forEach(t => t.remove());

    const toast = document.createElement("div");
    toast.className = "skillbridge-toast";
    toast.style.cssText = `
        position: fixed;
        bottom: 32px;
        right: 32px;
        z-index: 9999;
        background: ${type === "success" ? "rgba(16, 185, 129, 0.12)" : "rgba(248, 113, 113, 0.12)"};
        border: 1px solid ${type === "success" ? "rgba(52, 211, 153, 0.3)" : "rgba(248, 113, 113, 0.3)"};
        color: ${type === "success" ? "var(--text-success)" : "var(--text-error)"};
        padding: 14px 20px;
        border-radius: 12px;
        font-family: var(--font-primary);
        font-size: 0.88rem;
        font-weight: 600;
        backdrop-filter: blur(12px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        max-width: 360px;
        animation: fade-in 0.3s ease-out;
        cursor: pointer;
    `;
    toast.textContent = message;
    toast.addEventListener("click", () => toast.remove());
    document.body.appendChild(toast);

    // Auto-remove after 4 seconds
    setTimeout(() => toast.remove(), 4000);
}

// ==========================================================================
// --- 19. LIVE DASHBOARD STATS TICKER ---
// ==========================================================================

function startLiveStatsTicker() {
    // Animate stats "counting up" on first load
    const elements = [
        { id: "dash-skills-count", target: () => `${(appState.userProfile.skills || []).length} Skills` },
        { id: "dash-assessment-status", target: () => appState.userProfile.assessmentCompleted ? "Completed" : "Not Started" }
    ];

    elements.forEach(({ id, target }) => {
        const el = document.getElementById(id);
        if (el) {
            el.style.transition = "opacity 0.3s ease";
            el.style.opacity = "0";
            setTimeout(() => {
                el.textContent = target();
                el.style.opacity = "1";
            }, 200);
        }
    });
}

