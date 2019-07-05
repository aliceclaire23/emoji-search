import React from 'react';
import './App.css';
import Heading from './components/Heading';
import EmojiSearch from './components/EmojiSearch';
import EmojiDisplay from './components/EmojiDisplay';
import emojis from './emojis.json';

class App extends React.Component {
  state = { emojis, search: '' };

  render() {
    return (
      <div className='App'>
        <Heading />
        <EmojiSearch />
        <EmojiDisplay emojis={this.state.emojis} search={this.state.search} />
      </div>
    );
  }
}

export default App;
