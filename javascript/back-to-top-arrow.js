//declare variables
mybutton = document.getElementById("back-to-top");
window.onscroll = function() {scrollFunction()};

//display arrow if user scrolls down
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}