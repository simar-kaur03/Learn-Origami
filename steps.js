
const rightBtn = document.querySelector('#right-button');
const leftBtn = document.querySelector('#left-button');


rightBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('#content');
  conent.scrollLeft += 834;
  event.preventDefault();

});

leftBtn.addEventListener("click", function(event) {
  const conent = document.querySelector('#content');
  conent.scrollLeft -= 834;
  event.preventDefault();
});

function klik(){
  var p = document.getElementById("status");
  p.value = p.value + 10;
  }
  $(function(){
      p.addEventListener('click', alert('dd'))

  });

  function klikl(){
    var p = document.getElementById("status");
    p.value = p.value - 10;
    }
    $(function(){
        p.addEventListener('click', alert('dd'))
  
    });

  


// audio

// let sound = document.getElementById('beep')
// let play = document.getElementById('right-button')

// play.onclick =
//   function() {
//         console.log('right-button');
//   sound.play();
//         return false;
//     };





//   const audio = new Audio("/click-sound.mp3");
// const buttons = document.querySelector('#right-button');

// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     audio.play();
//   });
// });


  console.log("the steps")