
const translations = {
  en: {
    navWork: "Selected Work",
    navAbout: "About",
    navServices: "Services",
    navContact: "Contact",
    navCta: "Let's talk ↗",
    heroEyebrow: "INDEPENDENT WEB DESIGNER & DEVELOPER",
    heroTitle: "Thoughtful websites.<br><em>Meaningful impact.</em>",
    heroDescription: "I design and build considered digital experiences for brands ready to make their mark.",
    heroLink: "Explore my work",
    heroNote: "AVAILABLE FOR SELECT PROJECTS",
    workEyebrow: "A FEW SELECTED PROJECTS",
    workTitle: "Selected work<span>.</span>",
    workDescription: "Three concepts. Three different worlds.",
    atelierDescription: "Fashion &amp; visual identity",
    ironvaultDescription: "Fitness &amp; performance",
    aurelleDescription: "Skincare &amp; e-commerce concept",
    sourceCode: "Source code ↗",
    aboutEyebrow: "A LITTLE ABOUT ME",
    aboutTitle: "Good design is more than how it looks.",
    aboutDescription: "I'm Tommy Julio, a web designer and developer focused on creating clear, responsive, and memorable digital experiences. I combine visual thinking with front-end development to bring ideas to life.",
    servicesEyebrow: "WHAT I CAN HELP WITH",
    servicesTitle: "From idea to online.",
    serviceOne: "Landing pages",
    serviceOneDescription: "Focused pages designed to introduce your offer and encourage action.",
    serviceTwo: "Business websites",
    serviceTwoDescription: "Professional websites that help your business build trust online.",
    serviceThree: "Responsive web design",
    serviceThreeDescription: "Thoughtful experiences that adapt to phones, tablets, and desktops.",
    contactEyebrow: "HAVE A PROJECT IN MIND?",
    contactTitle: "Let's make something<br><em>worth remembering.</em>",
    footerText: "Independent designer &amp; developer."
  },
  fr: {
    navWork: "Projets",
    navAbout: "À propos",
    navServices: "Services",
    navContact: "Contact",
    navCta: "Parlons de votre projet ↗",
    heroEyebrow: "DESIGNER WEB & DÉVELOPPEUR INDÉPENDANT",
    heroTitle: "Des sites réfléchis.<br><em>Un impact durable.</em>",
    heroDescription: "Je conçois et développe des expériences numériques soignées pour les marques qui souhaitent se démarquer.",
    heroLink: "Découvrir mes projets",
    heroNote: "DISPONIBLE POUR CERTAINS PROJETS",
    workEyebrow: "UNE SÉLECTION DE PROJETS",
    workTitle: "Projets sélectionnés<span>.</span>",
    workDescription: "Trois concepts. Trois univers différents.",
    atelierDescription: "Mode &amp; identité visuelle",
    ironvaultDescription: "Fitness &amp; performance",
    aurelleDescription: "Soin de la peau &amp; concept e-commerce",
    sourceCode: "Code source ↗",
    aboutEyebrow: "QUELQUES MOTS SUR MOI",
    aboutTitle: "Le bon design ne se limite pas à l'apparence.",
    aboutDescription: "Je suis Tommy Julio, designer web et développeur. Je crée des expériences numériques claires, adaptatives et mémorables, en associant sens visuel et développement front-end pour concrétiser des idées.",
    servicesEyebrow: "COMMENT JE PEUX VOUS AIDER",
    servicesTitle: "De l'idée au web.",
    serviceOne: "Pages d'atterrissage",
    serviceOneDescription: "Des pages ciblées pour présenter votre offre et inciter à l'action.",
    serviceTwo: "Sites web professionnels",
    serviceTwoDescription: "Des sites qui renforcent la crédibilité et la présence en ligne de votre activité.",
    serviceThree: "Design web adaptatif",
    serviceThreeDescription: "Des expériences adaptées aux téléphones, tablettes et ordinateurs.",
    contactEyebrow: "UN PROJET EN TÊTE ?",
    contactTitle: "Créons quelque chose<br><em>qui marque les esprits.</em>",
    footerText: "Designer et développeur indépendant."
  }
};

const languageToggle = document.querySelector("#language-toggle");
const currentYear = document.querySelector("#current-year");

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";

  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translations[selectedLanguage][key];

    if (translation !== undefined) {
      element.innerHTML = translation;
    }
  });

  if (languageToggle) {
    languageToggle.textContent = selectedLanguage === "en" ? "FR" : "EN";
    languageToggle.setAttribute(
      "aria-label",
      selectedLanguage === "en" ? "Passer en français" : "Switch to English"
    );
    languageToggle.setAttribute(
      "aria-pressed",
      String(selectedLanguage === "fr")
    );
  }

  try {
    localStorage.setItem("portfolio-language", selectedLanguage);
  } catch {
    // The site still works if browser storage is unavailable.
  }
}

function getInitialLanguage() {
  try {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
  } catch {
    // Use English when browser storage is unavailable.
  }

  return "en";
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage =
      document.documentElement.lang === "en" ? "fr" : "en";

    setLanguage(nextLanguage);
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

setLanguage(getInitialLanguage());
