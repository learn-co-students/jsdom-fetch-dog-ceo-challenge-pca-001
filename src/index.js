console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
// ^ need for "on page load"
function challengOne() {
  // const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  // could write fetch(imgURL)
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonResults) {
      return jsonResults.message.forEach(function(dogImage) {
        return addImage(dogImage)
      })
    })
  function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = dogPicUrl;
    container.appendChild(newImage);
  }
}

function challengeTwo() {
//const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
    return response.json();
    })
    .then(function(jsonResults) {
    return showBreeds(jsonResults)
    })

  function showBreeds(breeds) {
    breedList = document.getElementById("dog-breeds")

    for (breed in breeds.message) {
      const list = document.createElement("li")
      list.innerText = breed
      list.classList.add("dog-breed")
      breedList.appendChild(list)
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
}