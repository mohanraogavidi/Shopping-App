import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Wishlist = ({ onLogout }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(items);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedItems = wishlistItems.filter(item => item.id !== id);
    setWishlistItems(updatedItems);
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
  };

  const addToCartFromWishlist = (product) => {
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if product is already in cart
    const existingItemIndex = existingCart.findIndex(item => item.product.id === product.id);
    if (existingItemIndex !== -1) {
      // Increment quantity
      existingCart[existingItemIndex].quantity += 1;
      alert('Quantity increased in cart!');
    } else {
      // Add new item with quantity 1
      existingCart.push({ product, quantity: 1 });
      alert('Added to cart!');
    }
    localStorage.setItem('cart', JSON.stringify(existingCart));
  };

  return (
    <>
      <Navbar onLogout={onLogout} />
      <div style={{paddingTop: "80px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "100%", minHeight: "100vh",backgroundColor: "#e0f7fa",}}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#00796b", marginBottom: "20px", textAlign: "center" }}>Your Wishlist</h1>
        {wishlistItems.length === 0 ? (
          <p style={{ fontSize: "18px", color: "#555" }}>Your wishlist is empty.</p>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            {wishlistItems.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems:"center", flexDirection: 'row', width: '900px', backgroundColor: "#fff", borderRadius: '15px', margin: '10px', padding: '20px', border: "2px solid #e0e0e0", boxShadow: "15px 14px 15px rgba(60, 60, 59, 0.3)", }}>
                <img src={item.image} alt={item.name} style={{ width: '120px', borderRadius: '15px', marginRight: '20px' }} />
                <div style={{ width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
                  <h3 style={{ fontSize: '18px', color: '#00796b', margin: 0, fontWeight: "600" }}>{item.brand}</h3>
                  <p style={{ fontSize: '16px', color: '#555', margin: '2px 0' }}>{item.name}</p>
                  <p style={{ fontSize: '18px', color: '#28a745', margin: '2px 0', fontWeight: "700" }}>Price: {item.price}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <button onClick={() => addToCartFromWishlist(item)} style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontSize: "16px", fontWeight: "600", transition: "background-color 0.3s ease" }}>
                    Add to Cart
                  </button>
                  <button onClick={() => removeFromWishlist(item.id)} style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontSize: "16px", fontWeight: "600", transition: "background-color 0.3s ease" }}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button onClick={() => navigate('/home')} style={{backgroundColor: "#007bff", color: "white", border: "none", padding: "12px 30px", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "600", marginTop: "25px", transition: "background-color 0.3s ease" }}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;


