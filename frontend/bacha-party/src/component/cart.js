import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../css/cart.css"

const Cart = () => {

  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState()


  // const fetchCartData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:4500/api/cart", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": localStorage.getItem("token"),
  //       },
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       if(!data.cart.products){
  //         Swal.fire("Your Cart is Empty!")
  //       }else{
  //         setCart(data.cart.products);
  //         setQuantity(data.cart.quantity)
  //         Swal.fire(data.message);
  //       }
        
  //     } else {
  //       Swal.fire("Please Login First");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Swal.fire("Something Went wrong!");
  //   }
  // };

  const fetchCartData = async () => {
    try {
      const response = await fetch("https://nanhe-munhe-2.onrender.com/api/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        if (!data.cart.products || data.cart.products.length === 0) {
          // Cart is empty
          Swal.fire("Your Cart is Empty!");
        } else {
          // Cart has products
          setCart(data.cart.products);
          setQuantity(data.cart.quantity);
          Swal.fire(data.message);
        }
      } else {
        Swal.fire("Please Login First");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Something Went wrong!");
    }
  };
  

  async function handleBuyNow(id,price) {
    try {
      let res = await fetch(`https://nanhe-munhe-2.onrender.com/api/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({
        
            product: id,
            quantity: 1,
            price: price
          
        })
      })
      let data = await res.json();
      console.log(data)
      Swal.fire(data.message);
      handleRemoveFromCart(id)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleRemoveFromCart(id) {
    try {
      let res = await fetch(`https://nanhe-munhe-2.onrender.com/api/cart/remove/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      })
      let data = await res.json()

      Swal.fire(data.message);

      fetchCartData();
    } catch (error) {
      Swal.fire("Something Went wrong!")
    }
  }

  useEffect(() => {

    fetchCartData();

  }, [])


  return (
    <div>
      <h1>Your Products</h1>
      <div className="cart-products">
        {cart.map((product) => (
          <div className="cart-product-detail">
            <div> <img src={product.image} alt={product.name} /></div>
            <div> <h3>{product.name.substring(0, 30)}...</h3>
              <p>price:{product.price}</p>

              <p>Quantity:{quantity}</p>

              <div className="quantity-btn">





              </div>
              <div className="btn">
                <button onClick={() => handleBuyNow(product._id, product.price)}>Buy Now</button>
                <button onClick={() => handleRemoveFromCart(product._id)}>Remove</button>
              </div>


            </div>


          </div>

        ))}
      </div>

    </div>
  )
}

export default Cart