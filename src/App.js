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
        <EmojiSearch
          search={this.state.search}
          handleChange={this.handleChange}
        />
        <EmojiDisplay
          emojis={this.state.emojis}
          search={this.state.search}
          copyEmoji={this.copyEmoji}
        />
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  copyEmoji = event => {
    const emojiToCopy = event.target;
    const textArea = document.createElement('textarea');
    textArea.value = emojiToCopy.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
  };
}

export default App;
