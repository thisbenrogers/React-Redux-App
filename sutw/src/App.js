import React from 'react';

import SearchForm from './components/SearchForm';
import Lyrics from './components/Lyrics';

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Stop Using That Word</h1>
     <SearchForm />
     <Lyrics />
    </div>
  );
}

export default App;


// whitespace replacement for url:
//  str = str.replace(' ', '%20');