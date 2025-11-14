import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTimes, FaBars, FaSearch, FaShoppingBag  } from "react-icons/fa";
import { useAuth } from "./Authcontent";
import { useWishlist } from "./WishlistContext";
import { useCartlist } from "./CartlistContext";
import logo from '../Assets/Nykaalogo.png'
import './cart.css'
const Cart = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth();
  const { wishlistItems } = useWishlist();
  const { cartlistItems, removeFromCartlist } = useCartlist();
  
   const [menuOpen, setMenuOpen] = useState(false);
   const[quantities,setQuantities]=useState(
    cartlistItems.reduce((acc,item)=>{
      acc[item.id]=1;
      return acc;
    },{})
   )
   const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleLogin = () => {
    login()
    navigate("/");
  };
  const parsePrice = (priceString) => {
    return parseFloat(priceString.replace(/₹|,/g, ''));
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartlistItems, quantities } });
  };
   const wishlistCount = wishlistItems.length;
   const cartlistCount = cartlistItems.length;
   const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1), // minimum 1
    }));
  };
  return (
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
      <div className="cart-container">
      <h2>Your Cart</h2>

      <div className="cart-items">

        {cartlistItems.map(item => (
          <div className="cart-card" key={`${item.id}-${item.selectedSize}`}>
            <img src={item.img} alt={item.name} />

            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>Size: {item.selectedSize}</p>
              <p className="cart-price">Price: ₹{parsePrice(item.price).toFixed(2)}</p>
              <div className="quantity-control">
                <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{quantities[item.id] || 1}</span>
                <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <p className="cart-total">Total: ₹{(parsePrice(item.price) * (quantities[item.id] || 1)).toFixed(2)}</p>
            </div>

            <button className="remove-btn" onClick={() => removeFromCartlist(item.id)}>Remove</button>
          </div>
        ))}
      </div>

      
      {cartlistItems.length > 0 && (
          <div className="checkout-section">
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
    </div>
    </div>
  );
};

export default Cart;

