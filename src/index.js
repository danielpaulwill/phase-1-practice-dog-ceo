console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', fetchBoyFetch);

function fetchBoyFetch() {
  init4()
  initAll()
};

let imageContainer = document.getElementById('dog-image-container');

function init4() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(data => {
  data.message.forEach(imageUrl => {
    let dogImage = document.createElement('img')
    dogImage.src = imageUrl
    document.getElementById('dog-image-container').appendChild(dogImage)
  })
})
};








function initAll() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(data => {
  data.message.forEach(dogBreed => {   //Iterate through each dog breed
  let breedList = document.createElement('li')   //Create li element for each breed
  let breedText = document.createTextNode(`${dogBreed}`)   //Put each breed into a text node
  breedList.appendChild(breedText)   //Put each breed text node into it's li element
  dogBreedList.appendChild(breedList)   //Put each li element into the ul DOM element
    })
  })
};