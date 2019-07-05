import React from 'react';
import './App.css';
import Heading from './components/Heading';
import EmojiSearch from './components/EmojiSearch';
import EmojiDisplay from './components/EmojiDisplay';
import emojis from './emojis.json';

class App extends React.Component {
  state = { emojis };

  render() {
    return (
      <div className='App'>
        <Heading />
        <EmojiSearch />
        <EmojiDisplay emojis={this.state.emojis} />
      </div>
    );
  }
}

export default App;
