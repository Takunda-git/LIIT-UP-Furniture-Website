const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visisbility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click
());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click ());
});

// Typing Text Code

const typed = new Typed(".multiple-text", {
    strings: ['Best Furniture'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
   loop: true,
   grabCursor: true,
   spaceBetween: 25,

    //If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    //Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: 'swiper-button-prev',
    },

    //Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
          768: {
            slidesPerView: 2
        },
          1024: {
            slidesPerView: 3
        },

    }
})



  $(document).ready(function () {
    // Track total items in the cart
    let totalItems = 0;

    // Event for all Add to Cart buttons
    $('.addtocart').on('click', function () {
      const button = $(this);
      const cart = $('#cart');

      // Increment total count
      totalItems++;

      // Animate badge on the button
      button.addClass("sendtocart");

      // Delay to let animation play
      setTimeout(function () {
        button.removeClass("sendtocart");

        // Update cart counter and shake effect
        cart.attr("data-totalitems", totalItems).addClass("shake");

        // Remove shake after animation
        setTimeout(function () {
          cart.removeClass("shake");
        }, 500);
      }, 1000);
    });
  });




    
