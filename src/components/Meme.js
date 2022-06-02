import React from "react";

const Form = () => {
  return (
    <main className="meme">
      <form className="meme__input-container">
        <input type="text" className="meme__input-container__input" placeholder="Top text" />
        <input type="text" className="meme__input-container__input" placeholder="Bottom text" />
      </form>
        <button className="meme__button">Get a new meme image</button>

    </main>
  );
}

export default Form;