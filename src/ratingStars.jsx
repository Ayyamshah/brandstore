import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

function RatingStars() {
  const [rating, setRating] = useState(3); // This will store the number of stars selected

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Update rating when stars are clicked
    console.log("You selected:", newRating, "stars");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h5 className="text-start">Customer Rating:</h5>
      <ReactStars
        count={5} // Number of stars
        size={20} // Size of the stars
        value={rating} // Current rating
        onChange={handleRatingChange} // What happens when you click
        activeColor="#ffd700" // Gold color for the stars
      />
      {/* <p>You gave {rating} stars!</p> */}
    </div>
  );
}

export default RatingStars;

