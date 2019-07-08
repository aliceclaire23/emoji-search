import React from 'react';
import emojiFilter from '../utils/emojiFilter';

const EmojiDisplay = ({ emojis, search, copyEmoji }) => {
  return (
    <section className='emojis'>
      {emojiFilter(emojis, search).map((emoji, i) => (
        <span key={i} id={i} onClick={copyEmoji}>
          {emoji.symbol}
        </span>
      ))}
    </section>
  );
};

export default EmojiDisplay;
