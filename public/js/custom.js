/* eslint-disable no-undef */
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
  }
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    let mybutton = document.getElementById("btn-back-to-top");
    let title =  document.getElementById("title");
    let nav =  document.getElementById("fixNav");
    let cart =  document.getElementById("cart");
    mybutton.addEventListener("click", backToTop);
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
      title.style.display = "none";
      nav.style.backgroundColor = "#b9d3d3";
      nav.style.boxShadow = "0px 2px 2px rgba(0,0,0,0.5)";
      cart.style.marginTop = "0";
    } else {
      mybutton.style.display = "none";
      title.style.display = "block";
      nav.style.backgroundColor = "transparent";
      nav.style.boxShadow = "none";
      cart.style.marginTop = "-40px";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  
  
  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  
  // to get current year
  function getYear() {
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      document.querySelector("#displayYear").innerHTML = currentYear;
  }
  
  getYear();
  
  