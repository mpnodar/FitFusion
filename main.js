
function show () {
  document.getElementById("sidebar").classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
  var scrollTopButton = document.getElementById("scrollTopButton");

  
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  };

  
  scrollTopButton.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});