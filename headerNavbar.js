const womenLink = document.getElementById("nav-link-forWomen");
const menLink = document.getElementById("nav-link-forMen");
const childrenLink = document.getElementById("nav-link-forChildren");
const healthBeautyLink = document.getElementById("nav-link-health-beauty");
const brandsLink = document.getElementById("nav-link-brands");

const navLinkMenuForWomen = document.getElementById("nav-link-menu-forWomen");
const navLinkMenuForMen = document.getElementById("nav-link-menu-forMen");
const navLinkMenuForChildren = document.getElementById(
  "nav-link-menu-forChildren"
);
const navLinkMenuHealthBeauty = document.getElementById("nav-link-menu-healthBeauty");
const navLinkMenuBrands = document.getElementById("nav-link-menu-brands");

const forWomenMenu = document.querySelectorAll(".nav-link-menu-forWomen");
const forMenMenu = document.querySelectorAll(".nav-link-menu-forMen");
const forChildrenMenu = document.querySelectorAll(".nav-link-menu-forChildren");
const healthBeautyMenu = document.querySelectorAll(".nav-link-menu-healthBeauty");
const brandsMenu = document.querySelectorAll(".nav-link-menu-brands");

const navbarContents = new Map();
navbarContents.set("women",[womenLink, navLinkMenuForWomen, forWomenMenu]);
//["women"] = [womenLink, navLinkMenuForWomen, forWomenMenu];
navbarContents.set("men", [menLink, navLinkMenuForMen, forMenMenu]);
//["men"] = [menLink, navLinkMenuForMen, forMenMenu];
navbarContents.set("children", [
  childrenLink,
  navLinkMenuForChildren,
  forChildrenMenu,
]);
navbarContents.set("healthBeauty", [healthBeautyLink, navLinkMenuHealthBeauty, healthBeautyMenu]);
navbarContents.set("brands", [brandsLink, navLinkMenuBrands, brandsMenu]);
// ["children"] = [
//   childrenLink,
//   navLinkMenuForChildren,
//   forChildrenMenu,
// ];

//////////////////////////////////////////////////////////////////
loadHeaderNavbarEventListeners();

function loadHeaderNavbarEventListeners() {
  //console.log(navbarContents);
  navbarContents.forEach(function (values, key) {
    let link = values[0];
    let menu = values[2];
    let navLinkMenu=values[1];
    // console.log(link);
    // console.log(menu);
    // console.log(navLinkMenu);

    // womenLink.addEventListener("mouseover", showWomenMenu);
    link.addEventListener("mouseover", function ( e) {
      menu.forEach(function (element) {
        element.style.visibility = "visible";
      });
      e.preventDefault();
    });

    //womenLink.addEventListener("mouseleave", hideWomenMenu);
    link.addEventListener("mouseleave", function(e) {
      menu.forEach(function (element) {
        element.style.visibility = "hidden";
        //element.style.display = "none";
      });
      e.preventDefault();
    });

    // forWomenMenu.forEach(function (element) {
    //   element.addEventListener("mouseenter", showWomenMenu);
    // });
    menu.forEach(function (element) {
      element.addEventListener("mouseenter", function (e) {
        menu.forEach(function (element) {
          element.style.visibility = "visible";
        });
      });
    });
    // navLinkMenuForWomen.addEventListener("mouseleave", hideWomenMenu);
    navLinkMenu.addEventListener("mouseleave", function(e) {
      menu.forEach(function (element) {
       element.style.visibility = "hidden";
       //element.style.display = "none";
      });
    });
  
  });
  // womenLink.addEventListener("mouseover", showWomenMenu);
  // womenLink.addEventListener("mouseleave", hideWomenMenu);
  // forWomenMenu.forEach(function (element) {
  //   element.addEventListener("mouseenter", showWomenMenu);
  // });
  // navLinkMenuForWomen.addEventListener("mouseleave", hideWomenMenu);
}

//****************************************************************
// function showWomenMenu(e) {
//   forWomenMenu.forEach(function (element) {
//     element.style.visibility = "visible";
//   });
//   e.preventDefault();
// }
// function hideWomenMenu(e) {
//   forWomenMenu.forEach(function (element) {
//     element.style.visibility = "hidden";
//   });
//   e.preventDefault();
// }
