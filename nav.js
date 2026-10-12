const navbar = document.querySelector(".navbar");

if (navbar) {
  let lastScrollY = window.scrollY;
  const directionThreshold = 8;

  window.addEventListener(
    "scroll",
    () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      if (currentScrollY <= navbar.offsetHeight) {
        navbar.classList.remove("navbar-hidden");
        lastScrollY = currentScrollY;
      } else if (scrollDifference > directionThreshold) {
        navbar.classList.add("navbar-hidden");
        lastScrollY = currentScrollY;
      } else if (scrollDifference < -directionThreshold) {
        navbar.classList.remove("navbar-hidden");
        lastScrollY = currentScrollY;
      }
    },
    { passive: true }
  );
}