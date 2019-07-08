import React from 'react';

const EmojiSearch = ({ search, handleChange }) => {
  return (
    <form>
      <input onChange={handleChange} id='search' type='text' value={search} />
    </form>
  );
};

export default EmojiSearch;
