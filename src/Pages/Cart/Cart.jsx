import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcAmex } from "react-icons/fa";
import { Nav, Footer, AddCartBtn, AddQuantity } from "../../Components";
import "./Cart.css";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function Cart(props) {
  const addToCart = props.addToCart;
  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate("/payment-success");
  };
  

  const groupedCart = props.cart.reduce((acc, item) => {
    const existing = acc.find((x) => x.id === item.id);
    if (existing) {
      existing.quantity += 1; // varsa quantity artır
    } else {
      acc.push({ ...item, quantity: 1 }); // yoksa ekle
    }
    return acc;
  }, []);

  return (
    <>
      <Nav cart={props.cart} total={props.total} />
      <div className="cartContainer grid sm:grid-cols-2 md:grid-cols-2">
        <div className="paymentContainer w-3/5">
          <h1 className="paymentTitle">Payment</h1>
          <div className="paymentForm flex flex-col gap-10">
            <div className="paymentLogos w-full justify-end flex gap-5 text-5xl">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcAmex />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="formContainer">
                <div className="formGroup">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="formGroup">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="number"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="cardNumber">Expire Date</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" id="cvv" name="cvv" required />
                </div>
              </div>
              <button type="submit" className="b-btn submitBtn">
                Pay Now
              </button>
            </form>
          </div>
        </div>
        <div className="orderSummaryContainer w-2/5 sm:order-1">
          <h1 className="orderSummaryTitle">Order Summary</h1>
          <ul className="orderDetails">
            {groupedCart.map((cart) => (
              <li key={cart.id} className="orderDetailsItem">
                <div className="flex items-center justify-between gap-4">
                  <img src={cart.img} className="cartProductImg rounded-lg" alt={cart.name} />
                  <div className="flex flex-col">
                    <a href={`./product/${cart.link}-${cart.id}`} className="cartProductName">{cart.name}</a>
                    <span className="cartProductPrice">${parseFloat(cart.price).toFixed(2)}</span>
                  </div>
                </div>
                <AddQuantity id={cart.id} cart = {props.cart} setCart = {props.setCart} targetCart= {cart} onAdd={() => addToCart({id:cart.id,img:cart.img , name: cart.name,price: cart.price, link:cart.link})} price={cart.price} />
              </li>
            ))}
          </ul>
          <hr style={{ marginTop: "1rem" }} />
          <div className="cartTotalContainer">
            <span className="cartTotalText">Total</span>
            <span className="cartTotal">
              ${parseFloat(props.total).toFixed(2)}
            </span>
          </div>
          <br />
          <div className="couponReset_c flex justify-between items-center">
            <span className="couponCodeLink">
              <a href="#">Do you have a coupon code?</a>
            </span>
            <button onClick={props.resetCart} className="b-btn resetCart">
              Remove All
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
