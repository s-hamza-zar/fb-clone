import React from "react";
import "./PostInputForm.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";

function PostInputForm() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const inputImageHandler = (event) => {
    setImageUrl(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic:user.photoURL,
      username:user.displayName,
      image:imageUrl
    });

    setInput("");
    setImageUrl("");
  };
  return (
    <div className="post__input__form">
      <div className="form__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={inputHandler}
            className="form__input"
            placeholder={`Whats on your mind ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={inputImageHandler}
            placeholder="Image URL(optional)"
          />
          <button onClick={submitHandler} type="submit"></button>
        </form>
      </div>
      <div className="form__bottom">
        <div className="form__options">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="form__options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="form__options">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostInputForm;
