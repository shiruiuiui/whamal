// nav
(() => {
  const $nav = document.querySelector("nav");

  let open = false;

  $nav.querySelector(".hamburger").addEventListener("click", toggle);
  $nav.querySelector(".links").addEventListener("click", () => {
    open = false;
    $nav.classList.remove("open");
  });

  function toggle() {
    open = !open;

    $nav.classList[open ? "add" : "remove"]("open");
  }
})();
