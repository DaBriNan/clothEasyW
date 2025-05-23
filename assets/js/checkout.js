document.addEventListener('DOMContentLoaded', function() {
    // Get cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal-amount');
    const totalElement = document.getElementById('total-amount');
    const paymentOptions = document.querySelectorAll('.payment-option');
    const cardForm = document.getElementById('card-form');
    const completeOrderBtn = document.getElementById('complete-order');

    // Render cart items
    function renderCartItems() {
        let subtotal = 0;
        cartItemsContainer.innerHTML = '';

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p>Cantidad: ${item.quantity}</p>
                        <p>$${itemTotal.toFixed(2)}</p>
                    </div>
                </div>
            `;
        });

        // Update totals
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        const total = subtotal + 4.99; // Adding shipping cost
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Handle payment method selection
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            option.classList.add('selected');

            // Show/hide card form based on selection
            if (option.dataset.method === 'card') {
                cardForm.classList.remove('hidden');
            } else {
                cardForm.classList.add('hidden');
            }
        });
    });

    // Handle order completion
    completeOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Basic form validation
        const requiredFields = document.querySelectorAll('input[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        if (!isValid) {
            alert('Por favor, complete todos los campos requeridos');
            return;
        }

        // Get selected payment method
        const selectedPayment = document.querySelector('.payment-option.selected');
        if (!selectedPayment) {
            alert('Por favor, seleccione un método de pago');
            return;
        }

        // Validate card details if credit card is selected
        if (selectedPayment.dataset.method === 'card') {
            const cardFields = document.querySelectorAll('#card-form input');
            let cardValid = true;

            cardFields.forEach(field => {
                if (!field.value) {
                    cardValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            if (!cardValid) {
                alert('Por favor, complete todos los datos de la tarjeta');
                return;
            }
        }

        // Simulate order processing
        completeOrderBtn.disabled = true;
        completeOrderBtn.textContent = 'Procesando...';

        setTimeout(() => {
            alert('¡Pedido completado con éxito!');
            // Clear cart
            localStorage.removeItem('cart');
            // Redirect to home page
            window.location.href = '../index.html';
        }, 2000);
    });

    // Initial render
    renderCartItems();
});