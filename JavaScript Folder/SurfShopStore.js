// Function to play the audio file
function playAudio() {
	

    // Get the audio element
    var audio = new Audio('../Final Website Audios/Cash-Register-Sound.mp3');

    // Play the audio
    audio.play();
}

// Attach the playAudio function to the button click event
document.getElementById('playButton').addEventListener('click', playAudio);
	
	
	
	

// JavaScript for image slideshow
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var thumbnails = document.getElementsByClassName("thumbnail");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < thumbnails.length; i++) {
            thumbnails[i].className = thumbnails[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        thumbnails[slideIndex - 1].className += " active";
    }















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
        
    }
    
});























document.addEventListener('DOMContentLoaded', function() {
    // Load cart items from local storage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCartItems(cart);
});

function displayCartItems(cart) {
    var cartItemContainer = document.querySelector('.cart-items');
    var totalPrice = 0;

    cart.forEach(function(item) {
        var cartRow = document.createElement('div');
        cartRow.classList.add('cart-row');
        var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${item.imageSrc}" width="100" height="100">
                <span class="cart-item-title">${item.title}</span>
            </div>
            <span class="cart-price cart-column">${item.price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="${item.quantity}">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`;
        cartRow.innerHTML = cartRowContents;
        cartItemContainer.appendChild(cartRow);

        totalPrice += parseFloat(item.price.replace('$', '')) * item.quantity;

        // Add event listener to remove button
        cartRow.querySelector('.btn-danger').addEventListener('click', function() {
            removeCartItem(item);
        });

        // Add event listener to quantity input
        cartRow.querySelector('.cart-quantity-input').addEventListener('change', function(event) {
            updateCartItemQuantity(item, event.target.value);
        });
    });

    // Display total price
    document.querySelector('.cart-total-price').innerText = '$' + totalPrice.toFixed(2);
}

function removeCartItem(itemToRemove) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var updatedCart = cart.filter(item => item.title !== itemToRemove.title);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    location.reload(); // Reload the page to reflect changes
}

function updateCartItemQuantity(itemToUpdate, newQuantity) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var updatedCart = cart.map(function(item) {
        if (item.title === itemToUpdate.title) {
            item.quantity = parseInt(newQuantity);
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    location.reload(); // Reload the page to reflect changes
}

		
		
		
		
		
		
	




if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}





let purchaseAlertShown = false;

function purchaseClicked() {
	
	
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Thank you for your purchase!');
        // Clear the cart items from local storage
        localStorage.removeItem('cart');
        // Clear the cart items displayed on the page
        var cartItemsElement = document.querySelector('.cart-items');
        cartItemsElement.innerHTML = '';
        // Reset the total price displayed on the page
        document.querySelector('.cart-total-price').innerText = '$0.00';
    }
    // Reset the flag to allow multiple alerts
    purchaseAlertShown = false;
}






function removeCartItem(event) {
    var buttonClicked = event.target;
    var cartItemRow = buttonClicked.parentElement.parentElement;
    var cartItemTitle = cartItemRow.querySelector('.cart-item-title').innerText;
    
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var updatedCart = cart.filter(item => item.title !== cartItemTitle);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    
    cartItemRow.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total += price * quantity;
    }
    total = Math.round(total * 100) / 100;
    if (total === 0) {
        document.getElementsByClassName('cart-total-price')[0].innerText = '$0.00';
    } else {
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total.toFixed(2);
    }
}











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
        var cartItem = {
            title: title,
            price: price,
            imageSrc: imageSrc,
            quantity: 1
        };

        // Check if cart already exists in local storage
        var cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Check if item is already in cart
        var existingItem = cart.find(item => item.title === title);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push(cartItem);
        }
        // Update local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
