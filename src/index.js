const keys = document.querySelectorAll(".octave > div");

function unmark() {
  console.log("unmark");
}

keys.forEach(function (key) {
  key.onmousedown = function () {
    console.log("mark");
  };

  key.onmouseup = () => unmark(key);
  key.onmouseleave = () => unmark(key);
});
