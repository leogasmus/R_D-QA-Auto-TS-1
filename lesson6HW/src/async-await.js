async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products/');
    const data = await response.json();
    if (!response.ok) throw new Error(`Помилка виконнаня запиту: ${response.status}`);
    return data;
}

function counter(arr) {
    if (Array.isArray(arr)) return arr.length;
}

(async () => {
    const data = await getProducts();
    console.log('Кількість продуктів: ', counter(data));
})();
