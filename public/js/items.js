async function itemFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('#item-name').value.trim();
    const quantity = document.querySelector('#item-quantity').value;

  
    if (name && quantity) {
      const response = await fetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({
          name,
          quantity,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }

    console.log(name, quantity)
};

document.querySelector('.item-submit').addEventListener('submit', itemFormHandler);