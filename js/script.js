window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-head__item"),
    tabsContent = document.querySelectorAll(".tab-body__container"),
    tabsParent = document.querySelector(".tab-head__container");

  function hideTabContent() {
    tabsContent.forEach((i) => {
      i.style.display = "none";
    });
    tabs.forEach((i) => {
      i.classList.remove("active");
    });
  }
  hideTabContent();
  function showTabContent(i = 0) {
    tabsContent[i].style.display = "flex";
    tabs[i].classList.add("active");
  }
  showTabContent();

  tabsParent.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-head__item")) {
      tabs.forEach((item, i) => {
        if (e.target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  //Swiper
  const swiperSupport = new Swiper(".swiper-support", {
    slidesPerView: 5.5,
    speed: 400,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // const swiperReviews = new Swiper(".swiper-reviews", {
  //   slidesPerView: 1,
  //   speed: 400,
  //   spaceBetween: 0,
  //   grabCursor: true,
  //   autoHeight: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });

  //animation
  function onEntry(e) {
    e.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }
  const options = { threshold: [0.5] };
  const observer = new IntersectionObserver(onEntry, options);
  const elements = document.querySelectorAll(".element-animation");
  for (const elm of elements) {
    observer.observe(elm);
  }

  // Burger menu
  // open
  const burger = document.querySelectorAll(".navbar-burger");
  const menu = document.querySelectorAll(".navbar-menu");

  if (burger.length && menu.length) {
    for (let i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  if (close.length) {
    for (let i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }

  if (backdrop.length) {
    for (let i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
        }
      });
    }
  }
});
