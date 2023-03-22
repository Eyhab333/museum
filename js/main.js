// =============== header ================
// menu on mobile
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


// ============== hero background video ==========
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// =========== section our vision ============
// ===== Automatic Slideshow =======
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/*
=============================================== 
          2 sections: visits, they said.
          Multiple Slideshows
================================================
*/

// let slideIndex2 = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// let slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex2[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex2[no] = 1}
//   if (n < 1) {slideIndex2[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex2[no]-1].style.display = "block";
// }