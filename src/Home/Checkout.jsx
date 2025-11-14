import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Razorpay from './Razorpay';

const Checkout = ({ onLogout }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [creditHover, setCreditHover] = useState(false);
  const [debitHover, setDebitHover] = useState(false);
  const [paypalHover, setPaypalHover] = useState(false);
  const [placeHover, setPlaceHover] = useState(false);
  const [backHover, setBackHover] = useState(false);
  const navigate = useNavigate();

  const calculateTotal = useCallback((items) => {
    const subtotal = items.reduce((sum, item) => sum + (parseFloat(item.product.price.replace('₹ ', '').replace('/-', '').replace(',', '')) * item.quantity), 0);
    let fee = 0;
    if (selectedPayment === 'credit') fee = subtotal * 0.02;
    else if (selectedPayment === 'debit') fee = 0;
    else if (selectedPayment === 'paypal') fee = subtotal * 0.03;
    setTotalAmount(subtotal + fee);
  }, [selectedPayment]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
    calculateTotal(cart);
  }, [selectedPayment, calculateTotal]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    const updatedItems = cartItems.map(item =>
      item.product.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    calculateTotal(updatedItems);
  };

  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter(item => item.product.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    calculateTotal(updatedItems);
  };

  const handlePaymentSelect = (paymentType) => {
    setSelectedPayment(paymentType);
  };

  const handlePlaceOrder = () => {
    if (!selectedPayment) {
      alert('Please select a payment method.');
      return;
    }
    // Razorpay component is rendered conditionally and will open the payment modal
    // The payment process is handled by the Razorpay component
  };

  const handlePaymentSuccess = (response) => {
    alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
    localStorage.removeItem('cart');
    navigate('/home');
  };

  const handlePaymentFailure = () => {
    alert('Payment failed or was cancelled.');
  };

  return (
    <>
      <Navbar onLogout={onLogout} />
      <div style={{paddingTop: "80px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "100%", minHeight: "100vh",backgroundColor: "#e0f7fa",}}>
        <div style={{overflowY: 'auto', padding: '20px', width: '800px', margin: '0 auto', backgroundColor: "#fff", minHeight: '100vh', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: "2px solid #e0e0e0" }}>
          <h1 style={{ textAlign: 'center', marginBottom: '10px', color: '#00796b', fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Checkout
          </h1>
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ color: '#00796b', marginBottom: '15px', fontSize: '1.8rem', fontWeight: '600' }}>
              Order Summary
            </h2>
            {cartItems.map(item => (
              <div key={item.product.id} style={{ position: '', display: 'flex', alignItems: 'center', marginBottom: '15px', padding: '15px', border: '2px solid #e0e0e0', borderRadius: '20px',margin:"10px", width: 'auto', fontSize: '12px', backgroundColor: "#f9f9f9", boxShadow: '0 6px 12px rgba(0,0,0,0.1)', color: '#333', transition: 'transform 0.2s ease' }}>
                <img src={item.product.image} alt={item.product.name} style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '15px', borderRadius: '15px', border: '2px solid #00796b' }} />
                <div style={{ flex: 1, paddingLeft: '10px',paddingRight:'10px' }}>
                  <h3 style={{ margin: '0 0 5px 0', color: '#00796b', fontSize: '16px' }}>{item.product.brand}</h3>
                  <p style={{ margin: '0 0 5px 0', color: '#555', fontSize: '14px' }}>{item.product.name}</p>
                  <p style={{ margin: '0 0 10px 0', color: '#28a745', fontSize: '18px', fontWeight: "700" }}>Price: {item.product.price}</p>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} style={{ border: 'none', borderRadius: '50%', height: '25px', width: '25px', cursor: 'pointer', backgroundColor: '#dc3545', color: '#fff', fontSize: '16px', fontWeight: 'bold', marginRight: '10px' }}>
                      -
                    </button>
                    <span style={{ padding: '0 10px', fontFamily: 'serif', color: '#333', fontSize: '16px' }}>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} style={{ border: 'none', borderRadius: '50%', height: '25px', width: '25px', cursor: 'pointer', backgroundColor: '#28a745', color: '#fff', fontSize: '16px', fontWeight: 'bold', marginLeft: '10px' }}>
                      +
                    </button>
                  </div>

                </div>
                <button onClick={() => removeFromCart(item.product.id)} style={{ alignSelf: 'center', top: '10px', right: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.3s ease' }}>
                  Remove
                </button>
              </div>
            ))}
            <p style={{ fontSize: '32px', color: '#28a745', textAlign: 'center', marginTop: '20px', fontWeight: 'bold', padding: '10px', borderRadius: '10px', border: '2px solid #00796b' }}>
              Total Amount: ₹ {totalAmount.toFixed(2)}/-
            </p>
          </div>
          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: '#00796b', marginBottom: '15px', fontSize: '2rem', fontWeight: 'bold', letterSpacing: '1px' }}>
              Select Payment Method
            </h2>
            <button onClick={() => handlePaymentSelect('credit')} onMouseEnter={() => setCreditHover(true)} onMouseLeave={() => setCreditHover(false)}
              style={{
                display: 'block', width: '220px', padding: '12px', marginBottom: '15px', border: 'none', borderRadius: '10px', backgroundColor: selectedPayment === 'credit' ? '#e0e0e0' : (creditHover ? '#4caf50' : '#28a745'),
                cursor: 'pointer', color: '#fff', fontWeight: 'bold', fontSize: '16px', transition: 'all 0.3s ease', boxShadow: creditHover ? '0 4px 8px rgba(0,0,0,0.3)' : 'none'
              }}>
              💳 Credit Card (+2% fee)
            </button>
            <button onClick={() => handlePaymentSelect('debit')} onMouseEnter={() => setDebitHover(true)} onMouseLeave={() => setDebitHover(false)}
              style={{
                display: 'block', width: '220px', padding: '12px', marginBottom: '15px', border: 'none', borderRadius: '10px', backgroundColor: selectedPayment === 'debit' ? '#e0e0e0' : (debitHover ? '#2196f3' : '#28a745'),
                cursor: 'pointer', color: '#fff', fontWeight: 'bold', fontSize: '16px', transition: 'all 0.3s ease', boxShadow: debitHover ? '0 4px 8px rgba(0,0,0,0.3)' : 'none'
              }}>
              💳 Debit Card (No fee)
            </button>
            <button onClick={() => handlePaymentSelect('paypal')} onMouseEnter={() => setPaypalHover(true)} onMouseLeave={() => setPaypalHover(false)}
              style={{display: 'block', width: '220px', padding: '12px', marginBottom: '15px', border: 'none', borderRadius: '10px', backgroundColor: selectedPayment === 'paypal' ? '#e0e0e0' : (paypalHover ? '#0070ba' : '#28a745'),
                cursor: 'pointer', color: '#fff', fontWeight: 'bold', fontSize: '16px', transition: 'all 0.3s ease', boxShadow: paypalHover ? '0 4px 8px rgba(0,0,0,0.3)' : 'none'
              }}>
              🅿️ PayPal (+3% fee)
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: '50px', marginTop: '30px' }}>
            <button onClick={handlePlaceOrder} onMouseEnter={() => setPlaceHover(true)} onMouseLeave={() => setPlaceHover(false)}
              style={{backgroundColor: placeHover ? '#218838' : '#28a745', color: 'white', padding: '15px 30px', border: 'none',borderRadius: '25px', cursor: 'pointer', height: 'auto', width: 'auto',
                fontWeight: 'bold', fontSize: '18px', transition: 'all 0.3s ease', boxShadow: placeHover ? '0 6px 12px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.2)', transform: placeHover ? 'scale(1.05)' : 'scale(1)'
              }}>
              🚀 Place Order
            </button>
            <button onClick={() => navigate('/cart')} onMouseEnter={() => setBackHover(true)} onMouseLeave={() => setBackHover(false)}
              style={{ backgroundColor: backHover ? '#5a6268' : '#6c757d', color: 'white', padding: '15px 30px', border: 'none', borderRadius: '25px', cursor: 'pointer', height: 'auto', width: 'auto',
                fontWeight: 'bold', fontSize: '18px', transition: 'all 0.3s ease', boxShadow: backHover ? '0 6px 12px rgba(0,0,0,0.3)' : '0 4px 8px rgba(0,0,0,0.2)', transform: backHover ? 'scale(1.05)' : 'scale(1)'
              }}>
              🛒 Back to Cart
            </button>
          </div>
        </div>
        {selectedPayment && (
          <Razorpay amount={totalAmount} onSuccess={handlePaymentSuccess} onFailure={handlePaymentFailure} />
        )}
      </div>
    </>
  );
};

export default Checkout;


