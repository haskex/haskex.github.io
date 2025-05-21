let name = document.querySelector(".name")

const realname = ["J", "h", "u", "a", "n", " ", "N", "y", "c", "o", "l", "a", "s"]
const username = ["H", "a", "s", "k", "e", "x"]

function clearName(atual) {
  for (let ch in atual) {
    setTimeout(() => {
      name.textContent = name.textContent.pop
    }, 100 * ch);
  }

  setTimeout(() => {
    typewriter(atual)
  }, 2000)
}

function typewriter(atual) {
  for (let ch in atual) {
    setTimeout(() => {
      name.textContent = name.textContent + atual[ch]
    }, 100 * ch);
  }

  setTimeout(() => {
    reverseTypewriter(atual)
  }, 3000)
}

function reverseTypewriter(atual) {
  if (atual == username) {
    clearName(atual)
  } else {
    clearName(atual)
  }
}

typewriter(username)
