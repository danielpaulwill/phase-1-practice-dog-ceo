console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', init);

let imageContainer = document.getElementById('dog-image-container');

function init() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json)
  .then(json => {
    forEach(element => console.log(element))

  //   let dogsArray = json.message
  //    let javaScriptDogs = JSON.parse(dogsArray)
  //    console.log(javaScriptDogs)
  // })

    // console.log(dogsArray)
  
  // for(let dogs of json) {
  //   let dogImage = document.createElement('img')
  //   //dogImage.src = json.index //Grab the src url of each image, hopefully by iterating over the json array
  //   document.getElementById('dog-image-container').appendChild(dogImage)


//  dogImage.append(json/1)
//  imageContainer.appendChild(dogImage)

})};
// })
// }


//Take my JSON response and add each image to the DOM



let imgContain = document.querySelector('#dog-image-container')

