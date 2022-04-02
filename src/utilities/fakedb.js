export const addToDB = (product) => {
    const products = JSON.parse(localStorage.getItem("ema-john")) || {};
    if (products && products[product.id]) {
        products[product.id] = products[product.id] + 1;
    } else {
        products[product.id] = 1;
    }
    localStorage.setItem("ema-john", JSON.stringify(products));
};

export const getProducts = async () => {
    const res = await fetch("/products.json");
    const products = await res.json();
    const tempProducts = JSON.parse(localStorage.getItem("ema-john")) || {};
    let temp = [];
    if (tempProducts) {
        for (const p in tempProducts) {
            const t = products.find((pp) => pp.id === p);
            if (t) {
                t.quantity = t.quantity + +tempProducts[p];
                temp.push(t);
            }
        }
    }
    console.log(temp);
    return temp;
};
