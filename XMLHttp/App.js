const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://dummyjson.com/products', true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const products = JSON.parse(xhr.responseText).products;
    const container = document.getElementById('product-container');
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      
      const image = document.createElement('img');
      image.src = product.thumbnail;
      
      const title = document.createElement('h3');
      title.textContent = product.title;
      
      const price = document.createElement('p');
      price.textContent = `Price: $${product.price}`;
      
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(price);
      container.appendChild(card);
    });
  } else {
    console.error('Error:', xhr.status);
  }
};

xhr.onerror = function () {
  console.error('Request failed');
};

xhr.send();
