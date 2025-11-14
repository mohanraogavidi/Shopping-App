import {React,useState,useEffect} from "react";
import logo from './Asstes/mslogo.png';
import {useNavigate} from "react-router-dom";
import search from './Asstes/search2.png';
import profile from './Asstes/Profile.jpg'
import {FaTimes,FaBars} from 'react-icons/fa';

export default function Navbar({ onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const navigate=useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const totalItems = cart.reduce((sum, item) => {
        if (item.product) return sum + item.quantity; // new format
        return sum + 1; // old format fallback
      }, 0);
      setCartCount(totalItems);
    };
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlistCount(wishlist.length);
    };
    updateCartCount();
    updateWishlistCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('storage', updateWishlistCount);
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('storage', updateWishlistCount);
    };
  }, []);
   const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: 'auto', backgroundColor: '#fff', color: '#00796b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 40px', fontFamily: 'Arial, sans-serif', zIndex: '1000', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', borderBottom: '2px solid #e0e0e0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
        <div style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>
            <img src={logo} alt="logo" style={{ height: '50px', width: '70px', borderRadius: '50px' }}/>
        </div>
        <button style={{ display: 'block', fontSize: '24px', color: '#00796b', border: 'none', background: 'transparent', cursor: 'pointer', marginLeft: '20px' }} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        

        <div style={{ position: 'fixed', top: '0', left: menuOpen ? '0' : '-250px', width: '250px', height: '100%', backgroundColor: '#007bff', color: 'white', display: 'flex', flexDirection: 'column', paddingTop: '60px', transition: 'left 0.3s ease', zIndex: '1000' }}>
          <div style={{ padding: '15px 20px', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '18px' }} onClick={()=>{ navigate("/home"); setMenuOpen(false) }}>Home</div>
          <div style={{ padding: '15px 20px', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '18px' }} onClick={() => { navigate('/home'); scrollToSection('mens-section'); setMenuOpen(false); }}>Men</div>
          <div style={{ padding: '15px 20px', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '18px' }} onClick={() => { navigate('/home'); scrollToSection('women-section'); setMenuOpen(false); }}>Women</div>
          <div style={{ padding: '15px 20px', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '18px' }} onClick={() => { navigate('/home'); scrollToSection('kids-section'); setMenuOpen(false); }}>Kids</div>
          <div style={{ padding: '15px 20px', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '18px' }} onClick={() => { navigate('/home'); scrollToSection('shoes-section'); setMenuOpen(false); }}>Shoes</div>
          <div style={{ padding: '15px 20px', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '18px' }} onClick={() => { navigate('/home'); scrollToSection('bags-section'); setMenuOpen(false); }}>Bags</div>
          <div style={{ padding: '15px 20px', cursor: 'pointer', borderBottom: '1px solid rgba(255, 255, 255, 0.2)', fontSize: '18px' }} onClick={() => { onLogout(); navigate('/'); setMenuOpen(false); }}>Logout</div>
        </div>
        {menuOpen && <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '999' }} onClick={() => setMenuOpen(false)}></div>}

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',width: '500px',height:"50px", marginLeft: '400px',  color: '#626262', background: '#ebfffc', borderRadius: '40px',}}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',width:"450px", backgroundColor:'#fff', gap: '12px',borderRadius: '40px',  }}>
            <input type="text" placeholder="Search " style={{ width: '380px', height: '20px', border: 'none', outline: 'none',  paddingLeft: '25px', fontSize: '15px',borderRadius: '40px', }}/>
            <img src={search} alt="search" style={{ width: '35px', borderRadius: '50%', background: '#ebfffc', cursor: 'pointer' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '250px', alignItems: 'center' }}>
          <button style={{ display: 'flex', justifyContent: 'center', width: '40px', height: '35px', borderRadius: '10%', marginLeft: '10px', border: 'none', fontSize: '20px', textAlign: 'center', position: 'relative', backgroundColor: 'transparent', color: '#00796b', cursor: 'pointer' }} onClick={() => navigate('/wishlist')}>
            ♥️
            {wishlistCount > 0 && <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#ff4b4b', color: '#fff', borderRadius: '50%', padding: '2px 6px', fontSize: '12px', fontWeight: 'bold' }}>{wishlistCount}</span>}
          </button>
          <button style={{ display: 'flex', justifyContent: 'center', width: '40px', height: '35px', borderRadius: '10%', marginLeft: '10px', border: 'none', fontSize: '20px', textAlign: 'center', position: 'relative', backgroundColor: 'transparent', color: '#00796b', cursor: 'pointer' }} onClick={() => navigate('/cart')}>
            🎁
            {cartCount > 0 && <span style={{ position: 'absolute', top: '-5px', right: '-5px', backgroundColor: '#ff4b4b', color: '#fff', borderRadius: '50%', padding: '2px 6px', fontSize: '12px', fontWeight: 'bold' }}>{cartCount}</span>}
          </button>
          <button style={{ display: 'flex', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '50%', border: 'none', marginLeft: '20px', backgroundColor: 'transparent', cursor: 'pointer' }}><img src={profile} alt="profile" style={{ width: '55px', height: '50px', borderRadius: '50%' }} /></button>
          
        </div>
      </div>
    </nav>
  );
}


