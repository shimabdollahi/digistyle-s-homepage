// Get the container element
const section = document.getElementById("visual-category-menu");

// Get all buttons with class="btn" inside the container
const tabItems = section.getElementsByClassName("tab-item");
const tabItemsContainer = section.getElementsByTagName("ul")[0];
const tabContents = section.getElementsByClassName("show-visual-category-menu");
//console.log(tabContents);
const tabContentsContainer = document.getElementById("show-visual-category-menu");
// Loop through the buttons and add the active class to the currentTabItem/clicked button
loadVCMEventListeners(); //VCM stands for visual category menu
function loadVCMEventListeners() {
  tabItems[0].addEventListener("click", function(){
    changeActiveTab(0);});
  tabItems[1].addEventListener("click", function(){
    changeActiveTab(1);});
  tabItems[2].addEventListener("click", function(){
    changeActiveTab(2);});
  tabItems[3].addEventListener("click", function(){
    changeActiveTab(3);});
}

function changeActiveTab(index) {
  var currentTabItem = tabItemsContainer.getElementsByClassName("active");
  var currentTabContent =
    tabContentsContainer.getElementsByClassName("active");
  currentTabItem[0].classList.remove("active");
  currentTabContent[0].classList.remove("active");
  tabItems[index].classList.add("active");
  tabContents[index].classList.add("active");
}