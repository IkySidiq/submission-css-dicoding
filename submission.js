
document.addEventListener('DOMContentLoaded', function() {
  // DOM NAVBAR
  const navLinks = document.querySelectorAll(".nav li a");
  navLinks.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.forEach(unit => {
        unit.classList.remove("active")
      })
      item.classList.add("active"); 
    })
  })

  // AUTOMATIC INTERVAL
  let counter = 1;
  let slideInterval;
  const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
  const autoCarousel = () => {
    document.getElementById("radio1").checked = true;
    startInterval();
    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', function() {
        if (this.checked) {
          clearInterval(slideInterval);
          counter = parseInt(this.id.replace('radio', ''));
          startInterval();
        }
      });
    });
  }
  function startInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  }
  function nextSlide() {
    counter = (counter % 4) + 1;
    document.getElementById("radio" + counter).checked = true;
  }
  autoCarousel();

  const hamburger = document.querySelector(".hamburger");
  const navItem = document.querySelector(".nav");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItem.classList.toggle("active");
  })

  // RESPONSIF NAVBAR 576px
  let lastScrollTop = 0;
  const navbar = document.querySelector(".nav-container");

  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-100px";
      navItem.classList.remove("active");
      hamburger.classList.remove("active");
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  });