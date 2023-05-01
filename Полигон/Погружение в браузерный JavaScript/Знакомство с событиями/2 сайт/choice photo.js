var photos = [
  "картинки/1-photo.jpg",
  "картинки/2-photo.jpg",
  "картинки/3-photo.jpg",
  "картинки/4-photo.jpg",
  "картинки/5-photo.jpg",
];

var thumbnails = document.querySelectorAll(".gallery_photo-preview");
var fullPhoto = document.querySelector(".full-photo");

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function() {
    fullPhoto.src = photo
    })
}

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i])
}