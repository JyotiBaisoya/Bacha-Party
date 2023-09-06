import React, { useState, useEffect } from "react";
import "../css/girls.css"

function BoysProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    fetch("https://nanhe-munhe-2.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const dat = data.filter((product)=>product.category =="boys")
        setProducts(dat);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Apply filters when nameFilter or priceFilter change
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    if (priceFilter) {
      const price = parseFloat(priceFilter);
      setFilteredProducts(filtered.filter((product) => product.price <= price));
    } else {
      setFilteredProducts(filtered);
    }
  }, [nameFilter, priceFilter, products]);

  return (
    <div >

<h2>Boys Products</h2>
     <div className="all-product">
     
      <div className="part">
      <div>
        <label>Name Filter:</label>
        <input
          type="text"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>
      <div>
        <label>Price Less Than:</label>
        <input
          type="number"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        />
      </div>
      </div>
      
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name.substring(0,30)}</h3>
            <p>Price: {product.price}</p>
            <a href={`/product/${product._id}`}>View Details</a>
          </div>
        ))}
      </div>
     </div>
    </div>
  );
}

export default BoysProducts;
