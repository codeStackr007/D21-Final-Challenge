const navHamToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");

// Helper Function
const closeNav = () => nav.classList.remove("nav-is-open");

navHamToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-is-open");
});

navHamToggle.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNav();
  }
});

/* We add a click event listener to the whole window.
That means: whenever anything in the window is clicked, this function runs.
Inside the function, we check two things:

1. If the thing that was clicked (e.target) is NOT inside the nav menu
   → nav.contains(e.target) would be true if it’s inside, so !nav.contains(e.target) means it’s outside.

2. If the thing that was clicked is NOT the hamburger toggle button itself
   → e.target !== navHamToggle makes sure clicking the toggle doesn’t instantly close the nav.

If both conditions are true, we call closeNav(), which removes the "nav-is-open" class
and hides the mobile menu. */

window.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && e.target !== navHamToggle) {
    closeNav();
  }
});

for (i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    closeNav();
  });
}
