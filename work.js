const projects = [
  {
    name: "World Clock Project",
    img: "world-clock-home",
    alt: "world clock project",
    id: "world-clock-project",
    "built-with": "HTML, CSS and JavaScript",
    "aos-flip": "flip-right",
    github: "https://github.com/silviacremascoli/world-clock",
    link: "https://my-world-clock-app-silvia-cremascoli.netlify.app/",
  },
  {
    name: "Weather Project",
    img: "weather-home",
    alt: "weather project",
    id: "weather-project",
    "built-with": "HTML, CSS and React.js",
    "aos-flip": "flip-left",
    github: "https://github.com/silviacremascoli/react-weather-app",
    link: "https://react-weather-app-silvia-cremascoli.netlify.app/",
  },
  {
    name: "Travel Page Project",
    img: "travel-home",
    alt: "travel page project",
    id: "travel-page-project",
    "built-with": "HTML and CSS",
    "aos-flip": "flip-right",
    github: "https://github.com/silviacremascoli/travel-page-bali",
    link: "https://travel-page-bali-silvia-cremascoli.netlify.app/",
  },
  {
    name: "Dictionary Project",
    img: "dictionary-home",
    alt: "dictionary project",
    id: "dictionary-project",
    "built-with": "HTML, CSS and React.js",
    "aos-flip": "flip-left",
    github: "https://github.com/silviacremascoli/react-dictionary-app",
    link: "https://react-dictionary-silvia-cremascoli.netlify.app/",
  },
  {
    name: "Portfolio Project",
    img: "portfolio-home",
    alt: "portfolio project",
    id: "portfolio-project",
    "built-with": "HTML, CSS and Vue.js",
    "aos-flip": "flip-right",
    github: "https://github.com/silviacremascoli/nandor-bottyan-portfolio",
    link: "https://vue-js-personal-portfolio.netlify.app/",
  },
  {
    name: "Restaurant Project",
    img: "restaurant-home",
    alt: "restaurant project",
    id: "restaurant-project",
    "built-with": "HTML, CSS and PHP",
    "aos-flip": "flip-left",
    github: "https://github.com/silviacremascoli/restaurant_dynamic_website",
    link: "http://restaurantfrank.byethost32.com/",
  },
];

const skillsToolsLearning = {
  skills: {
    title: "My Skills",
    types: [
      {
      name: "HTML",
      class: "fa-brands fa-html5",
      },
      {
        name: "CSS",
        class: "fa-brands fa-css3-alt",
      },
      {
        name: "SASS",
        class: "fa-brands fa-sass",
      },
      {
        name: "BOOTSTRAP",
        class: "fa-brands fa-bootstrap",
      },
      {
        name: "JAVASCRIPT",
        class: "fa-brands fa-square-js",
      },
      {
        name: "API",
        class: "fa-solid fa-gear",
      },
      {
        name: "REACT.JS",
        class: "fa-brands fa-react",
      },
      {
        name: "VUE.JS",
        class: "fa-brands fa-vuejs",
      },
      {
        name: "PHP",
        class: "fa-brands fa-php",
      }
    ]
  },
  tools: {
      title: "My Tools",
      types: [
      {
        name: "VISUAL STUDIO CODE",
        class: "fa-solid fa-code",
      },
      {
        name: "PHPSTORM",
        class: "fa-solid fa-laptop-code",
      },
      {
        name: "GITHUB",
        class: "fa-brands fa-github",
      },
      {
        name: "FIGMA",
        class: "fa-brands fa-figma",
      },
      {
        name: "CANVA",
        class: "fa-solid fa-pencil",
      },
      {
        name: "WORDPRESS",
        class: "fa-brands fa-wordpress",
      },
      {
        name: "JIRA",
        class: "fa-brands fa-jira",
      },
      {
        name: "CONFLUENCE",
        class: "fa-brands fa-confluence",
      }
    ]
  },
  learning: {
    title: "Learning...",
    types: [
      {
        name: "UNIT TESTING",
        class: "fa-solid fa-wrench",
      },
      {
        name: "TYPESCRIPT",
        class: "fa-brands fa-windows",
      },
      {
        name: "NEXT.JS",
        class: "fa-brands fa-react",
      },
    ]
  }
}


function displaySkill() {
  const skill = document.getElementById("my-skills");
  let skillHTML = `<div class="row">`;
  Object.values(skillsToolsLearning).forEach((mySkill) => {
    skillHTML = skillHTML +
        `
        <div class="col-lg-4 text-center"
             data-aos="fade-up"
             data-aos-duration="2000"
             data-aos-easing="ease-in-sine">
          <h2 class="mb-4">${mySkill.title}</h2>
        `;
    let typeArray = mySkill.types;
    typeArray.forEach((value) => {
      skillHTML = skillHTML +
          `<p><i class="${value.class}"></i> ${value.name}</p>`;
    });
    skillHTML = skillHTML + `</div>`;
    skill.innerHTML = skillHTML;
  });
  AOS.init();
}

function displayProject() {
  const project = document.getElementById("project");

  let projectHTML = `<div class="row">`;
  projects.forEach((myProject) => {
    projectHTML =
      projectHTML +
      `
    <div class="col-md-6 mb-5">
    <img
        src="/images/${myProject.img}.png"
        alt="${myProject.alt}"
        class="img-fluid rounded mb-3"
        id="${myProject.id}"
        data-aos="${myProject["aos-flip"]}"
        data-aos-duration="2000"
        data-aos-easing="ease-in-sine"
    />
    <h3 class="text-center m-0">${myProject.name}</h3>
    <p class="text-center text-muted">
        Built with ${myProject["built-with"]}
    </p>
    <a
        href="${myProject.link}"
        class="btn btn-main"
        target="_blank"
        title="World clock app"
    >Check it out</a
    ><a
    href="${myProject.github}"
    class="btn btn-second github-project"
    target="_blank"
    title="World clock repository"
    >See code in GitHub</a
    >
    </div>
    `;
  });
  projectHTML = projectHTML + `</div>`;
  project.innerHTML = projectHTML;
  AOS.init();
}

displayProject();
displaySkill();
