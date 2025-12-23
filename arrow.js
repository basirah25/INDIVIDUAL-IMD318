function scrollUp() {
  window.scrollBy({
    top: -200, 
    left: 0,
    behavior: 'smooth' 
  });
}

function scrollDown() {
  window.scrollBy({
    top: 200, 
    left: 0,
    behavior: 'smooth'
  });
}

document.getElementById("btnUp").onclick = function() {
  scrollUp();
};

document.getElementById("btnDown").onclick = function() {
  scrollDown();
};