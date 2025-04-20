document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll(".nav li a");
  navLinks.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.forEach(unit => {
        unit.classList.remove("active")
      })
      item.classList.add("active"); 
    })
  })

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
});