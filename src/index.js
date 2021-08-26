console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', fetchBoyFetch);

function fetchBoyFetch() {
  init4()
  initAll()
  // initBreedFilter()
};

// Grab 4 random dog images and put them on the DOM
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

// Grab all the dog breed data and pass it to my breed iterator
function initAll() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(data => initAllIterator(data))
//   // let dataAll = data
//   // return dataAll
  };

// Take my breed data and put each breed into a li element on the page
function initAllIterator(arg) {
  let dogBreeds = Object.keys(arg.message)
  let dogBreedList = document.getElementById('dog-breeds')
  dogBreeds.forEach(dogBreed => {
  let breedList = document.createElement('li')//Create li element for each breed
  breedList.addEventListener('click', e => e.target.style.color ="#fcba03")   //Change color when clicked
  let breedText = document.createTextNode(`${dogBreed}`)   //Put each breed into a text node
  breedList.appendChild(breedText)   //Put each breed text node into it's li element
  dogBreedList.appendChild(breedList)   //Put each li element into the ul DOM element
  })};





  // 

let dropDown = document.getElementsByTagName('select-breed');
//dropDown.addEventListener('change', e => console.log(e.target));



let input = "b"

function initBreedFilter() {
  document.getElementById('dog-breeds').remove()
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(data => filterBreeds(data))
//   // let dataAll = data
//   // return dataAll
  };

function filterBreeds(arg) {
  let dogBreeds = Object.keys(arg.message)
  let dogBreedList = document.getElementById('dog-breeds')
  dogBreeds.forEach(dogBreed => {
  let breedList = document.createElement('li')//Create li element for each breed
  breedList.addEventListener('click', e => e.target.style.color ="#fcba03")   //Change color when clicked
  let breedText = document.createTextNode(`${dogBreed}`)   //Put each breed into a text node
  if (dogBreed.charAt(0) === input) {
  console.log('My debugger is sad')
  breedList.appendChild(breedText)   //Put each breed text node into it's li element
    console.log('but not as sad as you might think')
    debugger;
  dogBreedList.appendChild(breedList)   //Put each li element into the ul DOM element
    console.log('nope, still sad')
}})
};



// CHALLENGE 4
// Step 1
// Grab the a, b, c, and d elements from the drop down
// Step 2
// Filter the Dog breed results based on whichever letter is selected
 


// Step 3?
// Try a .filter and a 
//          str.charAt(0) which should select the first character in each li
// If str.charAt(0) === 'a', etc.
// 
