let images = [
  "alaska.webp",
  "anime-city.webp",
  "storm-clouds.webp",
  "blue-tit.webp",
  "hurricane.webp",
  "mountain-lake.webp",
  "ferruginous-duck.webp",
  "night-sea.webp",
  "snow-bunting.webp",
  "snow-leopard-cubs.webp",
  "snowy-mountains.webp",
  "frosted-tree.webp"
];

let titles = [
  "Alaska",
  "Anime city",
  "Storm clouds",
  "Blue tit",
  "Hurricane",
  "Mountain lake",
  "Ferruginous duck",
  "Night at the sea",
  "Snow bunting",
  "Snow leopard cubs",
  "Snowy mountains",
  "Frosted tree"
];

let descriptions = [
  "Glacier bay in Alaska with ice and snowy mountains",
  "Drawn city street at night with neon lights",
  "Dark storm clouds in the sky",
  "Blue tit sitting on a branch",
  "Hurricane seen from space",
  "Snowy mountains reflected in a lake",
  "Duck spreading its wings on the water",
  "Person standing on a rock at the sea at night",
  "Snow bunting sitting on a rock",
  "Two snow leopard cubs on a rock",
  "Snowy mountains under a blue sky",
  "Frosted tree in a snowy landscape"
];

let currentIndex = 0;

function init() {
  renderGallery();
}

function renderGallery() {
  let gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  for (let i = 0; i < images.length; i++) {
    gallery.innerHTML += getImageTemplate(i);
  }
}

function getImageTemplate(i) {
  return `
    <button class="image-button" onclick="openDialog(${i})" aria-label="Open ${titles[i]}">
      <img class="image" src="./img/${images[i]}" alt="${descriptions[i]}">
    </button>
  `;
}

function openDialog(i) {
  currentIndex = i;
  showImage();
  document.getElementById("dialog").showModal();
}

function closeDialog() {
  document.getElementById("dialog").close();
}

function showImage() {
  let dialogImage = document.getElementById("dialog-image");
  dialogImage.src = "./img/" + images[currentIndex];
  dialogImage.alt = descriptions[currentIndex];
  document.getElementById("dialog-title").innerHTML = titles[currentIndex];
  document.getElementById("image-number").innerHTML = `${currentIndex + 1}/${images.length}`;
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage();
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage();
}

function preventClose(event) {
  event.stopPropagation();
}
