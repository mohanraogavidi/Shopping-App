import React, { useState } from 'react';
import { FaSearch, FaTimes, FaBars, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { useAuth } from './Authcontent';
import { useWishlist } from './WishlistContext';
import { useCartlist } from './CartlistContext';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/Nykaalogo.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = ({
  product,
  mainImage,
  thumbnails,
  tag,
  title,
  rating,
  reviews,
  price,
  discount,
  sizes = []
}) => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();
  const { addToWishlist, wishlistItems } = useWishlist();
  const { addToCartlist, cartlistItems } = useCartlist();
  const wishlistCount = wishlistItems.length;
  const cartlistCount = cartlistItems.length;
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentMainImage, setCurrentMainImage] = useState(mainImage);
  const handleAddToWishlist = () => {
    if (sizes.length > 0 && !selectedSize) {
      toast.error('Please select a size before adding to wishlist.');
      return;
    }
    const itemWithSize = sizes.length > 0 ? { ...product, selectedSize } : product;
    addToWishlist(itemWithSize);
    navigate('/wishlist');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnHover draggable theme="colored" />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', backgroundColor: '#0077b6', color: '#fff', position: 'sticky', top: '0', zIndex: '1000' }}>
        <div className="nav-left">
          <div className="logo">
            <img src={logo} alt="logo" style={{ width: '100px', height: '85px', borderRadius: '10px', cursor: 'pointer' }} />
          </div>
          <button
            className="hamburger-button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'block', marginRight: '330px', background: 'none', border: 'none', color: '#fff', fontSize: '25px', cursor: 'pointer' }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav>
          <div style={{ position: 'fixed', top: '0', left: menuOpen ? '0' : '-270px', width: '250px', height: '100vh', backgroundColor: '#0077b6', paddingTop: '70px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '20px', transition: 'left 0.3s ease-in-out', zIndex: '1001' }}>
            <div style={{ color: '#fff', fontSize: '28px', cursor: 'pointer', listStyle: 'none' }} onClick={() => { navigate('/home'); setMenuOpen(false); }}>Home</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              {isAuthenticated ? (
                <>
                  <div style={{ color: '#fff', fontSize: '28px', cursor: 'pointer', listStyle: 'none' }} onClick={handleLogout}>Logout</div>
                </>
              ):(
                <>
                  <button onClick={handleLogin} style={{ backgroundColor: '#fff', color: '#0077b6', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Login</button>
                  <button onClick={() => navigate("/signup")} style={{ backgroundColor: '#ffd166', color: 'black', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>SignUp</button>
                </>
              )}
              </div>
          </div>
          {menuOpen && <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '1000' }} onClick={() => setMenuOpen(false)}></div>}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', padding: '5px 10px', width: '50%' }}>
          <input type="text" placeholder="search products..." style={{ border: 'none', outline: 'none', flex: '0.7', padding: '10px', borderRadius: '20px' }} />
          <FaSearch style={{ color: '#d66503', fontSize: '28px', padding: '5px', position: 'relative', left: '5px', backgroundColor: '#ffffff', borderRadius: '50%', cursor: 'pointer' }} />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="icon-btn" onClick={() => navigate('/wishlist')} style={{ position: 'relative', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '50%', cursor: 'pointer' }}>
            <FaHeart style={{ fontSize: '18px', color: '#0077b6' }} />
            <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#ff4b4b', color: '#fff', borderRadius: '50%', padding: '2px 6px', fontSize: '12px', fontWeight: 'bold' }}>{wishlistCount}</span>
          </div>
          <div className="icon-btn" onClick={() => navigate('/cart')} style={{ position: 'relative', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '50%', cursor: 'pointer' }}>
            <FaShoppingBag style={{ fontSize: '18px', color: '#0077b6' }} />
            <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#ff4b4b', color: '#fff', borderRadius: '50%', padding: '2px 6px', fontSize: '12px', fontWeight: 'bold' }}>{cartlistCount}</span>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '60px auto', display: 'flex', gap: '30px', padding: '20px', backgroundColor: '#e0f7fa' }}>
        <div style={{ display: 'flex', gap: '10px', width: '58%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {thumbnails.map((thumb, index) => (
              <img key={index} src={thumb} alt={title} onClick={() => setCurrentMainImage(thumb)} style={{ width: '70px', height: '75px', objectFit: 'cover', cursor: 'pointer', borderRadius: '6px', transition: 'transform 0.2s ease' }} onMouseOver={(e) => e.target.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.target.style.transform = 'translateY(0)'} />
            ))}
          </div>
          <div style={{ flex: 1 }}>
            <img src={currentMainImage} alt={title} style={{ width: '370px', height: 'auto', maxHeight: '600px', borderRadius: '10px', objectFit: 'cover', cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
          </div>
        </div>
        <div style={{ width: '52%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <p style={{ color: 'crimson', fontWeight: '700', textTransform: 'uppercase', fontSize: '30px' }}>{tag}</p>
          <h2 style={{ fontSize: '22px', lineHeight: '1.3', fontWeight: '700' }}>{title}</h2>
          <div style={{ display: 'flex', gap: '10px', color: '#555' }}>
            <span style={{ fontWeight: 'bold' }}>{rating}</span>
            <span>{reviews}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '22px', fontWeight: 'bold' }}>{price}</span>
            <span style={{ color: 'green', fontWeight: 'bold' }}>{discount}</span>
          </div>
          {sizes.length > 0 && (
            <div className="size-section">
              <h4>Select Size</h4>
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className={selectedSize === size ? 'selected' : ''}
                  onClick={() => setSelectedSize(size)}
                  style={{ marginRight: '8px', padding: '8px 16px', border: '1px solid #aaa', borderRadius: '20px', background: '#fff', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => { if (selectedSize !== size) { e.target.style.borderColor = '#000'; e.target.style.backgroundColor = '#f0f0f0'; } }}
                  onMouseOut={(e) => { if (selectedSize !== size) { e.target.style.borderColor = '#aaa'; e.target.style.backgroundColor = '#fff'; } }}
                >
                  {size}
                </button>
              ))}
            </div>
          )}
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button className="wishlist-btn" onClick={handleAddToWishlist} style={{ padding: '12px 20px', backgroundColor: '#f5f5f6', border: '1px solid #ccc', cursor: 'pointer' }}>
              ♡ Add to Wishlist
            </button>
            <button className="bag-btn" onClick={() => {
              if (sizes.length > 0 && !selectedSize) {
                toast.error('Please select a size before adding to cart.');
                return;
              }
              const itemWithSize = sizes.length > 0 ? { ...product, selectedSize } : product;
              addToCartlist(itemWithSize);
            }} style={{ padding: '12px 20px', backgroundColor: 'black', color: 'white', cursor: 'pointer' }}>
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


