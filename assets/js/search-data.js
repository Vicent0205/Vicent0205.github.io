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
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected papers in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae of Junteng Liu.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-joined-hkust-nlp-group-as-a-ph-d-student-advised-by-prof-junxian-he",
          title: 'Joined HKUST NLP Group as a Ph.D. student advised by Prof. Junxian He....',
          description: "",
          section: "News",},{id: "news-our-paper-on-the-universal-truthfulness-hyperplane-inside-llms-was-presented-at-emnlp-2024",
          title: 'Our paper On the Universal Truthfulness Hyperplane Inside LLMs was presented at EMNLP...',
          description: "",
          section: "News",},{id: "news-our-paper-on-the-perception-bottleneck-of-vlms-for-chart-understanding-was-accepted-to-emnlp-2025-findings",
          title: 'Our paper On the Perception Bottleneck of VLMs for Chart Understanding was accepted...',
          description: "",
          section: "News",},{id: "news-synlogic-was-accepted-to-neurips-2025",
          title: 'SynLogic was accepted to NeurIPS 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-webexplorer-was-released-on-arxiv-for-long-horizon-web-agent-training",
          title: 'Our paper WebExplorer was released on arXiv for long-horizon web-agent training.',
          description: "",
          section: "News",},{id: "projects-webexplorer",
          title: 'WebExplorer',
          description: "Explore-and-evolve training for long-horizon web agents.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-synlogic",
          title: 'SynLogic',
          description: "Large-scale synthesis of verifiable reasoning data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-vision4chart",
          title: 'Vision4Chart',
          description: "Understanding the perception bottleneck in chart-focused VLM tasks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-truthfulness-hyperplane",
          title: 'Truthfulness Hyperplane',
          description: "Internal representation perspective on universal truthfulness in LLMs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:jliugi@connect.ust.hk", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=tbK9jl4AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Vicent0205", "_blank");
        },
      },{
        id: 'social-twitter_username',
        title: 'Twitter_username',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
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
