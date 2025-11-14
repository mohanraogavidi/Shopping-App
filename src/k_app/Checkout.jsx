import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartlistItems = [], quantities = {} } = location.state || {};

  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/₹|,/g, ''));
  };

  const formatCurrency = (amount) => `₹${parseFloat(amount).toFixed(2)}`;

  const total = cartlistItems.reduce((sum, item) => {
    const quantity = quantities[item.id] || 1;
    const price = parsePrice(item.price) || 0;
    return sum + price * quantity;
  }, 0);

  const handlePayment = () => {
    if (typeof window.Razorpay !== 'undefined') {
      const options = {
        key: 'rzp_test_Ra2UyMQW1hLxkl',
        amount: total * 100, // Amount in paisa
        currency: 'INR',
        name: 'Nykaa Shopping',
        description: 'Purchase from Nykaa',
        handler: function (response) {
          alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
          navigate('/home');
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        }
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert('Razorpay SDK not loaded. Please refresh the page.');
    }
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Review your items and complete your purchase</p>
      </div>

      {cartlistItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart before proceeding to checkout.</p>
          <button onClick={() => navigate("/home")} className="continue-shopping-btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="checkout-content">
          <div className="checkout-items">
            <h2>Order Summary</h2>
            <div className="items-list">
              {cartlistItems.map((item) => (
                <div className="checkout-item-card" key={`${item.id}-${item.selectedSize}`}>
                  <div className="item-image">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-size">Size: {item.selectedSize}</p>
                    <div className="item-pricing">
                      <div className="unit-price">
                        <span>Unit Price: {formatCurrency(parsePrice(item.price))}</span>
                      </div>
                      <div className="quantity-total">
                        <span className="quantity">Qty: {quantities[item.id] || 1}</span>
                        <span className="price">Total: {formatCurrency(parsePrice(item.price) * (quantities[item.id] || 1))}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="checkout-summary">
            <div className="summary-card">
              <h3>Order Total</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal ({cartlistItems.length} items)</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
              <button onClick={() => handlePayment()} className="place-order-btn">
                Place Order
              </button>
              <button onClick={() => navigate("/cart")} className="back-to-cart-btn">
                Back to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;


