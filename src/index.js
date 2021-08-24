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
  .then(data => initAllIterator(data))
  };


function initAllIterator(arg) {
  let dogBreeds = Object.keys(arg.message)
  let dogBreedList = document.getElementById('dog-breeds')
  dogBreeds.forEach(dogBreed => {
  let breedList = document.createElement('li')//Create li element for each breed
  breedList.addEventListener('click', e => e.target.style.color ="#fcba03")   //Change color when clicked
  let breedText = document.createTextNode(`${dogBreed}`)   //Put each breed into a text node
  breedList.appendChild(breedText)   //Put each breed text node into it's li element
  dogBreedList.appendChild(breedList)   //Put each li element into the ul DOM element
  })
};





let dropDown = document.getElementsByTagName('form');
//dropDown.addEventListener('change', e => console.log(e.target));





// CHALLENGE 4
// Step 1
// Grab the a, b, c, and d elements from the drop down
// Step 2
// Filter the Dog breed results based on whichever letter is selected
// 
// Step 3?
// Try a .filter and a 
//          str.charAt(0) which should select the first character in each li
// If str.charAt(0) === 'a', etc.
// 
