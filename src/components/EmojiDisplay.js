import React from 'react';

const EmojiDisplay = ({ emojis, search }) => {
  return (
    <section>
      {emojis
        .filter(emoji => emoji.keywords.includes(search))
        .map((emoji, i) => (
          <span key={i}>{emoji.symbol}</span>
        ))}
    </section>
  );
};

export default EmojiDisplay;
