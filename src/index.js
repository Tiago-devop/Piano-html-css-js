const keys = document.querySelectorAll(".octave > div");

function unmark(key) {
  key.classList.remove("selected");
}

keys.forEach(function (key) {
  key.onmousedown = function () {
    key.classList.add("selected");
  };

  key.onmouseup = () => unmark(key);
  key.onmouseleave = () => unmark(key);
});
