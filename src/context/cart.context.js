import { createContext, useEffect, useState } from 'react';
// This function it will find if cartitems contains productToAdd
 // if found , increment quantity
 // return new  array with modified cartItems/new cart item
const addCartItem=(cartItems,productToAdd)=>{
  const existingCartItem = cartItems.find(
    (cartItem)=>cartItem.id === productToAdd.id
  );

  if(existingCartItem){
    return cartItems.map((cartItem)=>cartItem.id=== productToAdd.id ?// If we found item return a new array of a cartItems
    { ...cartItem,quantity:cartItem.quantity +1} 
    : cartItem//if this not the case just return the original cartItem
    )
  }
  return [...cartItems,{...productToAdd,quantity:1}]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItem:[],
  addItemToCart:()=>{},
  cartCount:0
  
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const  [cartItems,setCartItems]=useState([]);
  const [cartCount,setCartCount]=useState(0);
 
  useEffect(()=>{
    const newCartCount=cartItems.reduce((total,cartItem)=>total + cartItem.quantity,0);
    setCartCount(newCartCount);
  },[cartItems] );

  const addItemToCart = (product) =>
  setCartItems(addCartItem(cartItems, product));
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart,cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};