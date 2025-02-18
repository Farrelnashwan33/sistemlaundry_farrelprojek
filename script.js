$(document).ready(function () {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const $cartTable = $("#cart-items");
    const $totalPriceElement = $("#total-price");
    const $paymentModal = $("#payment-modal");
    const $deliveryEstimate = $("#delivery-estimate");
    const $pickupDate = $("#pickup-date");
    const $paymentTotal = $("#payment-total");

    // Format currency to "Rp xx.xxx"
    function formatCurrency(amount) {
        return `Rp ${amount.toLocaleString("id-ID")}`;
    }

    // Render cart items
    function renderCart() {
        $cartTable.empty();
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            const subtotal = item.price * item.weight;
            totalPrice += subtotal;

            const row = `
                <tr>
                    <td>${item.type}</td>
                    <td>${formatCurrency(item.price)}</td>
                    <td>${item.weight} Kg</td>
                    <td>${formatCurrency(subtotal)}</td>
                    <td><button data-index="${index}" class="remove-item">Hapus</button></td>
                </tr>
            `;
            $cartTable.append(row);
        });

        $totalPriceElement.text(formatCurrency(totalPrice));
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    // Add item to cart
    $(".add-to-cart").on("click", function () {
        const $item = $(this).closest(".item");
        const type = $item.data("type");
        const price = parseInt($item.data("price"));
        const weight = parseFloat(prompt("Masukkan berat (kg):"));

        if (isNaN(weight) || weight <= 0) {
            alert("Berat harus berupa angka positif.");
            return;
        }

        cartItems.push({ type, price, weight });
        renderCart();
    });

    // Remove item from cart
    $cartTable.on("click", ".remove-item", function () {
        const index = $(this).data("index");
        cartItems.splice(index, 1);
        renderCart();
    });

    // Checkout and calculate total
    $("#checkout-button").on("click", function () {
        if (cartItems.length === 0) {
            alert("Keranjang kosong. Tambahkan item sebelum checkout.");
            return;
        }

        // Calculate delivery estimate
        const totalWeight = cartItems.reduce((acc, item) => acc + item.weight, 0);
        const deliveryTimeInHours = Math.ceil(totalWeight * 2); // Example: 2 hours per kg
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + deliveryTimeInHours);

        // Calculate pickup date
        const formattedPickupDate = currentDate.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        // Calculate total price
        const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.weight, 0);

        // Display in modal
        $deliveryEstimate.text(`${deliveryTimeInHours} jam`);
        $pickupDate.text(formattedPickupDate);
        $paymentTotal.text(formatCurrency(totalPrice));

        $paymentModal.fadeIn();
    });

    // Close modal
    $("#close-modal").on("click", function () {
        $paymentModal.fadeOut();
    });

    // Add custom item, weight, and cost
    $("#add-extra-item").on("click", function () {
        const type = prompt("Masukkan nama barang:");
        const price = parseInt(prompt("Masukkan harga total (Rp):"));
        const weight = parseFloat(prompt("Masukkan berat (kg):"));

        if (!type || isNaN(price) || isNaN(weight) || price <= 0 || weight <= 0) {
            alert("Input tidak valid. Pastikan semua data diisi dengan benar.");
            return;
        }

        cartItems.push({ type, price, weight });
        renderCart();
        alert(`${type} berhasil ditambahkan ke keranjang.`);
    });

    // Load prices dynamically via AJAX
    function fetchLaundryPrices() {
        $.ajax({
            url: "/api/laundry-prices", // Replace with your actual endpoint
            method: "GET",
            success: function (data) {
                $(".item").each(function () {
                    const $item = $(this);
                    const type = $item.data("type");
                    if (data[type]) {
                        $item.data("price", data[type]);
                        $item.find(".price").text(`${formatCurrency(data[type])} / kg`);
                    }
                });
            },
            error: function () {
                alert("Gagal memuat harga terbaru.");
            },
        });
    }

    // Initial render
    fetchLaundryPrices();
    renderCart();
});
