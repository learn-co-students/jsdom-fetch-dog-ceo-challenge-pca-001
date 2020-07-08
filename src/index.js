console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
// ^ need for "on page load"
  fetchImages();
  fetchBreeds()
});

function fetchImages() { //challenge 1
  // const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  // could write fetch(imgURL)
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
      return response.json();
    })
    // could write .then(response => { return response.json() })
    .then(function(jsonResults) {
      return showImages(jsonResults)
      })
    }

function showImages(dogImagesUrl) {
  let container = document.querySelector('#dog-image-container');

  dogImagesUrl.message.forEach(link => {
    let image = document.createElement('img');
    image.src = link
    container.appendChild(image) //add image to container
  })
}

function fetchBreeds() { //challenge 2
//const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
    return response.json();
    })
    .then(function(jsonResults) {
    return showBreeds(jsonResults)
    })
  }

function showBreeds(breeds) {
  let breedList = document.getElementById("dog-breeds")

  for (const breed in breeds.message) { // iterate through breeds.message and store in new const breed
    const list = document.createElement("li")
    list.innerText = breed
    list.classList.add("dog-breed") // for every list item we create we are giving it a class name so we can select them later
    breedList.appendChild(list) // add list to breedList
  }
}

function changeFilter(event) { //challenge 4
  selectedLetter = event.target.value
    //even is the drop down of selecting a letter
  breedListItems = document.getElementsByClassName("dog-breed")

  for (const breedListItem of breedListItems ) { //iterating over the breedlistitems(plural(all)) and saving in a new cont of singular breedlistitem
    if (breedListItem.innerText[0] != selectedLetter) {
      //if the first item of the list is not equal to the selected item(letter)
      breedListItem.style.display = "none"

    } else {
      breedListItem.style.display = "block"
    }
  }
}
