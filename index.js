const gamepad = document.getElementById("gamepad")
const resetBtn = document.getElementById("reset-btn")


function render(size) {
  gamepad.innerHTML = ""
  for (let i = 0; i < (size * size); i++) {
    const square = document.createElement("div")
    square.style.height = `${400 / size}px`
    square.style.width = `${400 / size}px`
    square.addEventListener("mouseover", function() {
      square.style.backgroundColor = 'black'
    })
    gamepad.appendChild(square)
  }
}


resetBtn.addEventListener("click", function() {
  const newSize = parseInt(prompt("Enter a new size between 16-100"))
  render(newSize)
})

render(16)