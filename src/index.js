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
  .then(json => { displayImages(json) })
}

function displayImages(images) {
  imgContainer = document.getElementById("dog-image-container")

  images.message.forEach(link => {
    const img = document.createElement('img')
    img.src = link
    imgContainer.appendChild(img)
  })
}

function fetchBreeds(breedURL) {
  fetch(breedURL)
  .then(resp => { return resp.json() })
  .then(json => { displayBreeds(json) })
}

function displayBreeds(breeds) {
  breedList = document.getElementById("dog-breeds")

  for (breed in breeds.message) {
    const li = document.createElement("li")
    li.innerText = breed
    li.classList.add("dog-breed")
    breedList.appendChild(li)
  }
}

function changeFilter(e) {
  selectedLetter = e.target.value
  breedListItems = document.getElementsByClassName("dog-breed")

  for (const breedListItem of breedListItems ) {
    if (breedListItem.innerText[0] != selectedLetter) {
      breedListItem.style.display = "none"
    } else {
      breedListItem.style.display = "block"
    }
  }
}