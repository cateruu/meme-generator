import React from "react";
import { useState } from "react";
import memeData from "../memeData";

const Form = () => {

  const [memeImg, setMemeImg] = useState('');

  const getImg = () => {
    const memes = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const imgUrl = memes[randomNumber].url;

    setMemeImg(imgUrl);
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
      <img 
        src={memeImg}
        alt="meme"
        className="meme__image"
      />
    </main>
  );
}

export default Form;