import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
        <h1>I am the checkout pages</h1>
      </div>
    </div>
  );
};

export default Checkout;
