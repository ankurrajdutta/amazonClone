import React,{useState,useEffect} from 'react'
import useShop from '../Helper/StateProvider';
import "./Product.css"

function Product({title,image,price,rating}) {
 
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.title === title);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, title]);

  const handleClick = () => {
    const product = { title, image, price,rating };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };


  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} />
      {isInCart ? (
        <button onClick={handleClick}>Remove from Basket</button>
      ) : (
        <button onClick={handleClick}>Add to Basket</button>
      )}
    </div>
  );
}

export default Product