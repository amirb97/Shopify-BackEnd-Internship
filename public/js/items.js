let shipment = [];

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
};

async function itemEditHandler(id) {
  console.log('edit');
  console.log(id);
};

async function itemDeleteHandler(id) {
  const response = await fetch(`/api/items/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json'}
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

function addShipmentHandler(id) {
  shipment.push(id);

  let element = document.getElementById('shipment');
  element.innerHTML += id + ", ";
  element.classList.add("h3");
};

async function submitShipment() {
  console.log(shipment);
  
  for(let i=0; i<shipment.length; i++) {
    itemDeleteHandler(shipment[i]);
  };
};

document.querySelector('.item-submit').addEventListener('submit', itemFormHandler);