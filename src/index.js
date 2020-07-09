console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetchImages(imgUrl)
  fetchBreeds(breedUrl)
  document.getElementById("breed-dropdown").onchange = changeFilter
})

function fetchImages(imgUrl) {
  return fetch(imgUrl)
  .then(response => response.json())
  .then(json => renderImages(json))
}

function renderImages(images) {
  let imgContainer = document.getElementById("dog-image-container");
  images.message.forEach(link => {
    const img = document.createElement("img");
    img.src = link
    imgContainer.appendChild(img)
  })
}

function fetchBreeds(breedUrl) {
  return fetch(breedUr)
  .then(response => response.json())
  .then(json => renderBreeds(json))
}

function renderBreeds(breeds) {
  let breedUrl = document.getElementById("dog-breeds")
  for (const breed in breeds.message) {
    const li = document.createElement("li")
    li.innerText = breed
    li.classList.add("dog-breed")
    breedUrl.appendChild(li)
  }
}

function changeFilter(event) {
  selectedLetter = event.target.value
  breedListItems = document.getElementsByClassName("dog-breed")
  for (const breedListItem of breedListItems) {
    if (breedListItem.innerText[0] != selectedLetter) {
      breedListItem.style.display = "none"
    } else {
      breedListItem.style.display = "block"
    }
  }
}
