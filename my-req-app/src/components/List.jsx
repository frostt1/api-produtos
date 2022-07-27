import React from "react";
import { useFetch } from "../hooks/useFetch";


const List = () => {
    const { products, loading, error } = useFetch()
    return <div>
      {error && <p>{error}</p>}
        {loading && <p className="loading">Carregando, aguarde...</p>}
    {!loading &&
    <div>
      {products.map((item, key) => (
        <div key={key}>
          <h2>{item.name}</h2>
          <p>   Preço: R$ {item.price}</p>
        </div>
      ))}
    </div>}
    </div>;
};

export default List;
