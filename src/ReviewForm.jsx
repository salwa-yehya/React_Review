import React, { useState } from "react";
import ReactStars from "react-stars";

const ReviewForm = ({ handleReviewCreate }) => {
  const [rating, setrating] = useState(0);
  const [stars, setStars] = useState(rating);
  const [name, setName] = useState("");
  const [userreview, setreview] = useState("");
  const [disable, setdisable] = useState(false);
  const [valibate, setvalibate] = useState(false);
  
  
  //Rating Value
  function ratingChanged(value) {
    setrating(value);
    const starsString = "⭐".repeat(value);
    setStars(starsString);
    console.log("stars", starsString);
  }
  //Name
  function handleName(name) {
    setName(name);
    if (name.length < 4) {
      setdisable(true);
      setvalibate(true);
    } else {
      setdisable(false);
      setvalibate(false);
    }
  }
  //Comment
  function handleComment(userreview) {
    setreview(userreview);
    if (userreview.length < 4) {
      setdisable(true);
      setvalibate(true);
    } else {
      setdisable(false);
      setvalibate(false);
    }
  }
  ///Add New Review
  //generate id
  function makeid(length) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
      // Generate a random index within the valid range of characters
      let randomIndex = Math.floor(Math.random() * charactersLength);

      // Append the character at the random index to the result
      result += characters.charAt(randomIndex);
    }

    return result;
  }
  //Save Button Function
  function handleSave() {
     // Check if name, comment, or rating is empty, and prevent saving if they are
  if (!name || !userreview || rating === 0) {
    // Optionally display an error message or alert
    setvalibate(true);
    return;
  }
    // Reset the input values
    setName("");
    setreview("");
    setrating(0);

    // Update the input field values to clear them
    document.getElementById("name-input").value = "";
    document.getElementById("comment-input").value = "";

    // Generate a unique ID
    const uniqueId = makeid(5);
    console.log("id ", uniqueId);
    // Create the review object
    const review = {
      id: uniqueId,
      rating,
      name,
      userreview,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4HIjo1f6KheyLvjyS80MIIR3DJqbUBxxcw&usqp=CAU", //defult image
    };

    // Call the parent component's function to add the review
    handleReviewCreate(review);
  }

  return (
    <div>
      <div className="container">
        <h3>Rating</h3>
        <ReactStars
          count={5}
          value={rating}
          onChange={ratingChanged}
          size={40}
          color2={"#ffd700"}
        />
        <input
          id="name-input"
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => handleName(e.target.value)}
        ></input>
        <textarea
          id="comment-input"
          cols="30"
          rows="10"
          placeholder="Add Comment"
          onChange={(e) => handleComment(e.target.value)}
          defaultValue={userreview}
        ></textarea>
        <br /> <br />
        <button
          type="button"
          className="save-btn"
          disabled={`${disable ? "disabled" : ""}`}
          onClick={() => handleSave()}
        >
          Save
        </button>
        <br />
        <br />
        {valibate && (
          <span>
            <hr />
            <p className="error-massege">
              * Please fill in all fields and provide a rating .           
              <br />
              * Name & Comment must be 4 characters or more .
              
            </p>
          </span>
        )}
        
      </div>
    </div>
  );
};

export default ReviewForm;
