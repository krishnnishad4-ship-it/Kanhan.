// Interactive Cart Counter Functionality
let cartCount = 0;
const cartCountElement = document.getElementById('cartCount');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Visual feedback on button click
        const originalText = button.textContent;
        button.textContent = "ADDED ✓";
        button.style.backgroundColor = "var(--accent-color)";
        button.style.color = "var(--bg-color)";
        button.style.borderColor = "var(--accent-color)";
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = "transparent";
            button.style.color = "var(--text-primary)";
            button.style.borderColor = "var(--text-primary)";
        }, 1000);
    });
});
