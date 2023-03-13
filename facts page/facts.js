

// TRY 3 Final



var images = ['img/fact_1.png', 'img/fact_2.png', 'img/fact_3.png', 'img/fact_4.png', 'img/fact_5.png', 'img/fact_6.png', 'img/fact_7.png', 'img/fact_8.png', 'img/fact_9.png'];
var index = 0;

function changeImage() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  var image = document.getElementById('image');
  image.src = images[index];
}











// TRY 1 ONLY SHOWS 1 IMG


// function toggleImage() {
//     var image = document.getElementById('image');
//     image.classList.toggle('hidden');
//   }
  
//   var button = document.getElementById('button')
//   button.addEventListener('click', toggleImage)




// TRY 2 THE PREVIOUS IMAGE DISAPEARS 

// function changeImage() {
//   var image = document.getElementById("myImage");
//   if (image.src.match("img/fact-1.jpg")) {
//     image.src = "img/fact-2.jpg";
//   } else {
//     image.src = "img/fact-3.jpg"; 
//     } if (image.src.match("img/fact-3.jpg")) {
//       image.src = "img/fact-4.jpg";
//       } if (image.src.match("img/fact-4.jpg")) {
//         image.src = "img/fact-5.jpg";
//         } 
// }





