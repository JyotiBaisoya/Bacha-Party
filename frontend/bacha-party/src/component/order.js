import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../css/cart.css"

const Order = () => {

  const [order, setOrder] = useState([])



  const fetchCartData = async () => {
    try {
      const response = await fetch("https://nanhe-munhe-2.onrender.com/api/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        const data = await response.json();
          
          setOrder(data.order)
       
      } else {
        Swal.fire("Please Login First");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Something Went wrong!");
    }
  };

  



  useEffect(() => {

    fetchCartData();

  }, [])


  return (
    <div>
      <h1>Your Products</h1>
      <div className="cart-products">
        {order.map((product) => (
          <div className="cart-product-detail">
            <div> <img src={product.product.image} alt={product.name} /></div>
            <div> <h3>{product.product.name}</h3>
              <p>price:{product.product.price}</p>
              <p>quantity:{product.quantity}</p>
              <p>Total Amount:{product.totalAmount}</p>
              <p>Status:{product.status}</p>

             

             


            </div>


          </div>

        ))}
      </div>

    </div>
  )
}

export default Order