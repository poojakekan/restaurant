import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">My Store</div>
        
        <div className="cart">
          <span>Cart: 0 items</span>
          <button>Go to Cart</button>
        </div>
      </header>
      <main className="description">
        <h1>Welcome to Our Restaurant</h1>
        <p>
          Our restaurant offers a wide variety of delicious food that is sure to satisfy your taste buds.
          From mouth-watering appetizers to delectable desserts, every dish is prepared with the freshest
          ingredients and utmost care. Come and enjoy a delightful dining experience with us!
        </p>
      </main>
    </div>
  );
}

export default App;
