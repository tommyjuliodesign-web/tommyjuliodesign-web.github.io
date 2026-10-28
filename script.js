
const translations = {
  en: {
    navWork: "Selected Work",
    navAbout: "About",
    navServices: "Services",
    navContact: "Contact",
    navCta: "Start a project ↗",
    heroEyebrow: "INDEPENDENT WEB DESIGNER & DEVELOPER",
    heroTitle: "Websites that look sharp.<br><em>Work smoothly. And make the next step clear.</em>",
    heroDescription: "I design and build clean, responsive websites for founders, creators, and small businesses that want a strong online presence.",
    heroLink: "View selected work",
    heroNote: "Available for select projects",
    workEyebrow: "SELECTED WORK",
    workTitle: "Three concepts. Three different directions<span>.</span>",
    atelierDescription: "Fashion &amp; visual identity",
    ironvaultDescription: "Fitness &amp; performance",
    aurelleDescription: "Skincare &amp; e-commerce concept",
    viewProject: "View project ↗",
    aboutEyebrow: "A LITTLE ABOUT ME",
    aboutTitle: "Good design does more than look good.",
    aboutDescription: "I’m Tommy Julio, an independent web designer and developer. I create clear, responsive websites that help businesses present their offer with confidence.",
    aboutDescription2: "I handle both the visual side and the front-end build, so your idea can move from concept to a working website without getting lost in translation.",
    servicesEyebrow: "WHAT I CAN HELP WITH",
    servicesTitle: "From idea to online.",
    serviceOne: "Landing pages",
    serviceOneDescription: "Focused pages that present one offer clearly and guide visitors toward one action.",
    serviceTwo: "Business websites",
    serviceTwoDescription: "Professional websites that help your business look credible, explain its services, and make contact easy.",
    serviceThree: "Responsive web design",
    serviceThreeDescription: "Websites designed to work well on phones, tablets, and desktops.",
    contactEyebrow: "HAVE A PROJECT IN MIND?",
    contactTitle: "Let’s build a website<br><em>that supports your next step.</em>",
    contactLead: "Email me at",
    contactNote: "Tell me about your project, timeline, and what you want the website to achieve.",
    footerText: "Independent designer &amp; developer."
  },
  fr: {
    navWork: "Projets",
    navAbout: "À propos",
    navServices: "Services",
    navContact: "Contact",
    navCta: "Démarrer un projet ↗",
    heroEyebrow: "DESIGNER WEB & DÉVELOPPEUR INDÉPENDANT",
    heroTitle: "Des sites soignés.<br><em>Fluides. Et pensés pour donner une direction claire.</em>",
    heroDescription: "Je conçois et développe des sites web clairs et adaptatifs pour les fondateurs, créateurs et petites entreprises qui veulent une présence en ligne solide.",
    heroLink: "Voir mes projets",
    heroNote: "Disponible pour certains projets",
    workEyebrow: "PROJETS SÉLECTIONNÉS",
    workTitle: "Trois concepts. Trois directions différentes<span>.</span>",
    atelierDescription: "Mode &amp; identité visuelle",
    ironvaultDescription: "Fitness &amp; performance",
    aurelleDescription: "Soin de la peau &amp; concept e-commerce",
    viewProject: "Voir le projet ↗",
    aboutEyebrow: "QUELQUES MOTS SUR MOI",
    aboutTitle: "Un bon design fait plus que bien paraître.",
    aboutDescription: "Je suis Tommy Julio, designer web et développeur indépendant. Je crée des sites clairs et adaptatifs qui aident les entreprises à présenter leur offre avec confiance.",
    aboutDescription2: "Je m’occupe à la fois du design et du développement front-end, pour faire passer votre idée du concept à un site fonctionnel.",
    servicesEyebrow: "COMMENT JE PEUX VOUS AIDER",
    servicesTitle: "De l’idée au web.",
    serviceOne: "Pages d’atterrissage",
    serviceOneDescription: "Des pages ciblées qui présentent une offre clairement et guident le visiteur vers une action précise.",
    serviceTwo: "Sites web professionnels",
    serviceTwoDescription: "Des sites qui donnent de la crédibilité à votre activité, expliquent vos services et facilitent le contact.",
    serviceThree: "Design web adaptatif",
    serviceThreeDescription: "Des sites conçus pour bien fonctionner sur mobile, tablette et ordinateur.",
    contactEyebrow: "UN PROJET EN TÊTE ?",
    contactTitle: "Créons un site<br><em>qui soutient votre prochaine étape.</em>",
    contactLead: "Écrivez-moi à",
    contactNote: "Parlez-moi de votre projet, de votre échéance et de ce que vous voulez que votre site accomplisse.",
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
