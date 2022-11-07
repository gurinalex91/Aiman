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
    speed: 400,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5.5,
      },
    },
  });
  const swiperReviews = new Swiper(".swiper-reviews", {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 0,
    grabCursor: true,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

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

  //counters
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("data-target");
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 10);
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });

  //spheres
  const blocks = document.querySelectorAll(".development-section__item");
  blocks.forEach((item) => {
    item.addEventListener("mouseover", function () {
      this.firstElementChild.classList.add("animate-rotate360");
    });
    item.addEventListener("mouseout", function () {
      this.firstElementChild.classList.remove("animate-rotate360");
    });
  });

  //footer
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  // Burger menu
  // open
  const burger = document.querySelectorAll(".navbar-burger"),
    menu = document.querySelectorAll(".navbar-menu"),
    body = document.querySelector("body");

  if (burger.length && menu.length) {
    for (let i = 0; i < burger.length; i++) {
      burger[i].addEventListener("click", function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
          body.style.cssText = "overflow: hidden;";
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
          body.style.cssText = "overflow: visible;";
        }
      });
    }
  }

  if (backdrop.length) {
    for (let i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener("click", function () {
        for (let j = 0; j < menu.length; j++) {
          menu[j].classList.toggle("hidden");
          body.style.cssText = "overflow: visible;";
        }
      });
    }
  }
});
