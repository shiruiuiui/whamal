document.addEventListener("scroll", scroll);
scroll();

function scroll() {
  document.documentElement.dataset.scroll = window.scrollY;
}

// team
const $team = document.getElementById("team");
for (const $member of $team.querySelectorAll(".members > div")) {
  let open = false;
  const $expander = $member.querySelector(".expander");

  $member.querySelector(":scope > header").addEventListener("click", (e) => {
    open = !open;

    $member.classList[open ? "add" : "remove"]("open");
  });
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// open the modal
modal.style.display = "block";

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
