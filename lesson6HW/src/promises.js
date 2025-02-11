function getProducts() {
    return fetch('https://fakestoreapi.com/products/').then((res) => res.json());
}

function counter(arr) {
    if (Array.isArray(arr)) return arr.length;
}

getProducts().then((data) => {
    if (data) console.log('Кількість продуктів: ', counter(data));
});
