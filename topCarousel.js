const topCarousel = document.getElementById("digi-top-carousel");
//arrows
const topCarouselRightArrow = document.getElementById(
  "top-carousel-right-arrow"
);
const topCarouselLeftArrow = document.getElementById("top-carousel-left-arrow");

loadTopCarouselEventListeners();
var auto_load_next_img_topCarousel = setInterval(loadNextImage, 3000); //every 1000 milli secounds

function loadTopCarouselEventListeners() {
  initTopCarouselImg();
  topCarouselRightArrow.addEventListener("click", clickLoadNextImage);
  topCarouselLeftArrow.addEventListener("click", loadPreviousImage);
}

function initTopCarouselImg() {
  // topCarousel.style.backgroundImage = "url('./img/d1.jpg')";
  topCarousel.src = './img/d1.jpg';
  document.querySelector("#balls :nth-child(1)").classList.add("active-ball");
}
function loadPreviousImage(e) {
  const n = 7; //number of carousel images
  // let currentBgImg = topCarousel.style.backgroundImage;
  let currentBgImg = topCarousel.src;
  let i = parseInt(currentBgImg[currentBgImg.indexOf("d") + 1]); //number of current image (d1? d2? ... ? d7?)
  let ballI = document.querySelector("#balls :nth-child(" + i + ")");
  ballI.classList.remove("active-ball");
  i = (i % n) + 1; //go to next image number 
  // topCarousel.style.backgroundImage = "url('./img/d" + i + ".jpg')";
  topCarousel.src = './img/d' + i + '.jpg';
  ballI = document.querySelector("#balls :nth-child(" + i + ")");
  ballI.classList.add("active-ball");
  //stop auto background loader.
  clearInterval(auto_load_next_img_topCarousel);
  e.preventDefault();
}
function clickLoadNextImage(e) {
  loadNextImage();
  //stop auto background loader.
  clearInterval(auto_load_next_img_topCarousel);
  e.preventDefault();
}
function loadNextImage() {
  const n = 7; //number of carousel images
  // let currentBgImg = topCarousel.style.backgroundImage;
  let currentBgImg = topCarousel.src;
  let i = parseInt(currentBgImg[currentBgImg.indexOf("d") + 1]); //number of current image (d1? d2? ... ? d7?)
  let ballI = document.querySelector("#balls :nth-child(" + i + ")");
  ballI.classList.remove("active-ball");
  //go to previous image number
  if (i == 1) {
    i = 7;
  } else {
    i = i - 1;
  }
  
  // topCarousel.style.backgroundImage = "url('./img/d" + i + ".jpg')";
  topCarousel.src = "./img/d" + i + ".jpg";
  ballI = document.querySelector("#balls :nth-child(" + i + ")");
  ballI.classList.add("active-ball");
}
