import React from 'react';
import emojiFilter from '../utils/emojiFilter';

const EmojiDisplay = ({ emojis, search }) => {
  return (
    <section className='emojis'>
      {emojiFilter(emojis)
        .filter(emoji => emoji.keywords.includes(search))
        .map((emoji, i) => (
          <span key={i}>{emoji.symbol}</span>
        ))}
    </section>
  );
};

export default EmojiDisplay;
