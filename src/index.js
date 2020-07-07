// console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

const fetchImages = () => fetch(imgUrl).then(res => res.json());
const fetchBreeds = () => fetch(breedUrl).then(res => res.json());

const displayImages = (fcn) => {
  fcn().then( (json) =>{
    const imageArea = document.getElementById('dog-image-container');
    json.message.forEach( (url) => {
      const img = document.createElement('img');
      img.src = url;
      imageArea.appendChild(img);
    });
  });
}

const colorChange = (e) => e.currentTarget.style.color = "red";

const appendDog = (dogName) => {
  const breedList = document.getElementById('dog-breeds');
  let dog = document.createElement('li');
  dog.innerHTML = dogName;
  breedList.appendChild(dog);
  dog.addEventListener('click', colorChange);
}

const displayBreeds = (fcn) => {
  fcn().then( (json) =>{
    for(const key in json.message){
      if(json.message[key].length === 0){
        appendDog(key);
      }else{
        json.message[key].forEach( (first) => {
          appendDog(`${first} ${key}`);
        });
      }
    }
  });
}

const filter = (char) => {
  let breedList = document.getElementById('dog-breeds');
  const filtered = [...breedList.childNodes].
    map( x => x.innerHTML ).
    slice(1).
    filter( y => y[0] === char)
  breedList.innerHTML = ''
  filtered.forEach( name => appendDog(name));
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById('breed-dropdown');
  displayImages(fetchImages);
  displayBreeds(fetchBreeds);
  dropdown.onchange = () => {
    filter(dropdown.value);
  }
});