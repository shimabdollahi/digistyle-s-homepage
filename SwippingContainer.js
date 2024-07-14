const suggestionLeftSwipperBtn = document.getElementById(
  "suggestion-swipping-container-sba-left"
);
const suggestionRightSwipperBtn = document.getElementById(
  "suggestion-swipping-container-sba-right"
);
const suggestionProductCards = document.querySelectorAll(
  ".incredible-suggestion-card"
);

const MVRLeftSwipperBtn = document.getElementById(
  "most-visited-recently-swipping-container-sba-left"
);
const MVRRightSwipperBtn = document.getElementById(
  "most-visited-recently-swipping-container-sba-right"
);
const MVRProductCards = document.querySelectorAll(
  ".most-visited-recently-Pcard"
);

const RBSLeftSwipperBtn = document.getElementById(
  "recent-bestsellers-swipping-container-sba-left"
);
const RBSRightSwipperBtn = document.getElementById(
  "recent-bestsellers-swipping-container-sba-right"
);
const RBSProductCards = document.querySelectorAll(
  ".recent-bestsellers-Pcard"
);

const TMRLeftSwipperBtn = document.getElementById(
  "the-most-recent-swipping-container-sba-left"
);
const TMRRightSwipperBtn = document.getElementById(
  "the-most-recent-swipping-container-sba-right"
);
const TMRProductCards = document.querySelectorAll(
  ".the-most-recent-Pcard"
);

const YRVLeftSwipperBtn = document.getElementById(
  "your-recent-visits-swipping-container-sba-left"
);
const YRVRightSwipperBtn = document.getElementById(
  "your-recent-visits-swipping-container-sba-right"
);
const YRVProductCards = document.querySelectorAll(
  ".your-recent-visits-Pcard"
);

const WSLeftSwipperBtn = document.getElementById(
  "week-style-swipping-container-sba-left"
);
const WSRightSwipperBtn = document.getElementById(
  "week-style-swipping-container-sba-right"
);
const WSProductCards = document.querySelectorAll(
  ".week-style-Pcard"
);

loadSwippingContainerEventListeners();

function loadSwippingContainerEventListeners() {
  initCardsTranslateX(suggestionProductCards);
  initCardsTranslateX(MVRProductCards);
  initCardsTranslateX(RBSProductCards);
  initCardsTranslateX(TMRProductCards);
  initCardsTranslateX(YRVProductCards);
  initCardsTranslateX(WSProductCards);
  initLeftSwipperVisibility(suggestionProductCards,suggestionLeftSwipperBtn);
  initLeftSwipperVisibility(MVRProductCards,MVRLeftSwipperBtn);
  initLeftSwipperVisibility(RBSProductCards,RBSLeftSwipperBtn);
  initLeftSwipperVisibility(TMRProductCards,TMRLeftSwipperBtn);
  initLeftSwipperVisibility(YRVProductCards,TMRLeftSwipperBtn);
  initLeftSwipperVisibility(WSProductCards,WSLeftSwipperBtn);
  suggestionLeftSwipperBtn.addEventListener("click", function () {
    leftSwipe(
      suggestionProductCards,
      suggestionLeftSwipperBtn,
      suggestionRightSwipperBtn
    );
  });
  suggestionRightSwipperBtn.addEventListener("click", function () {
    rightSwipe(
      suggestionProductCards,
      suggestionLeftSwipperBtn,
      suggestionRightSwipperBtn
    );
  });
  MVRLeftSwipperBtn.addEventListener("click", function () {
    leftSwipe(
      MVRProductCards,
      MVRLeftSwipperBtn,
      MVRRightSwipperBtn
    );
  });
  MVRRightSwipperBtn.addEventListener("click", function () {
    rightSwipe(
      MVRProductCards,
      MVRLeftSwipperBtn,
      MVRRightSwipperBtn
    );
  });
  RBSLeftSwipperBtn.addEventListener("click", function () {
    leftSwipe(
      RBSProductCards,
      RBSLeftSwipperBtn,
      RBSRightSwipperBtn
    );
  });
  RBSRightSwipperBtn.addEventListener("click", function () {
    rightSwipe(
      RBSProductCards,
      RBSLeftSwipperBtn,
      RBSRightSwipperBtn
    );
  });
  TMRLeftSwipperBtn.addEventListener("click", function () {
    leftSwipe(
      TMRProductCards,
      TMRLeftSwipperBtn,
      TMRRightSwipperBtn
    );
  });
  TMRRightSwipperBtn.addEventListener("click", function () {
    rightSwipe(
      TMRProductCards,
      TMRLeftSwipperBtn,
      TMRRightSwipperBtn
    );
  });
  YRVLeftSwipperBtn.addEventListener("click", function () {
    leftSwipe(
      YRVProductCards,
      YRVLeftSwipperBtn,
      YRVRightSwipperBtn
    );
  });
  YRVRightSwipperBtn.addEventListener("click", function () {
    rightSwipe(
      YRVProductCards,
      YRVLeftSwipperBtn,
      YRVRightSwipperBtn
    );
  });
  WSLeftSwipperBtn.addEventListener("click", function () {
    leftSwipe(
      WSProductCards,
      WSLeftSwipperBtn,
      WSRightSwipperBtn
    );
  });
  WSRightSwipperBtn.addEventListener("click", function () {
    rightSwipe(
      WSProductCards,
      WSLeftSwipperBtn,
      WSRightSwipperBtn
    );
  });
}

