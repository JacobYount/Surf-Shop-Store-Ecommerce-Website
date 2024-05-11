document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', function(event) {
            var button = event.target;
            var shopItem = button.parentElement;
            var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
            var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
            var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
            addItemToCart(title, price, imageSrc);
        });
    }

    function addItemToCart(title, price, imageSrc) {
        // Check if cart already exists in local storage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Check if item is already in cart
        var existingItem = cart.find(item => item.title === title);
        if (existingItem) {
            alert('This item is already added to the cart');
            return;
        }
        
        var cartItem = {
            title: title,
            price: price,
            imageSrc: imageSrc,
            quantity: 1
        };

        cart.push(cartItem);
        // Update local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Play the audio only if the item is not already in the cart
        playAddToCartSound();
    }
    
    function playAddToCartSound() {
        var audio = new Audio("../Surf Shop Store Audios/Cash-Register-Sound.mp3"); // Replace "path/to/add_to_cart_sound.mp3" with the actual path to your audio file
        audio.play();
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                arrow.classList.remove('active');
            } else {
                answer.style.display = 'block';
                arrow.classList.add('active');
            }
        });
    });
});












// Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        // Display the first slide
        showSlides(1);
    });

    var slideIndex = 1;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("thumbnail");

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }