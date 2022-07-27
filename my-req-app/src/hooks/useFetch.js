import { useState, useEffect } from "react";
import { api } from "../api";

export const useFetch = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const json = await api.getProducts();
                setProducts(json);
            } catch (error) {
                setLoading(false);
                setError(alert("ERRO! TENTE NOVAMENTE MAIS TARDE."));
            }
            setLoading(false);
        }

        fetchData();
    }, []);
    return { products, loading, error };
};
