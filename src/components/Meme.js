import React from 'react';
import { useState, useEffect } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: 'https://i.imgflip.com/3lmzyx.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();

      setAllMemes(data);
    };

    getMemes();
  }, []);

  const getImg = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const imgUrl = allMemes[randomNumber].url;

    setMeme((prevState) => {
      return {
        ...prevState,
        randomImg: imgUrl,
      };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
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
          name='topText'
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type='text'
          className='meme__input-container__input'
          placeholder='Bottom text'
          name='bottomText'
          onChange={handleChange}
          value={meme.bottomText}
        />
      </form>
      <button className='meme__button' onClick={getImg}>
        Get a new meme image
      </button>
      <div className='meme__container'>
        <img
          src={meme.randomImg}
          alt='meme'
          className='meme__container__image'
        />
        <p className='meme__container__text top'>{meme.topText}</p>
        <p className='meme__container__text bottom'>{meme.bottomText}</p>
      </div>
    </main>
  );
};

export default Meme;
