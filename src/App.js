import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Chat from './routes/Chat';
import Find from './routes/Find';
import More from './routes/More';
import Profile from './routes/Profile';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Friends}/>
      <Route path="/Chat" component={Chat}/>
      <Route path="/Chats" component={Chats}/>
      <Route path="/Find" component={Find}/>
      <Route path="/More" component={More}/>
      <Route path="/Profile" component={Profile}/>
    </HashRouter>
  );
}

export default App;
