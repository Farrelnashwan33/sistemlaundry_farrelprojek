$(document).ready(function() {
    let cart = [];
    let additionalDays = 0;
    let deliveryService = 'GRAB EXPRESS';

    // Load cart from localStorage
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCart();
    }

    // Add to cart
    $('.add-to-cart').click(function() {
        const item = $(this).data('item');
        const price = $(this).data('price');
        const kg = $(this).closest('.card-body').find('.kg-input').val();

        if (kg > 0) {
            cart.push({ item, price, kg });
            updateCart();
        }
    });

    // New Order
    $('#new-order-btn').click(function() {
        $('#newOrderModal').modal('show');
    });

    // Submit new order form
    $('#new-order-form').submit(function(e) {
        e.preventDefault();
        const itemName = $('#item-name').val();
        const itemPrice = $('#item-price').val();
        const itemKg = $('#item-kg').val();
        additionalDays = $('#additional-days').val();
        deliveryService = $('#delivery-service').val();

        if (itemName && itemPrice && itemKg) {
            cart.push({ item: itemName, price: itemPrice, kg: itemKg });
            updateCart();
            $('#newOrderModal').modal('hide');
        }
    });

    // Checkout
    $('#checkout-btn').click(function() {
        const totalKg = cart.reduce((sum, item) => sum + parseInt(item.kg), 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.kg), 0);
        const additionalPrice = additionalDays * 5000; // Additional price per day
        const pickupDate = new Date();
        pickupDate.setDate(pickupDate.getDate() + 3 + parseInt(additionalDays) + totalKg); // Default 3 days + additional days + total kg

        // Apply discount if totalKg > 4
        let discount = 0;
        if (totalKg > 4) {
            discount = totalPrice * 0.1; // 10% discount
        }

        const finalPrice = totalPrice + additionalPrice - discount;

        $('#total-price').text(finalPrice);
        $('#additional-days').text(additionalDays);
        $('#additional-price').text(additionalPrice);
        $('#pickup-date').text(pickupDate.toLocaleDateString());
        $('#delivery-service').text(deliveryService);

        $('#paymentModal').modal('show');
    });

    // Update cart
    function updateCart() {
        $('#cart-items').empty();
        cart.forEach((item, index) => {
            $('#cart-items').append(`
                <li class="list-group-item">
                    <span>${item.item} - ${item.kg} kg</span>
                    <span>Rp ${item.price * item.kg}</span>
                    <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Hapus</button>
                </li>
            `);
        });

        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Remove item from cart
    $(document).on('click', '.remove-item', function() {
        const index = $(this).data('index');
        cart.splice(index, 1);
        updateCart();
    });

    // Notification button
    $('#notification-btn').click(function() {
        alert('Tidak ada notifikasi baru.');
    });
});
