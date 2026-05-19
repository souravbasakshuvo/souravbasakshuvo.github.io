// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-education",
          title: "Education",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/experience/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-training",
          title: "Training",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/training/";
          },
        },{id: "nav-certifications",
          title: "Certifications",
          description: "A collection of certifications earned through consistent effort and dedication to lifelong learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/certifications/";
          },
        },{id: "nav-eca",
          title: "ECA",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/eca/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum Vitae of Sourav Basak Shuvo — Biomedical Engineering researcher at KUET, Bangladesh.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-hobbies",
              title: "Hobbies",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/hobbies/";
              },
            },{id: "dropdown-blog",
              title: "Blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-contact",
              title: "Contact",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/contact/";
              },
            },{id: "news-graduated-with-a-b-sc-in-biomedical-engineering-from-khulna-university-of-engineering-amp-amp-technology-kuet-achieving-a-cgpa-of-3-77-4-00-ranked-4th-in-overall-merit",
          title: 'Graduated with a B.Sc. in Biomedical Engineering from Khulna University of Engineering &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-joined-ulster-university-londonderry-northern-ireland-uk-as-a-research-assistant-intern-under-the-supervision-of-dr-nazmul-siddique-working-on-cancer-detection-llms-and-domain-adaptation-for-medical-ai",
          title: 'Joined Ulster University, Londonderry, Northern Ireland, UK as a Research Assistant Intern under...',
          description: "",
          section: "News",},{id: "news-joined-the-bio-neural-intelligence-and-research-advancement-bnira-lab-kuet-as-a-researcher-working-on-ai-based-neuroengineering-and-biomedical-signal-processing",
          title: 'Joined the Bio-Neural Intelligence and Research Advancement (BNIRA) Lab, KUET as a Researcher,...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-exploring-gene-network-interactions-and-pathways-in-three-cancers-identifying-potential-therapeutic-targets-and-drug-candidates-at-the-1st-national-conference-of-research-industry-and-collaboration-in-biomedical-engineering-organized-by-the-department-of-biomedical-engineering-jashore-university-of-science-amp-amp-technology-jashore-bangladesh",
          title: 'Presented a poster on “Exploring Gene Network Interactions and Pathways in Three Cancers:...',
          description: "",
          section: "News",},{id: "news-published-as-2nd-author-transfusionnet-framework-for-cervical-cancer-detection-using-deep-learning-with-multi-level-fusion-in-the-prestigious-q1-journal-results-in-engineering-elsevier-with-a-citescore-of-7-3-and-an-impact-factor-of-7-9",
          title: 'Published as 2nd author — TransfusionNet: Framework for Cervical Cancer Detection using Deep...',
          description: "",
          section: "News",},{id: "news-our-research-paper-dl3m-a-vision-to-language-framework-for-expert-level-medical-reasoning-through-deep-learning-and-large-language-models-is-now-available-as-a-preprint-on-arxiv-introducing-a-new-vision-to-language-framework-for-advanced-medical-reasoning-currently-under-review-in-medical-image-analysis-elsevier",
          title: 'Our research paper, DL3M: A Vision-to-Language Framework for Expert-Level Medical Reasoning through Deep...',
          description: "",
          section: "News",},{id: "news-presented-our-research-paper-exploring-common-molecular-interactions-across-multiple-cancers-to-identify-potential-therapeutic-targets-and-drug-candidates-at-the-7th-international-conference-on-electrical-information-and-communication-technology-eict-2025-khulna-bangladesh-where-142-papers-were-selected-from-1-042-submissions-across-15-countries",
          title: 'Presented our research paper, “Exploring Common Molecular Interactions across Multiple Cancers to Identify...',
          description: "",
          section: "News",},{id: "news-started-my-m-sc-in-biomedical-physics-and-technology-at-the-university-of-dhaka-bangladesh-with-a-specialization-in-biomedical-engineering",
          title: 'Started my M.Sc. in Biomedical Physics and Technology at the University of Dhaka,...',
          description: "",
          section: "News",},{id: "projects-brain-tumor-segmentation-using-matlab",
          title: 'Brain Tumor Segmentation using MATLAB',
          description: "Segmentation of brain tumors from grayscale MRI images using morphological operations in MATLAB, as part of a Biomedical Image Processing lab project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brain-tumor-segmentation/";
            },},{id: "projects-iot-based-pilot-health-monitoring-system",
          title: 'IoT Based Pilot Health Monitoring System',
          description: "ESP8266 NodeMCU system monitoring pilot vitals and aircraft state via Blynk IoT, using MAX30100, DS18B20, and BMP180 sensors.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/iot-pilot-health-monitoring/";
            },},{id: "projects-line-follower-robot-with-pid-controller",
          title: 'Line Follower Robot with PID Controller',
          description: "An autonomous line-following robot using TCRT-5000 IR sensors and PID control, built on Arduino for robotics competitions and education.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/line-follower-robot/";
            },},{id: "projects-mediconnect-telemedicine-video-conferencing-app",
          title: 'MediConnect – Telemedicine Video Conferencing App',
          description: "A cross-platform telemedicine app enabling secure real-time video consultations, messaging, and medical data sharing between patients and healthcare professionals.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mediconnect/";
            },},{id: "projects-retinal-blood-vessel-segmentation",
          title: 'Retinal Blood Vessel Segmentation',
          description: "MATLAB-based retinal fundus image segmentation using the Principal Curvature Method, achieving 96.17% accuracy for early detection of diabetic retinopathy and glaucoma.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/retinal-blood-vessel-segmentation/";
            },},{id: "projects-sanitary-napkin-vending-machine",
          title: 'Sanitary Napkin Vending Machine',
          description: "RFID-enabled automated vending machine for menstrual hygiene products, 2nd Runner-Up at KUET Intra-University Innovation Competition 2022.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sanitary-napkin-vending-machine/";
            },},{id: "projects-telechroma-smart-colorimetric-analyzer",
          title: 'Telechroma: Smart Colorimetric Analyzer',
          description: "Portable Arduino-based colorimetric analyzer that quantifies biological analytes from urine samples via color sensing, with wireless Bluetooth transmission to a mobile app.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/telechroma/";
            },},{id: "projects-gallbladder-cancer-classification-using-parallel-transfer-learning-with-multi-model-feature-fusion-and-lstm",
          title: 'Gallbladder Cancer Classification using Parallel Transfer Learning with Multi-model Feature Fusion and LSTM...',
          description: "Hybrid parallel transfer learning + LSTM framework for gallbladder cancer classification, achieving 99.37% accuracy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/undergraduate-thesis/";
            },},{id: "projects-vitasync-a-smart-band-for-telemedicine-applications",
          title: 'VitaSync: A Smart Band for Telemedicine Applications',
          description: "Wearable smart band tracking heart rate, temperature, and SpO₂ with real-time mobile app and email alert mechanism for health irregularities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vitasync/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
