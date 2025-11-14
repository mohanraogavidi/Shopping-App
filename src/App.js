// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Contexts from k_app
import { AuthProvider } from "./k_app/Authcontent";
import { WishlistProvider } from "./k_app/WishlistContext";
import { CartlistProvider } from "./k_app/CartlistContext";

// Auth
import AuthPage from "./Auth/AuthPage";

// Home components
import Home from "./Home/HomePage";
import ProductDetails from "./Home/ProductDetails";
import Cart from "./Home/Cart";
import Checkout from "./Home/Checkout";
import Wishlist from "./Home/Wishlist";

// k_app components (for individual products)
import Styli from "./k_app/Styli";
import Campus from "./k_app/Campus";
import Garage from "./k_app/Garage";
import Puma from "./k_app/Puma";
import Mabish from "./k_app/WomenMabish";
import Libas from "./k_app/WomenLibas";
import Stylum from "./k_app/WomenStylum";
import Chaabra from "./k_app/WomenChaabra";
import KidsStylo from "./k_app/KidsStylo";
import KidsAj from "./k_app/KidsAj";
import KidsBitiya from "./k_app/KidsBitiya";
import KidsKisah from "./k_app/KidsKisah";
import BagsStyli from "./k_app/BagsStyli";
import BagsTommy from "./k_app/BagsTommy";
import BagsZouk from "./k_app/BagsZouk";
import BagsMouchi from "./k_app/BagsMouchi";
import ShoesCampus from "./k_app/ShoesCampus";
import ShoesPuma from "./k_app/ShoesPuma";
import ShoesRedTape from "./k_app/ShoesRedTape";
import ShoesReebok from "./k_app/ShoesReebok";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthProvider>
      <WishlistProvider>
        <CartlistProvider>
          <Router>
            <Routes>
              <Route path="/" element={isLoggedIn ? <Home onLogout={handleLogout} /> : <AuthPage onLoginSuccess={() => setIsLoggedIn(true)} />} />
              <Route path="/home" element={<Home onLogout={handleLogout} />} />
              <Route path="/product/:id" element={<ProductDetails onLogout={handleLogout} />} />
              <Route path="/cart" element={<Cart onLogout={handleLogout} />} />
              <Route path="/wishlist" element={<Wishlist onLogout={handleLogout} />} />
              <Route path="/checkout" element={<Checkout onLogout={handleLogout} />} />
              {/* Individual product routes */}
              <Route path="/styli" element={<Styli />} />
              <Route path="/campus" element={<Campus />} />
              <Route path="/garage" element={<Garage />} />
              <Route path="/puma" element={<Puma />} />
              <Route path="/mabish" element={<Mabish />} />
              <Route path="/libas" element={<Libas />} />
              <Route path="/stylum" element={<Stylum />} />
              <Route path="/chaabra" element={<Chaabra />} />
              <Route path="/kidsstylo" element={<KidsStylo />} />
              <Route path="/kidsaj" element={<KidsAj />} />
              <Route path="/kidsbitiya" element={<KidsBitiya />} />
              <Route path="/kidskisah" element={<KidsKisah />} />
              <Route path="/bagsstyli" element={<BagsStyli />} />
              <Route path="/bagstommy" element={<BagsTommy />} />
              <Route path="/bagszouk" element={<BagsZouk />} />
              <Route path="/bagsmouchi" element={<BagsMouchi />} />
              <Route path="/shoescampus" element={<ShoesCampus />} />
              <Route path="/shoespuma" element={<ShoesPuma />} />
              <Route path="/shoesredtape" element={<ShoesRedTape />} />
              <Route path="/shoesreebok" element={<ShoesReebok />} />
            </Routes>
           
            <ToastContainer />
          </Router>
        </CartlistProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}

export default App;
