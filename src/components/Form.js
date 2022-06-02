import React from "react";

const Form = () => {
  return (
    <div className="form">
      <div className="form__input-container">
        <input type="text" className="form__input-container__input" placeholder="Top text" />
        <input type="text" className="form__input-container__input" placeholder="Bottom text" />
      </div>
        <button className="form__button">Get a new meme image</button>
    </div>
  );
}

export default Form;