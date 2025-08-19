
import "./App.css";
import { useState, useEffect } from "react";
import {Home, Cart, Product} from "./Pages";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { AllProvider } from "./Components/AllContext/AllContext";

function App() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ?  JSON.parse(stored) : [];
  });


  const [total, setTotal] = useState(0);
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
    setTotal(newTotal);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);
  }, [cart, total]);

  const addToCart = ({id,img,name,price,link}) => {
    setCart((prev) => [...prev, {id,img,name,price,link}]);
    setTotal((prev) => prev + parseFloat(price));
  };

  const resetCart = ()=>{
      localStorage.removeItem("cart");
      localStorage.removeItem("total");
      setCart([]);
      setTotal(0);
  }

  const [filter, setFilter] = useState("all")

  return (
    <AllProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home cart={cart} total={total} filter={filter} addToCart={addToCart}/>} />
          <Route path="/product/:id" element={<Product setCart={setCart} cart={cart} total={total} filter={filter} addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart setCart={setCart} cart={cart} total={total} addToCart={addToCart} resetCart={resetCart}/>} />
        </Routes>
      </Router>
    </AllProvider>
  );
}

export default App;
