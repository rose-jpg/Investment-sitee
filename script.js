var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header")

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active")
    const accordionItemBody = accordionItemHeader.nextElementSibling
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"
    } else {
      accordionItemBody.style.maxHeight = 0
    }
  })
})
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const close = document.querySelector("#close")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("activee")
  navMenu.classList.toggle("activee")
})

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("activee")
    navMenu.classList.remove("activee")
  })
)
window.addEventListener("scroll", function () {
  document.getElementById("nv").classList.toggle("hi", scrollY > 0)
  hamburger.classList.remove("activee")
  navMenu.classList.remove("activee")
})
close.addEventListener("click", () => {
  navMenu.classList.remove("activee")
})
