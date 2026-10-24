import "./shared.js";
import "./projects.js";
import AOS from "aos";

const languages = [
    {
        class: "fa-brands fa-storybook",
        title: "Storybook",
        AOS: 1000
    },
    {
        class: "fa-solid fa-leaf",
        title: "Twig Templates",
        AOS: 1600
    },
    {
        class: "fa-brands fa-typescript",
        title: "TypeScript",
        AOS: 1600
    },
    {
        class: "fa-brands fa-react",
        title: "React.js",
        AOS: 1800
    },
    {
        class: "fa-brands fa-vuejs",
        title: "Vue.js",
        AOS: 2000
    },
    {
        class: "fa-brands fa-typo3",
        title: "TYPO3",
        AOS: 2200
    },
]

function displayLanguage() {
    const language = document.getElementById("languages");
    let languageHTML = `<div>`;
    languages.forEach((value) => {
        languageHTML = languageHTML +
            `<i
                class="${value.class}"
                role="img"
                aria-label="${value.title}"
                title="${value.title}"
                data-aos="zoom-in"
                data-aos-duration="${value.AOS}"
                data-aos-easing="ease-in-sine"
            ></i>`;
    });
    languageHTML = languageHTML + `</div>`;
    language.innerHTML = languageHTML;
    AOS.init();
}

function displayFeaturedProjects() {
    const container = document.getElementById("featured-projects");
    if (!container) return;

    const featuredProjects = window.portfolioProjects.filter(
        (project) => project.homeDescription
    );

    container.innerHTML = featuredProjects.map((project, index) => {
        const imageOnLeft = index % 2 === 0;
        const imageColumn = `
            <div
                class="col d-none d-lg-block"
                data-aos="${imageOnLeft ? "fade-right" : "fade-left"}"
                data-aos-duration="1500"
                data-aos-easing="ease-in-sine"
            >
                <img src="/assets/images/${project.img}.png" alt="${project.homeAlt}" class="img-fluid rounded" />
            </div>`;
        const titleId = project.homeTitleId ? ` id="${project.homeTitleId}"` : "";
        const titleStatus = project.homeStatus
            ? `<span class="mt-3">(${project.homeStatus})</span>`
            : "";
        const descriptionColumn = `
            <div class="col">
                <div class="project-description">
                    <h2${titleId}>${project.homeTitle}${titleStatus}</h2>
                    <p class="mb-4 text-muted">${project.homeDescription}</p>
                    <div>
                        <a href="/work.html" class="btn btn-second" title="${project.homeCta}">${project.homeCta}</a>
                    </div>
                </div>
            </div>`;

        return `
            <div class="row align-items-center mb-5">
                ${imageOnLeft ? imageColumn + descriptionColumn : descriptionColumn + imageColumn}
            </div>`;
    }).join("");
}

displayFeaturedProjects();
displayLanguage();
AOS.init();

