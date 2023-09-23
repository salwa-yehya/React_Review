import React, { useState } from "react";
import { ReviewsData } from "./ReviewsData";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const Reviews = () => {
  const [reviews, setReviews] = useState(ReviewsData);

  function addReview(review) {
    setReviews([review , ...reviews])
    // console.log('Updated reviews:', reviews);
  }

  function handleDelete(id) {
    setReviews((reviews) => reviews.filter((review) => review.id !== id));
  }

  if (reviews.length > 0) {
    return (
      <div className="title">
        <h1>Reviews</h1>
        <div>
          <div className="underline"></div>
          <ReviewForm handleReviewCreate={addReview}/>
          <Review Reviews={reviews} handleDelete={handleDelete} />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h3>no Reviews yet</h3>
      </>
    );
  }
};

export default Reviews;
