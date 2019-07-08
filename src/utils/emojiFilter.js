const emojiFilter = emojis => {
  const uniqueSymbols = [];
  const filteredEmojis = [];
  emojis.forEach(emoji => {
    if (!uniqueSymbols.includes(emoji.symbol)) {
      uniqueSymbols.push(emoji.symbol);
      filteredEmojis.push(emoji);
    }
  });
  return filteredEmojis;
};

export default emojiFilter;
