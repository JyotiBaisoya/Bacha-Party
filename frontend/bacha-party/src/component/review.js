// import React, { useState, useEffect } from "react";
// import Swal from "sweetalert2";

// function Reviews({ productId }) {
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState("");

//   useEffect(() => {
//     // Fetch reviews for the product using an API
//     fetch(`http://localhost:4500/api/review/product/${productId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setReviews(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching reviews:", error);
//       });
//   }, [productId]);

//   const handleSubmitReview = async () => {
//     try {
//       // Make a POST request to save the new review
//       const response = await fetch("http://localhost:4500/api/review/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": localStorage.getItem("token"),
//         },
//         body: JSON.stringify({
//           product:productId,
//           comment: newReview,
//         }),
//       });

//       if (response.ok) {
//         // Review was successfully added
//         // You can update the reviews list or show a success message
//         Swal.fire("Review added Successfully");
//         setNewReview("");
//       } else {
//         // Handle the case where the review couldn't be added
//         console.error("Failed to add review");
//       }
//     } catch (error) {
//       console.error("Error adding review:", error);
//     }
//   };

//   return (
//     <div>
//       <h3>Customer Reviews</h3>
//       <ul>
//         {reviews.map((review) => (
//           <li key={review._id}>{review.comment}</li>
//         ))}
//       </ul>
//       <textarea
//         rows="4"
//         cols="50"
//         placeholder="Write your review here..."
//         value={newReview}
//         onChange={(e) => setNewReview(e.target.value)}
//       ></textarea>
//       <button onClick={handleSubmitReview}>Submit Review</button>
//     </div>
//   );
// }

// export default Reviews;

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../css/review.css"; // Import your CSS file

function Reviews({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    // Fetch reviews for the product using an API
    fetch(`https://nanhe-munhe-2.onrender.com/api/review/product/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [productId]);

  const handleSubmitReview = async () => {
    try {
      // Make a POST request to save the new review
      const response = await fetch("https://nanhe-munhe-2.onrender.com/api/review/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          product: productId,
          comment: newReview,
        }),
      });

      if (response.ok) {
        // Review was successfully added
        // You can update the reviews list or show a success message
        Swal.fire("Review added Successfully");
        setNewReview("");
      } else {
        // Handle the case where the review couldn't be added
        console.error("Failed to add review");
      }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  return (
    <div className="reviews-container">
      <h3>Customer Reviews</h3>
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review._id} className="review-item">
            <div className="review-header">
              <span className="review-username">{review.user.username}</span>
              <span className="review-date">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="review-comment">{review.comment}</p>
          </li>
        ))}
      </ul>
      <textarea
        rows="4"
        cols="50"
        placeholder="Write your review here..."
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
      ></textarea>
      <button onClick={handleSubmitReview} className="submit-button">
        Submit Review
      </button>
    </div>
  );
}

export default Reviews;
