function init() {
  const tiles = document.querySelectorAll('.board__tile')
  const row = document.querySelectorAll('.board__row')

  let guessedWord = ''
  let currentIndex = 0
  let currentTile = tiles[currentIndex]

  function addLetter(e) {
    guessedWord += e.key
    currentTile.innerText = e.key
    currentIndex++
    currentTile = tiles[currentIndex]

    if (guessedWord.length === 5) {
      window.removeEventListener('keydown', addLetter)
    }
  }
  window.addEventListener('keydown', addLetter)
}

init()
