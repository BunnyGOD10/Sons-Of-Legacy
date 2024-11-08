// script.js

document.addEventListener('DOMContentLoaded', function() {
  const clickableImages = document.querySelectorAll('.clickable');
  const expandedGallery = document.querySelector('.expanded-gallery');

  clickableImages.forEach(function(image) {
    image.addEventListener('click', function() {
      // Toggle the display of the expanded gallery
      if (expandedGallery.style.display === 'none' || expandedGallery.style.display === '') {
        expandedGallery.style.display = 'block'; // Show the full gallery
      } else {
        expandedGallery.style.display = 'none'; // Hide the full gallery
      }
    });
  });
});
