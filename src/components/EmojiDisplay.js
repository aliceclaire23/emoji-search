import React from 'react';

const EmojiDisplay = ({ emojis }) => {
  return (
    <section>
      {emojis.map((emoji, i) => (
        <span key={i}>{emoji.symbol}</span>
      ))}
    </section>
  );
};

export default EmojiDisplay;
