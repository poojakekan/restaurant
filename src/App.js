import React from 'react';
import './App.css';

function App() {
  return (
    <header className="header">
      <div className="logo">My Store</div>
     
      <div className="cart">
        <span>Cart: 0 items</span>
        <button>Go to Cart</button>
      </div>
    </header>
  );
}

export default App;
