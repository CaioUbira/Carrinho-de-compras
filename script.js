
const cartItems = document.querySelectorAll('.cart-item');

function updateSummary() {
  let subtotal = 0;
  
  document.querySelectorAll('.cart-item').forEach(item => {
    const price = parseFloat(item.querySelector('.price').textContent.replace('R$ ', ''));
    const quantity = parseInt(item.querySelector('.item-quantity span').textContent);
    const total = price * quantity;
    item.querySelector('.item-total').textContent = `R$ ${total.toFixed(2)}`;
    subtotal += total;
  });

  document.querySelector('.summary-line span:nth-child(2)').textContent = `R$ ${subtotal.toFixed(2)}`;
  document.querySelector('.summary-total span:nth-child(2)').textContent = `R$ ${subtotal.toFixed(2)}`;
}

cartItems.forEach(item => {
  const btns = item.querySelectorAll('.btn-qty');
  const quantityEl = item.querySelector('.item-quantity span');

  btns[0].addEventListener('click', () => {
    let qty = parseInt(quantityEl.textContent);
    if (qty > 1) quantityEl.textContent = qty - 1;
    updateSummary();
  });

  btns[1].addEventListener('click', () => {
    let qty = parseInt(quantityEl.textContent);
    quantityEl.textContent = qty + 1;
    updateSummary();
  });

  item.querySelector('.btn-remove').addEventListener('click', () => {
    item.remove();
    updateSummary();
  });
});

updateSummary();
