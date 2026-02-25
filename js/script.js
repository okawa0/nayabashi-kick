document.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  if (!mediaQuery.matches) {
    return;
  }

  const images = document.querySelectorAll(".hero__image");
  let currentIndex = 0;

  setInterval(function () {
    images[currentIndex].classList.remove("hero__image--active");

    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    images[currentIndex].classList.add("hero__image--active");
  }, 4000);
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 24, // ← ここで間隔指定（px）
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // ← クリックで移動できる
    },
  });
});
