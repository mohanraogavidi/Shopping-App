import {React, useState} from "react";
import { useAuth } from './Authcontent';
import { useWishlist } from './WishlistContext';
import { useCartlist } from './CartlistContext';
import { FaTimes, FaBars, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from '../Assets/Nykaalogo.png'
import './wishlist.css'
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
            
            <div className="wishlist-container">
                <h2>Your WishList</h2>
                <div className="wishlist-items">
                   {wishlistItems.map(item=>(
                    <div className="wishlist-card" key={`${item.id}-${item.selectedSize}`}>
                        <img src={item.img} alt="{item.name}" />
                        <h3>{item.name}</h3>
                        <p>Size: {item.selectedSize}</p>
                        <button className="move-to-cart" onClick={() => { addToCartlist(item); removeFromWishlist(item.id); navigate("/cart"); }}>Move to Cart</button>
                        <button className="remove-from-wishlist" onClick={() => removeFromWishlist(item.id)}>Remove</button>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    );
};
export default Wishlist

