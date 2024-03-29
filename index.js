const languages = [
    {
        class: "fa-brands fa-html5",
        AOS: 1000
    },
    {
        class: "fa-brands fa-sass",
        AOS: 1200
    },
    {
        class: "fa-brands fa-bootstrap",
        AOS: 1400
    },
    {
        class: "fa-brands fa-square-js",
        AOS: 1600
    },
    {
        class: "fa-brands fa-react",
        AOS: 1800
    },
    {
        class: "fa-brands fa-vuejs",
        AOS: 2000
    },
]

function displayLanguage() {
    const language = document.getElementById("languages");
    let languageHTML = `<div>`;
    languages.forEach((value) => {
        languageHTML = languageHTML +
            `<i
                class="${value.class}"
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

