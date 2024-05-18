const tiles = document.querySelectorAll('.board__tile')

let currentGuess = ''

async function getWord() {
  const api = 'https://words.dev-apis.com/word-of-the-day'

  const response = await fetch(api)
  const data = await response.json()
  const word = data.word

  console.log('Correct word: ', word)
  return word
}

function listenForKeys() {
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      currentGuess = currentGuess.slice(0, -1)
      updateUI()
    } else if (event.key === 'Enter') {
      checkGuess()
    } else {
      checkLetter(event.key)
    }
  })
}

function checkLetter(letter) {
  // Checks if the key pressed is a letter
  if (letter.match(/[a-z]/i)) {
    currentGuess += letter
    updateUI()
  }
}

function updateUI() {
  tiles.forEach((tile, index) => {
    tile.textContent = currentGuess[index] || ''
  })
}

async function checkGuess() {
  let word = await getWord()

  if (currentGuess === word) {
    console.log('Correct!')
  } else {
    console.log('Incorrect!')
  }
}

listenForKeys()
