import React from 'react';
import { useState } from 'react';
import memeData from '../memeData';

const Form = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: 'https://i.imgflip.com/3lmzyx.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  const getImg = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const imgUrl = memesArray[randomNumber].url;

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImg: imgUrl,
      };
    });
  };

  return (
    <main className='meme'>
      <form className='meme__input-container'>
        <input
          type='text'
          className='meme__input-container__input'
          placeholder='Top text'
        />
        <input
          type='text'
          className='meme__input-container__input'
          placeholder='Bottom text'
        />
      </form>
      <button className='meme__button' onClick={getImg}>
        Get a new meme image
      </button>
      <img src={meme.randomImg} alt='meme' className='meme__image' />
    </main>
  );
};

export default Form;