function initCardsTranslateX(cards) {
  cards.forEach(function (card) {
    card.style.transform = "translateX(0px)";
  });
}
function initLeftSwipperVisibility(cards,leftSwipperElement){
  if(cardsWidth(cards) <= displayPositionMovingUnit(cards)){
    leftSwipperElement.style.visibility = "hidden";
  }
}
function cardsWidth(cards){
  return (cards.length) * getTheCardWidth(cards);
}
function getMaxLeftSwippingPos(cards) {
  return (cards.length - 1) * getTheCardWidth(cards);
}

function getTheCardWidth(cards) {
  let sampleCard = cards[0];
  return sampleCard.offsetWidth + sampleCard.style.marginLeft;
}
function displayPositionMovingUnit(cards) {
  if (window.innerWidth < 768) {
    // < md
    return 2 * getTheCardWidth(cards);
  } else {
    // >= md
    return 3 * getTheCardWidth(cards);
  }
}
function leftSwipe(cards, leftSwipperElement, rightSwipperElement) {
  const DISPLAY_POSITION_MOVE_UNIT = displayPositionMovingUnit(cards);
  const MAX_LEFT_SWIPPING_POS = getMaxLeftSwippingPos(cards);
  rightSwipperElement.style.visibility = "visible";
  cards.forEach(function (card) {
    let currentPos = getValueOfTranslate(card);
    let newPos = currentPos + DISPLAY_POSITION_MOVE_UNIT;
    if (newPos <= MAX_LEFT_SWIPPING_POS) {
      card.style.transform = "translateX(" + newPos + "px)";
      if (newPos == MAX_LEFT_SWIPPING_POS) {
        leftSwipperElement.style.visibility = "hidden";
      }
    }
  });
  //e.preventDefault();
}

function rightSwipe(cards, leftSwipperElement, rightSwipperElement) {
  const DISPLAY_POSITION_MOVE_UNIT = displayPositionMovingUnit(cards);
  leftSwipperElement.style.visibility = "visible";
  cards.forEach(function (card) {
    let currentPos = getValueOfTranslate(card);
    let newPos = currentPos - DISPLAY_POSITION_MOVE_UNIT;
    if (newPos >= 0) {
      card.style.transform = "translateX(" + newPos + "px)";
      if (newPos == 0) {
        rightSwipperElement.style.visibility = "hidden";
      }
    }
  });
  //e.preventDefault();
}

function getValueOfTranslate(element) {
  let str = element.style.transform; //it gets something like: 'translateX(70px)'
  let currentPos = str.substring(str.indexOf("(") + 1, str.indexOf(")") - 2); //it gets the value of vw embedded in str
  return parseInt(currentPos);
}
