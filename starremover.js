'use strict';

function removeStars() {
  var stars = document.querySelectorAll(".a-icon");
  stars.forEach(star => {
    star.parentNode.removeChild(star);
  });
  var top_stars = document.querySelectorAll(".starRating__stars");
  top_stars.forEach(star => {
    star.parentNode.removeChild(star);
  });
}

removeStars();
