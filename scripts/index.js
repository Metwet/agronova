//smoth scroll

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav__link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

// handel service click

const services = document.querySelectorAll(".service");
const servicesUp = document.querySelectorAll(".service__up");
const servicesDown = document.querySelectorAll(".service__down");

services.forEach((service, index) => {
  let isOpen = false;
  service.addEventListener("click", () => {
    if (!isOpen) {
      servicesUp.forEach((up, idx) => {
        if (idx !== index) {
          up.style.top = "0";
        }
      });
      servicesDown.forEach((down, idx) => {
        if (idx !== index) {
          down.style.top = "100%";
        }
      });
      servicesUp[index].style.top = "-100%";
      servicesDown[index].style.top = "0";
    } else {
      servicesUp[index].style.top = "0";
      servicesDown[index].style.top = "100%";
    }
    isOpen = !isOpen;
  });
});
