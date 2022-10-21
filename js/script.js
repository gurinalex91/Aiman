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
      tabsContent[i].style.display = "block";
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
    const swiperSupport = new Swiper('.swiper-support', {
      slidesPerView: 5.5,
      speed: 400,
      spaceBetween: 0,
      grabCursor: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    const swiperReviews = new Swiper('.swiper-reviews', {
      slidesPerView: 1,
      speed: 400,
      spaceBetween: 0,
      grabCursor: true,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    
  });