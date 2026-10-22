const projects = window.portfolioProjects;

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
        name: "TYPESCRIPT",
        class: "fa-brands fa-typescript",
      },
      {
        name: "TWIG",
        class: "fa-solid fa-leaf",
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
        name: "API",
        class: "fa-solid fa-gear",
      },
    ],
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
        name: "GITLAB",
        class: "fa-brands fa-gitlab",
      },
      {
        name: "STORYBOOK",
        class: "fa-brands fa-storybook"
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
        name: "TYPO3",
        class: "fa-brands fa-typo3",
      },
      {
        name: "JIRA",
        class: "fa-brands fa-jira",
      },
      {
        name: "CONFLUENCE",
        class: "fa-brands fa-confluence",
      },
    ],
  },
  learning: {
    title: "Learning...",
    types: [
      {
        name: "COMPONENT-DRIVEN DEVELOPMENT",
        class: "fa-solid fa-cubes-stacked",
      },
    ],
  },
};

function displaySkill() {
  const skill = document.getElementById("my-skills");
  let skillHTML = `<div class="row">`;
  Object.values(skillsToolsLearning).forEach((mySkill) => {
    skillHTML =
      skillHTML +
      `
        <div class="col-lg-4 text-center"
             data-aos="fade-up"
             data-aos-duration="2000"
             data-aos-easing="ease-in-sine">
          <h2 class="mb-4">${mySkill.title}</h2>
        `;
    let typeArray = mySkill.types;
    typeArray.forEach((value) => {
      skillHTML =
        skillHTML + `<p><i class="${value.class}" aria-hidden="true"></i> ${value.name}</p>`;
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
        alt="Screenshot of ${myProject.alt}"
        class="img-fluid rounded mb-3"
        id="${myProject.id}"
        data-aos="${myProject["aos-fade"]}"
        data-aos-duration="2000"
        data-aos-easing="ease-in-sine"
    />
    <h2 class="text-center m-0">${myProject.name}</h2>
    <p class="text-center text-muted">
        Built with ${myProject["built-with"]}
    </p>
    <a
        href="${myProject.link}"
        class="btn btn-main"
        target="_blank"
        aria-label="Check it out: ${myProject.name}"
    >Check it out</a
    ><a
    href="${myProject.github}"
    class="btn btn-second github-project"
    target="_blank"
    aria-label="See code on GitHub for ${myProject.name}"
    >See code on GitHub</a
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
