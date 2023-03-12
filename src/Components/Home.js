import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/51G7XEby6SL._SX3000_.jpg"
          alt=""
        ></img>

        <div className="home_row">
          <Product
            title="How to Day Trade for a living"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61vMjzd+xPL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            title="Lava Blaze 5G (6GB)"
            price={29.99}
            image="https://m.media-amazon.com/images/I/4151aOEWqAL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="ECOVACS DEEBOT U2 PRO 2-in-1 Robotic Vacuum Cleaner "
            price={29.99}
            image="https://m.media-amazon.com/images/I/71DaWCa5WUL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            title="Lava Blaze 5G (6GB)"
            price={29.99}
            image="https://m.media-amazon.com/images/I/4151aOEWqAL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            title="How to Day Trade for a living"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61vMjzd+xPL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="ECOVACS DEEBOT U2 PRO 2-in-1 Robotic Vacuum Cleaner "
            price={29.99}
            image="https://m.media-amazon.com/images/I/71DaWCa5WUL._AC_SY200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home