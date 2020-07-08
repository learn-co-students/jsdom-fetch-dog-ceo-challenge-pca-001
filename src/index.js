console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  imgURL = "https://dog.ceo/api/breeds/image/random/4"
  breedURL = "https://dog.ceo/api/breeds/list/all"

  fetchImages(imgURL)
  fetchBreeds(breedURL)

  document.getElementById("breed-dropdown").onchange = changeFilter
})

function fetchImages(imgURL) {
  fetch(imgURL)
  .then(resp => { return resp.json() })
  .then(json => renderImages(json))
}

function renderImages(images) {
  const display = document.getElementById("dog-image-container")
  images.message.forEach(link => {
    const img = document.createElement("img")
    img.src = link
    display.appendChild(img)
  })
}

function fetchBreeds(breedURL) {
  fetch(breedURL)
  .then(resp => { return resp.json() })
  .then(json => renderBreeds(json))
}

function renderBreeds(breeds) {
  const show = document.getElementById("dog-breeds")
  for (breed in breeds.message) {
    const li = document.createElement("li")
    li.innerText = breed
    li.classList.add("dog-breed")
    show.appendChild(li)
  }
}

function changeFilter(event) {
  selectedLetter = event.target.value
  breeds = document.getElementsByClassName("dog-breed")

  for (const breed of breeds ) {
    if (breed.innerText[0] != selectedLetter) {
      breed.style.display = "none"
    } else {
      breed.style.display = "block"
    }
  }
}