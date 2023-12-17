import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart} = useContext(CartContext);
  return (
    <div>
      <h1>I am the checkout pages</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return(
          <div key={id}>
            <h1>{name}</h1>
            <span>{quantity}</span><br/>
            <span>Decrement</span><br/>
            <span onClick={()=>addItemToCart(cartItem)}>Increment</span>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
