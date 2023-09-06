const projects = [
    {
        name: "World Clock Project",
        img: "world-clock-home",
        alt: "world clock project",
        id: "world-clock-project",
        "built-with": "HTML, CSS and JavaScript",
        "aos-flip": "flip-right",
        github: "https://github.com/silviacremascoli/world-clock",
        link: "https://my-world-clock-app-silvia-cremascoli.netlify.app/"
    },
    {
        name: "Weather Project",
        img: "weather-home",
        alt: "weather project",
        id: "weather-project",
        "built-with": "HTML, CSS and React.js",
        "aos-flip": "flip-left",
        github: "https://github.com/silviacremascoli/react-weather-app",
        link: "https://react-weather-app-silvia-cremascoli.netlify.app/"
    },
    {
        name: "Travel Page Project",
        img: "travel-home",
        alt: "travel page project",
        id: "travel-page-project",
        "built-with": "HTML and CSS",
        "aos-flip": "flip-right",
        github: "https://github.com/silviacremascoli/travel-page-bali",
        link: "https://travel-page-bali-silvia-cremascoli.netlify.app/"
    },
    {
        name: "Dictionary Project",
        img: "dictionary-home",
        alt: "dictionary project",
        id: "dictionary-project",
        "built-with": "HTML, CSS and React.js",
        "aos-flip": "flip-left",
        github: "https://github.com/silviacremascoli/react-dictionary-app",
        link: "https://react-dictionary-silvia-cremascoli.netlify.app/"
    },
    {
        name: "Portfolio Project",
        img: "portfolio-home",
        alt: "portfolio project",
        id: "portfolio-project",
        "built-with": "HTML, CSS and Vue.js",
        "aos-flip": "flip-right",
        github: "https://github.com/silviacremascoli/nandor-bottyan-portfolio",
        link: "https://vue-js-personal-portfolio.netlify.app/"
    },
    {
        name: "Restaurant Project",
        img: "restaurant-home",
        alt: "restaurant project",
        id: "restaurant-project",
        "built-with": "HTML, CSS and PHP",
        "aos-flip": "flip-left",
        github: "https://github.com/silviacremascoli/restaurant_dynamic_website",
        link: "http://restaurantfrank.byethost32.com/"
    }
]

/* const skillCategories = ["My Skills"
]

const skills = [

    {
        category: {
            "category-name": "My skills": {
    {
        name: "HTML",
        "i-class": "fa-brands fa-html5"
    },
    {
        name: "CSS",
        "i-class": "fa-brands fa-css3-alt"
    },
    {
        name: "SASS",
        "i-class": "fa-brands fa-sass"
    }
            }
        }

    }
] */

function displayProject() {
    const project = document.getElementById("project");

    let projectHTML = `<div class="row">`;
    projects.forEach(function (myProject) {
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
    })
    projectHTML = projectHTML + `</div>`;
    project.innerHTML = projectHTML;
}

displayProject();
AOS.init();
