console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', init);

let imageContainer = document.getElementById('dog-image-container');

function init() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(data => imageCreation(data.message))
};

function imageCreation(arg1) {
  arg1.forEach(imageUrl => {
    let dogImage = document.createElement('img')
    dogImage.src = imageUrl
    document.getElementById('dog-image-container').appendChild(dogImage)

    })
};



let imgContain = document.querySelector('#dog-image-container')

