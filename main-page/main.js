let topButton = document.getElementById("btButton");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

window.onscroll = function() {
    scrollFunction()
};


function backtotopFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}