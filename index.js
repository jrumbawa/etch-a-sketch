const gamepad = document.getElementById("gamepad")

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div")
  square.classList.add("square")
  square.addEventListener("mouseover", function() {
    square.classList.add("hovered")
  })
  gamepad.appendChild(square)
}