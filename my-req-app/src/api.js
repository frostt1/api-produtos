const BASE_URL = "http://localhost:3000";

export const api = {
    getProducts: async () => {
        let response = await fetch(`${BASE_URL}/products`);
        let json = await response.json();
        return json;
    },

    addProduct: async (product) => {
        let json = await fetch(`${BASE_URL}/products`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(product),
        });
    },
};
