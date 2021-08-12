// nav
(() => {
  const $nav = document.querySelector("nav");

  let open = false;

  $nav.querySelector(".hamburger").addEventListener("click", toggle);
  $nav.querySelector(".menu").addEventListener("click", () => {
    open = false;
    $nav.classList.remove("open");
  });

  function toggle() {
    open = !open;

    $nav.classList[open ? "add" : "remove"]("open");
  }
})();

// modal
const modal = document.getElementById("disclaimer-modal");
const button = document.getElementsByClassName("accept")[0];

if (!window.localStorage.getItem("disclaimer-accepted"))
  modal.style.display = "block";

button.onclick = function () {
  modal.style.display = "none";
  window.localStorage.setItem("disclaimer-accepted", true);
};

// Scroll animations
window.createShowObserver = (target, options) => {
  return new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if(entry.isIntersecting)
      entry.target.classList.add("show");
    }
  }, options).observe(target);
};
