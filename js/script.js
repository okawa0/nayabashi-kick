// ヒーロー画像の切り替え
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

// カルーセルバナー
window.addEventListener("load", () => {
  const el = document.querySelector('[data-js="swiper"]');
  if (!el) return;

  new Swiper(el, {
    loop: true,

    slidesPerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },

    spaceBetween: 16,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 3000,              // 次に動き出すまでの待機時間
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    speed: 1000,                // ← アニメーション時間（ms）
  });
});

// お知らせのフェードアニメーション
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const el = document.querySelector('[data-js="fade"]');
  if (!el) return;

  gsap.from(el, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});