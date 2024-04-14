import { useState, createContext, useContext, useEffect } from "react";

import "./App.css";
import Cart from "./Components/Cart/Cart";
import Reviews from "./Components/Reviews/Reviews";
import Main from "./Components/Main/Main";
import { cartType, CartContextType } from "./Types/cart";

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
});

export const useCart = () => {
  return useContext(CartContext);
};

function App() {
  const [cart, setCart] = useState<cartType[]>([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      console.log("положился в локалсторадж");
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, 0); //костыль
  }, [cart]);

  const addToCart = (product: cartType) => {
    const index = cart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      const arr = [...cart];
      arr[index] = { ...product };
      setCart(arr);
    } else {
      setCart([...cart, { ...product }]);
    }
  };

  const cartContextValue: CartContextType = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <>
        <h1 className="title">тестовое задание</h1>
        <Reviews />
        <Cart />
        <Main />
      </>
    </CartContext.Provider>
  );
}

export default App;
