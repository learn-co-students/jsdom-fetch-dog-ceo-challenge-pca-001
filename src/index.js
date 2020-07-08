console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetchImages(imgUrl)
  fetchBreeds(breedUrl)

  document.getElementById("breed-dropdown").addEventListener("change", filter)
})

function fetchImages(url) {
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    loadImages(json)
  });
}

function loadImages(json) {
  const dogImgCont = document.getElementById("dog-image-container")
  json.message.forEach(url => {
    let imgTag = document.createElement("img")
    imgTag.src = url
    dogImgCont.appendChild(imgTag)
  })
}

function fetchBreeds(url) {
  fetch(url)
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    listBreeds(json)
  })
}

function listBreeds(json) {
  const dogBreedsUl = document.getElementById("dog-breeds")
  for (breed in json.message) {
    let li = document.createElement("li")
    li.innerHTML = breed
    li.addEventListener('click', function(event) {
      event.currentTarget.style.color = "lime"
    })
    dogBreedsUl.appendChild(li)
  }
}

function filter(){
  const selection = document.getElementById("breed-dropdown").value
  const dogBreeds = document.getElementById("dog-breeds").children

  for (breed of dogBreeds) {
    if (breed.innerHTML[0] === selection) {
      breed.style.display = "block"
    } else {
      breed.style.display = "none"
    }
  }
}
