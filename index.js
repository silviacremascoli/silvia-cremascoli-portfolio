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

displayLanguage();
AOS.init();

