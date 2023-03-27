import React, { useState } from 'react';
import '../style.css';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './shared/store';

function App() {
  // const [query, setQuery] = useState('');
  return (
    // <Provider store={store}>
    <div>
      <Header />
      <Main />
    </div>
    // </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
