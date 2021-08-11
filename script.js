document.addEventListener("scroll", scroll);
scroll();

function scroll() {
  document.documentElement.dataset.scroll = window.scrollY;
}

// team
const $team = document.getElementById("team");
for (const $header of $team.querySelectorAll(".members > div > header")) {
  let open = false;

  $header.addEventListener("click", (e) => {
    open = !open;

    $header.parentElement.classList[open ? "add" : "remove"]("open");
  });
}

const modal = document.getElementById("myModal");
const button = document.getElementsByClassName("accept")[0];

modal.style.display = "block";

button.onclick = function () {
  modal.style.display = "none";
};


