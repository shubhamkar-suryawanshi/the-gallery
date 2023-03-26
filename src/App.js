import React, { useState } from 'react';
import '../style.css';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
