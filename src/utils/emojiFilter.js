const emojiFilter = (emojis, search) => {
  const uniqueSymbols = [];
  const filteredEmojis = [];
  emojis.forEach(emoji => {
    if (!uniqueSymbols.includes(emoji.symbol)) {
      uniqueSymbols.push(emoji.symbol);
      filteredEmojis.push(emoji);
    }
  });
  return filteredEmojis.filter(emoji => emoji.keywords.includes(search));
};

export default emojiFilter;
