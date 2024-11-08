document.addEventListener('DOMContentLoaded', function() {
  const clickableImages = document.querySelectorAll('.clickable');
  const expandedGallery = document.querySelector('.expanded-gallery');
  const expandedImage = document.getElementById('expanded-image');

  clickableImages.forEach(function(image) {
    image.addEventListener('click', function() {
      expandedImage.src = image.src; // Set the clicked image source
      expandedGallery.style.display = 'block'; // Show the expanded gallery
    });
  });

  // Close the expanded gallery when clicked
  expandedGallery.addEventListener('click', function
