import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Cart = ({ onLogout }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('cart')) || [];
    // Migrate old format to new {product, quantity} format
    const migratedItems = items.map(item => {
      if (item.product) return item; // already migrated
      return { product: item, quantity: 1 }; // migrate old format
    });
    setCartItems(migratedItems);
    localStorage.setItem('cart', JSON.stringify(migratedItems));
  }, []);

  // const updateQuantity = (id, newQuantity) => {
  //   if (newQuantity <= 0) {
  //     removeFromCart(id);
  //     return;
  //   }
  //   const updatedItems = cartItems.map(item =>
  //     item.product.id === id ? { ...item, quantity: newQuantity } : item
  //   );
  //   setCartItems(updatedItems);
  //   localStorage.setItem('cart', JSON.stringify(updatedItems));
  // };

  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter(item => item.product.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  return (
    <>
      <Navbar onLogout={onLogout} />
      <div style={{paddingTop: "80px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "100%", minHeight: "100vh",backgroundColor: "#e0f7fa",}}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#00796b", marginBottom: "20px", textAlign: "center" }}>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p style={{ fontSize: "18px", color: "#555" }}>Your cart is empty.</p>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {cartItems.map(item => (
              <div key={item.product.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '900px', backgroundColor: "#fff", borderRadius: '15px', margin: '10px', padding: '20px', border: "2px solid #e0e0e0", boxShadow: "15px 14px 15px rgba(60, 60, 59, 0.3)",}}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={item.product.image} alt={item.product.name} style={{width: '100px', borderRadius: '15px', marginRight: '20px'}} />
                  <div style={{ width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px', }}>
                    <h3 style={{ fontSize: '18px', color: '#00796b', margin: 0, fontWeight: "600" }}>{item.product.brand}</h3>
                    <p style={{ color: '#555', margin: '2px 0', fontSize: "16px" }}>{item.product.name}</p>
                    <p style={{ color: '#555', margin: '2px 0', fontSize: "16px" }}>Size: {item.selectedSize}</p>
                    <p style={{ color: '#28a745', margin: '2px 0', fontSize: "18px", fontWeight: "700" }}>Price: {item.product.price}</p>
                  </div>
                </div>

                {/* Right-aligned Remove button */}
                <button onClick={() => removeFromCart(item.product.id)} style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontSize: "16px", fontWeight: "600", transition: "background-color 0.3s ease" }}>
                  Remove
                </button>
              </div>
            ))}

            <button onClick={() => navigate('/checkout')} style={{backgroundColor: "#28a745", color: "white", border: "none", padding: "12px 25px", borderRadius: "8px", cursor: "pointer", fontSize: "16px", fontWeight: "600", marginTop: "20px", transition: "background-color 0.3s ease" }}>
              Proceed to Checkout
            </button>
          </div>
        )}
        <button onClick={() => {
          const lastProductId = localStorage.getItem('lastProductId');
          if (lastProductId) {
            navigate(`/product/${lastProductId}`);
          } else {
            navigate('/home');
          }
        }} style={{backgroundColor: "#007bff", color: "white", border: "none", padding: "12px 30px", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "600", marginTop: "25px", transition: "background-color 0.3s ease" }}>Back</button>
      </div>
    </>
  );
};

export default Cart;


