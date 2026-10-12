const navbar = document.querySelector(".navbar");

if (navbar) {
  let lastScrollY = window.scrollY;
  const directionThreshold = 8;

  window.addEventListener(
    "scroll",
    () => {
      const maxScrollY = Math.max(0,document.documentElement.scrollHeight - window.innerHeight);
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
    },
    { passive: true }
  );
}