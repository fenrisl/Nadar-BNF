import React, { Component } from 'react'
import './App.css'
import AppHeader from './containers/AppHeader.js'
import BotPart from './containers/BotPart.js'
import ChatBot from './containers/ChatBot.js'

class App extends Component {
  render() {
    return (
      <div className="Body">
        <AppHeader />
        <ChatBot />
      </div>
    );
  }
}

export default App
