// Carousel
const owl = $(".owl-carousel");
owl.owlCarousel({
  items: 2,
  margin: 20,
  loop: true,
});

$(".right").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".left").click(function () {
  owl.trigger("prev.owl.carousel");
});

// modalWindow
const modalWindow = document.querySelector(".modal-window");
const navBtn = document.querySelector(".nav-btn");
const clouseBtn = document.querySelector(".modal-window__clouse-btn");

navBtn.addEventListener("click", function () {
  modalWindow.classList.remove("hidden");
});

clouseBtn.addEventListener("click", function () {
  modalWindow.classList.add("hidden");
});
