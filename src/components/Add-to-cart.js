import React, { useState } from "react";
import "./Add-to-cart.css";
import watch from "./watch.webp"

const Cart = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Slim Fit Casual Shirt",
      desc: "Button-Down Collar & Placket",
      size: "XL",
      color: "Maroon",
      price: 85,
      oldPrice: 92,
      qty: 1,
      image: watch,
    },
    {
      id: 2,
      name: "Printed Straight Kurtas",
      desc: "Digital Printed With Yoke Embroidered",
      size: "XL",
      color: "Green",
      price: 68,
      oldPrice: 75,
      qty: 2,
      image:  watch,
    },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = 35.52;
  const total = subtotal - discount;

  const updateQty = (id, change) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  };

  return (
    <div>
      <div className="cart-box">
        <div className="cart-header">
          <h1>Cart</h1>
          <p>1. Cart → 2. Checkout → 3. Payment</p>
        </div>

        <div className="cart-grid">
          {/* Items */}
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-info">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                    <span>
                      Size: <b>{item.size}</b> | Color: <b>{item.color}</b>
                    </span>
                    <div className="item-price">
                      <h3>${item.price}</h3>
                      <small>${item.oldPrice}</small>
                    </div>
                  </div>
                </div>
                <div className="qty-controls">
                  <button onClick={() => updateQty(item.id, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <div>
                <span>Sub Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div>
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div>
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div>
                <span>Shipping</span>
                <span className="green">Free</span>
              </div>
              <hr />
              <div className="total-line">
                <b>Total</b>
                <b>${total.toFixed(2)}</b>
              </div>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>

            <p className="delivery">
              Estimated Delivery by <b>25 April, 2022</b>
            </p>

            <div className="coupon">
              <p>Have a Coupon?</p>
              <div className="coupon-box">
                <input type="text" placeholder="Coupon Code" />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
