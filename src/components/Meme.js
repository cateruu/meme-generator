import React from "react";
import memeData from "../memeData";

const Form = () => {

  const getImg = () => {
    const memes = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * 100);
    const imgUrl = memes[randomNumber].url;

    console.log(imgUrl);
  }

  return (
    <main className="meme">
      <form className="meme__input-container">
        <input type="text" className="meme__input-container__input" placeholder="Top text" />
        <input type="text" className="meme__input-container__input" placeholder="Bottom text" />
      </form>
        <button 
        className="meme__button"
        onClick={getImg}
        >
          Get a new meme image
        </button>

    </main>
  );
}

export default Form;