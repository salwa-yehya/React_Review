import React from "react";

const Review = ({ Reviews, handleDelete }) => {
  // console.log("first review" , Reviews);
  return Reviews.map(({ id, name, userreview, image, rating }) => {
    const starsString = '⭐'.repeat(rating);
    return (
      <>
        <div className="container" key={id}>
          <div className="card">
            <img src={image} alt={name} />
            <div className="details">
              <div className="box">
                <h4>{name}</h4>
                <span>{starsString}</span>
              </div>
              <p>{userreview}</p>
            </div>
          </div>
          <div className="button">
            <button class="btn btn-delete" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        </div>
      </>
    );
  });
};

export default Review;
