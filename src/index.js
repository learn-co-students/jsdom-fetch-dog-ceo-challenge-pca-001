console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetchImages(imgUrl)
  fetchBreeds(breedUrl)
  document.getElementById("breed-dropdown").onchange = changeFilter
}) // all of this happens when the page is loaded


function fetchImages(imgUrl) { // reach out and get the images
  return fetch(imgUrl)
  .then(response => response.json())
  .then(json => renderImages(json)) //json returns an object
}

function renderImages(images) {
  let imgContainer = document.getElementById("dog-image-container")
  // assiging image container to a variable
  images.message.forEach(link => {
    // images is an object and message is the key so in order to get to what you want you need both. then interate through
    const img = document.createElement("img") // creating an img element for every image
    img.src = link // setting its source to the link
    imgContainer.appendChild(img) // appending our image into the container
  })
}

function fetchBreeds(breedUrl) { //same as images fetch
  return fetch(breedUrl)
  .then(response => response.json())
  .then(json => renderBreeds(json))
}

function renderBreeds(breeds) {
  let breedUl = document.getElementById("dog-breeds")
  for (const breed in breeds.message) { // iterate through object
    const li = document.createElement("li") // create an li element
    li.innerText = breed // set the inner text of the li to breed
    li.classList.add("dog-breed") // for every li we create we are giving it a class name. we do this so we can select them later
    breedUl.appendChild(li) // add li to ul
  }
}

function changeFilter(event) {
  selectedLetter = event.target.value // The target event property returns the element that triggered the event.
  // in this case the letter selected is the property that triggered the event
  breedListItems = document.getElementsByClassName("dog-breed")
    // all of or li with a class name that we cretaed above can be grabbed and assigned to a variable
  for (const breedListItem of breedListItems ) {
    // for of to iterate over an array
    // in this case we are going to create a new variable for each of the list items
    if (breedListItem.innerText[0] != selectedLetter) {
      breedListItem.style.display = "none"
      // if the list items inner text does not equal the letter selected. "none" hides the element
    } else {
      breedListItem.style.display = "block"
      // if it does match, we will display it
    }
  }
}


fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response) {
  return response.json();
})
.then(function(json) {
  console.log(json)
});