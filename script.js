document.addEventListener('DOMContentLoaded', function () {
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            const urunListesi = document.getElementById('urunListesi');
            products.forEach(product => {
                const urunDiv = document.createElement('div');
                urunDiv.classList.add('urun');
                urunDiv.innerHTML = `
                    <img src="images/${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p>Açıklama: ${product.description}</p>
                    <p>Fiyat: ${product.price} TL</p>
                    <button>Sepete Ekle</button>
                `;
                urunListesi.appendChild(urunDiv);
            });
        });
});
