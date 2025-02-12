async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Помилка виконнаня запиту: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Помилка доступу до ${url}:`, error);
        throw error;
    }
}

async function getProducts() {
    try {
        return await fetchData('https://not-real-url.com/r_d/');
    } catch {
        console.warn('Помилка виконання першої спроби, спроба запиту на інший ресурс...');

        try {
            return await fetchData('https://fakestoreapi.com/products/');
        } catch {
            throw new Error('Обидва запити не вдалися. Дані неможливо отримати.');
        }
    }
}

(async () => {
    try {
        const data = await getProducts();
        console.log('Отримані дані:', data);
    } catch (error) {
        console.error('Фатальна помилка:', error.message);
    }
})();
