import {React, useState} from "react";
import { useAuth } from './Authcontent';
import { useWishlist } from './WishlistContext';
import { useCartlist } from './CartlistContext';
import { FaTimes, FaBars, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from '../Assets/Nykaalogo.png'

const Wishlist = () =>{
    const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { cartlistItems, addToCartlist } = useCartlist();
  
   const [menuOpen, setMenuOpen] = useState(false);
   const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    login()
    navigate("/");
  };
   const wishlistCount = wishlistItems.length;
   const cartlistCount = cartlistItems.length;
    return(
        <div>
            <div className="navbar" >
                        <div className="nav-left">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                             </div>
                            <button className="hamburger-button" onClick={() => setMenuOpen(!menuOpen)} >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                      </button>
                        </div>
                        <nav >
                        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
                        <div className="menu-item" onClick={() => { navigate('/home'); setMenuOpen(false); }} style={{textAlign:'center'}}>Home</div>
                        <div className="nav-buttons">
                            {isAuthenticated ? (
                                <>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className='menu-item' onClick={handleLogout} >Logout</div>
                                </>
                            ):(
                                <>
                                    <button onClick={handleLogin} className="login-btn">Login</button>
                                    <button onClick={() => navigate("/signup")} className="signup-btn">SignUp</button>
                                </>
                            )}
                        </div>
                    </div>
            
                      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
                        </nav>
                        <div className="nav-search">
                            <input type="text" placeholder='search products...' />
                            <FaSearch className='search-icon'/>
                        </div>
                        
                        <div className="nav-buttons">
                            <div className="icon-btn" onClick={() => navigate("/wishlist")}>
                            <FaHeart className="icon" />
                            <span className="badge">{wishlistCount}</span>
                            </div>
                            <div className="icon-btn" onClick={() => navigate("/cart")}>
                            <FaShoppingBag className="icon" />
                            <span className="badge">{cartlistCount}</span>
                        </div>
                    </div>
            </div>
            
            <div style={{ width: '100%', maxWidth: '1200px', margin: 'auto', padding: '30px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', textAlign: 'center' }}>Your WishList</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                   {wishlistItems.map(item=>(
                    <div style={{ backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', padding: '15px', textAlign: 'center', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }} key={`${item.id}-${item.selectedSize}`}>
                        <img src={item.img} alt="{item.name}" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
                        <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{item.name}</h3>
                        <p>Size: {item.selectedSize}</p>
                        <button style={{ padding: '10px 15px', border: 'none', cursor: 'pointer', borderRadius: '5px', margin: '5px', fontWeight: '500', backgroundColor: 'black', color: 'white' }} onClick={() => { addToCartlist(item); removeFromWishlist(item.id); navigate("/cart"); }}>Move to Cart</button>
                        <button style={{ padding: '10px 15px', border: 'none', cursor: 'pointer', borderRadius: '5px', margin: '5px', fontWeight: '500', backgroundColor: '#ff4b4b', color: 'white' }} onClick={() => removeFromWishlist(item.id)}>Remove</button>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    );
};
export default Wishlist

