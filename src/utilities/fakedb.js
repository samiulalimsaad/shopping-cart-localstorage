export const addToDB = (product) => {
    const products = JSON.parse(localStorage.getItem("ema-john")) || {};
    console.log(products);
    if (products && products[product.id]) {
        products[product.id] = products[product.id] + 1;
    } else {
        products[product.id] = 1;
    }
    localStorage.setItem("ema-john", JSON.stringify(products));
};

export const getProducts = () => {
    fetch("/products.json")
        .then((res) => res.json())
        .then((data) => data);
};
