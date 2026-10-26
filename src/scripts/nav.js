let lastScrollY = window.scrollY;
const directionThreshold = 8;

function resetNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  navbar.classList.remove("navbar-hidden");
  lastScrollY = window.scrollY;
}

function updateNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const maxScrollY = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const currentScrollY = Math.max(0, Math.min(window.scrollY, maxScrollY));

  if (currentScrollY <= navbar.offsetHeight) {
    navbar.classList.remove("navbar-hidden");
    lastScrollY = currentScrollY;
  } else if (maxScrollY - currentScrollY <= 2) {
    navbar.classList.add("navbar-hidden");
    lastScrollY = currentScrollY;
  } else {
    const scrollDifference = currentScrollY - lastScrollY;
    if (scrollDifference > directionThreshold) {
      navbar.classList.add("navbar-hidden");
      lastScrollY = currentScrollY;
    } else if (scrollDifference < -directionThreshold) {
      navbar.classList.remove("navbar-hidden");
      lastScrollY = currentScrollY;
    }
  }
}

window.addEventListener("scroll", updateNavbar, { passive: true });
document.addEventListener("astro:page-load", resetNavbar);
resetNavbar();