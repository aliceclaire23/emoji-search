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
        <EmojiDisplay emojis={this.state.emojis} search={this.state.search} />
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  // filterEmojis = () => {
  //   this.setState(state => {
  //     state.emojis.filter(emoji => emoji.keywords.includes(state.search));
  //   });
  // };
}

export default App;
