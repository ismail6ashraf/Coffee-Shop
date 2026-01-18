


let menuOpen = document.getElementById("menu-open");
let menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
});

menuClose.addEventListener("click", () => menuOpen.click());

//  Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

let btn = document.getElementById("btn")
window.onscroll = function () {
    if (window.scrollY >= 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    };
};

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})