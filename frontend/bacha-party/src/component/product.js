import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/product.css"
import Swal from "sweetalert2";
import Reviews from "./review";


function ProductDetail() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);

    async function handleAddtoCart() {
        //  console.log("jyoti")
        try {
            let res = await fetch(`https://nanhe-munhe-2.onrender.com/api/cart/add/${id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":localStorage.getItem("token")

                }
            })

            let data = await res.json();
             if(res.ok){
                Swal.fire(data.message)
             }else{
                Swal.fire("Please Login First!")
             }
            
        } catch (error) {
                 Swal.fire("Something Went Wrong!")
        }

    }

    useEffect(() => {
        // Fetch the product details based on productId
        fetch(`https://nanhe-munhe-2.onrender.com/api/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)

                setProduct(data);
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
            });
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Product Details</h2>
            <div className="product-detail">
                <div className="detail-img">  <img src={product[0].image} alt={product[0].name} /></div>
                <p className="vertical-line"></p>
                <div className="detail">
                    <h1>{product[0].name}</h1>
                    <p>Price: {product[0].price}</p>


                    <h4>Description: {product[0].description}</h4>
                    <button onClick={handleAddtoCart} >Add to Cart</button>
                    <Reviews productId={id} />
                </div>
              

            </div>
            <div>
         
            </div>
        </div>
    );
}

export default ProductDetail;
