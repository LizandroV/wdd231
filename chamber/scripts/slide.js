let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

document.addEventListener('DOMContentLoaded', function() {
  var currentDate = new Date();
  var currentDay = currentDate.getDay(); // 0 is Sunday, 1 is Monday, and so on.

  // Show the banner only on Mondays, Tuesdays, and Wednesdays
  if (currentDay >= 1 && currentDay <= 3) {
      var banner = document.getElementById('banner');
      banner.style.display = 'block';
  }

  // Close banner functionality
  var closeBannerBtn = document.getElementById('closeBanner');
  closeBannerBtn.addEventListener('click', function() {
      var banner = document.getElementById('banner');
      banner.style.display = 'none';
  });
});
