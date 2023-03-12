import React from 'react'
import useShop from '../Helper/StateProvider';
import "./Checkout.css"
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
  const {products,user}=useShop();
  console.log(products)

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://data1.ibtimes.co.in/en/full/723305/amazon-great-indian-festival-2019.jpg?w=1199&h=399&l=50&t=40"
        />
        <div>
        <h3>Hello,{user?.email}</h3>
          <h2 className="checkout_title">Your shopping basket</h2>
          {products.map((item)=>{
            return (<CheckoutProduct image={item.image}
            price={item.price}
            title={item.title}
            rating={item.rating}
             />)
            
          })}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout