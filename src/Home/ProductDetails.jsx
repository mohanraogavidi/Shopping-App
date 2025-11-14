import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './Product.css'; // Reuse or create styles

const ProductDetails = ({ onLogout }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');

  // Mock product data - in a real app, fetch from API or props
  const products = [
    // Mens products
    { id: 1, image: require('./Asstes/men1.jpg'), brand: 'Snitch', name: 'Linen Line Green Stripes Shirt', price: '₹ 299/-', originalPrice: '₹ 299/-', size: 'M', feedback: '4.5/5', discount: '0%', category: 'mens' },
    { id: 2, image: require('./Asstes/men2.jpg'), brand: 'Perch', name: 'Men White Linen Cotton', price: '₹ 499/-', originalPrice: '₹ 499/-', size: 'L', feedback: '4.2/5', discount: '10%', category: 'mens' },
    { id: 3, image: require('./Asstes/men3.jpg'), brand: 'The Souled Store', name: 'Original Tropical Beat', price: '₹ 639/-', originalPrice: '₹ 639/-', size: 'XL', feedback: '4.7/5', discount: '15%', category: 'mens' },
    { id: 4, image: require('./Asstes/men4.jpg'), brand: 'PRONK', name: 'Vintage Nirvana Men Oversized', price: '₹ 1299/-', originalPrice: '₹ 1299/-', size: 'M', feedback: '4.3/5', discount: '20%', category: 'mens' },
    { id: 5, image: require('./Asstes/men5.jpg'), brand: 'PRONK', name: 'Vintage Nirvana Men Oversized', price: '₹ 1299/-', originalPrice: '₹ 1299/-', size: 'L', feedback: '4.1/5', discount: '25%', category: 'mens' },
    { id: 26, image: require('../Assets/stylimendark.jpeg'), brand: 'Styli', name: 'Men Dark Blue Ballon Fit Dark Wash Denim', price: '₹1,440', originalPrice: '₹1,440', size: 'M', feedback: '3.6/5', discount: '28%', category: 'mens' },
    { id: 27, image: require('../Assets/campussutra.jpeg'), brand: 'Campus Sutra', name: 'Men Black Solid Casual Shirt', price: '₹608', originalPrice: '₹608', size: 'L', feedback: '3.4/5', discount: '35%', category: 'mens' },
    { id: 28, image: require('../Assets/puma.jpeg'), brand: 'Puma', name: 'Smashic Unisex White Sneakers', price: '₹1,800', originalPrice: '₹1,800', size: '8', feedback: '3.9/5', discount: '50%', category: 'mens' },
    { id: 29, image: require('../Assets/gargego.jpeg'), brand: 'Garage', name: 'Men Garage Shirt', price: '₹753', originalPrice: '₹753', size: 'XL', feedback: '3.8/5', discount: '65%', category: 'mens' },
     //Womens products
    { id: 6, image: require('./Asstes/women1.jpg'), brand: 'PRONK', name: 'Red Silk Blend Heavy', price: '₹ 799/-', originalPrice: '₹ 799/-', size: 'M', feedback: '4.4/5', discount: '5%', category: 'women' },
    { id: 7, image: require('./Asstes/women2.jpg'), brand: 'Mabish By Sonal Jain', name: 'Pink Crop Top with Draped', price: '₹ 489/-', originalPrice: '₹ 489/-', size: 'S', feedback: '4.6/5', discount: '10%', category: 'women' },
    { id: 8, image: require('./Asstes/women3.jpg'), brand: 'Akhilam', name: 'Women Pink Georgette Saree', price: '₹ 829/-', originalPrice: '₹ 829/-', size: 'Free Size', feedback: '4.3/5', discount: '15%', category: 'women' },
    { id: 9, image: require('./Asstes/women4.jpg'), brand: 'SGF11', name: 'Pure Soft Silk Handwork', price: '₹ 699/-', originalPrice: '₹ 699/-', size: 'L', feedback: '4.5/5', discount: '20%', category: 'women' },
    { id: 10, image: require('./Asstes/women5.jpg'), brand: 'SGF11', name: 'Pure Soft Silk Handwork', price: '₹ 699/-', originalPrice: '₹ 699/-', size: 'XL', feedback: '4.2/5', discount: '25%', category: 'women' },
    { id: 30, image: require('../Assets/chaabra.webp'), brand: 'Chaabra', name: 'Women Chaabra Dress', price: '₹3,920', originalPrice: '₹3,920', size: 'M', feedback: '3.4/5', discount: '75%', category: 'women' },
    { id: 31, image: require('../Assets/peachself.jpeg'), brand: 'Libas', name: 'Women Libas Dress', price: '₹4,880', originalPrice: '₹4,880', size: 'L', feedback: '3.8/5', discount: '65%', category: 'women' },
    { id: 32, image: require('../Assets/Mabish.webp'), brand: 'Mabish', name: 'Women Mabish Dress', price: '₹1,976', originalPrice: '₹1,976', size: 'S', feedback: '3.8/5', discount: '65%', category: 'women' },
    { id: 33, image: require('../Assets/stylum.webp'), brand: 'Stylum', name: 'Women Slim Fit Multi Striped Full Sleeves Cutaway Collar Casual Shirt - White', price: '₹1,334', originalPrice: '₹1,334', size: 'M', feedback: '3.8/5', discount: '65%', category: 'women' },
    // Kids products
    { id: 11, image: require('./Asstes/kid1.jpg'), brand: 'AJ Dezines', name: 'Kurta and Sharara for Girls', price: '₹ 199/-', originalPrice: '₹ 199/-', size: 'S', feedback: '4.7/5', discount: '0%', category: 'kids' },
    { id: 12, image: require('./Asstes/kid2.jpg'), brand: 'AJ Dezines', name: 'Silk Dhoti Kurta for Boys', price: '₹ 1505/-', originalPrice: '₹ 1505/-', size: 'M', feedback: '4.4/5', discount: '10%', category: 'kids' },
    { id: 13, image: require('./Asstes/kid3.jpg'), brand: 'BownBee', name: 'Pure Chanderi Sleeve Sherwani', price: '₹ 679/-', originalPrice: '₹ 679/-', size: 'L', feedback: '4.6/5', discount: '15%', category: 'kids' },
    { id: 14, image: require('./Asstes/kid4.jpg'), brand: 'KISAH', name: 'Floral Printed Nehru Jacket', price: '₹ 399/-', originalPrice: '₹ 399/-', size: 'XL', feedback: '4.3/5', discount: '20%', category: 'kids' },
    { id: 15, image: require('./Asstes/kid5.jpg'), brand: 'Little Bansi', name: 'Kurta with Dhoti and Jacket', price: '₹ 399/-', originalPrice: '₹ 399/-', size: 'XXL', feedback: '4.5/5', discount: '25%', category: 'kids' },
    { id: 38, image: require('../Assets/AjDezines.jpeg'), brand: 'AJ Dezines', name: 'Kids AJ Dress', price: '₹ 1,200', originalPrice: '₹ 1,200', size: 'M', feedback: '4.0/5', discount: '30%', category: 'kids' },
    { id: 39, image: require('../Assets/bitiyabhama.jpeg'), brand: 'Bitiya', name: 'Kids Bitiya Outfit', price: '₹ 850', originalPrice: '₹ 850', size: 'L', feedback: '4.2/5', discount: '20%', category: 'kids' },
    { id: 40, image: require('../Assets/Kisah.jpeg'), brand: 'KISAH', name: 'Kids Kisah Jacket', price: '₹ 650', originalPrice: '₹ 650', size: 'S', feedback: '4.1/5', discount: '15%', category: 'kids' },
    { id: 41, image: require('../Assets/Stylobug.jpeg'), brand: 'Stylo', name: 'Kids Stylo Shirt', price: '₹ 950', originalPrice: '₹ 950', size: 'XL', feedback: '4.3/5', discount: '25%', category: 'kids' },
    { id: 42, image: require('../Assets/shoescampus.jpeg'), brand: 'Campus', name: 'Campus Shoes', price: '₹1,500', originalPrice: '₹1,500', size: '8', feedback: '4.0/5', discount: '30%', category: 'shoes' },
    { id: 43, image: require('../Assets/shoespuma.jpeg'), brand: 'Puma', name: 'Puma Shoes', price: '₹2,500', originalPrice: '₹2,500', size: '9', feedback: '4.2/5', discount: '20%', category: 'shoes' },
    { id: 44, image: require('../Assets/shoesredtape.jpeg'), brand: 'Red Tape', name: 'Red Tape Shoes', price: '₹1,800', originalPrice: '₹1,800', size: '10', feedback: '3.8/5', discount: '25%', category: 'shoes' },
    { id: 45, image: require('../Assets/shoesreebok.jpeg'), brand: 'Reebok', name: 'Reebok Shoes', price: '₹2,200', originalPrice: '₹2,200', size: '11', feedback: '4.1/5', discount: '15%', category: 'shoes' },
    { id: 46, image: require('../Assets/bagsmouchi.jpeg'), brand: 'Mouchi', name: 'Mouchi Bag', price: '₹3,894', originalPrice: '₹3,894', size: 'Small', feedback: '4.2/5', discount: '50%', category: 'bags' },
    { id: 47, image: require('../Assets/bagsstyli.jpeg'), brand: 'Styli', name: 'Styli Bag', price: '₹1,332', originalPrice: '₹1,332', size: 'Medium', feedback: '4.0/5', discount: '30%', category: 'bags' },
    { id: 48, image: require('../Assets/bagstommy.jpeg'), brand: 'Tommy', name: 'Tommy Bag', price: '₹4,200', originalPrice: '₹4,200', size: 'Large', feedback: '4.1/5', discount: '25%', category: 'bags' },
    { id: 49, image: require('../Assets/bagszouk.jpeg'), brand: 'Zouk', name: 'Zouk Bag', price: '₹4,000', originalPrice: '₹4,000', size: 'Small', feedback: '4.3/5', discount: '65%', category: 'bags' },
    // Shoes products
    { id: 16, image: require('./Asstes/shoe1.jpg'), brand: 'Snitch', name: 'Linen Line Green Stripes Shirt', price: '₹ 299/-', originalPrice: '₹ 299/-', size: '8', feedback: '4.2/5', discount: '0%', category: 'shoes' },
    { id: 17, image: require('./Asstes/shoe2.jpg'), brand: 'Perch', name: 'Men White Linen Cotton', price: '₹ 499/-', originalPrice: '₹ 499/-', size: '9', feedback: '4.4/5', discount: '10%', category: 'shoes' },
    { id: 18, image: require('./Asstes/shoe3.jpg'), brand: 'The Souled Store', name: 'Original Tropical Beat', price: '₹ 639/-', originalPrice: '₹ 639/-', size: '10', feedback: '4.6/5', discount: '15%', category: 'shoes' },
    { id: 19, image: require('./Asstes/shoe4.jpg'), brand: 'PRONK', name: 'Linen Line Green Stripes Shirt', price: '₹ 1299/-', originalPrice: '₹ 1299/-', size: '11', feedback: '4.3/5', discount: '20%', category: 'shoes' },
    { id: 20, image: require('./Asstes/shoe5.jpg'), brand: 'Campus', name: 'Og-30 Men Grey Sneakers', price: '₹ 1299/-', originalPrice: '₹ 1299/-', size: '12', feedback: '4.5/5', discount: '25%', category: 'shoes' },
    // Bags products
    { id: 21, image: require('./Asstes/bag1.jpg'), brand: 'Snitch', name: 'Linen Line Green Stripes Shirt', price: '₹ 299/-', originalPrice: '₹ 299/-', size: 'Small', feedback: '4.1/5', discount: '0%', category: 'bags' },
    { id: 22, image: require('./Asstes/bag2.jpg'), brand: 'Perch', name: 'Men White Linen Cotton', price: '₹ 499/-', originalPrice: '₹ 499/-', size: 'Medium', feedback: '4.3/5', discount: '10%', category: 'bags' },
    { id: 23, image: require('./Asstes/bag3.jpg'), brand: 'The Souled Store', name: 'Original Tropical Beat', price: '₹ 639/-', originalPrice: '₹ 639/-', size: 'Large', feedback: '4.5/5', discount: '15%', category: 'bags' },
    { id: 24, image: require('./Asstes/bag4.jpg'), brand: 'PRONK', name: 'Vintage Nirvana Men Oversized', price: '₹ 1299/-', originalPrice: '₹ 1299/-', size: 'Small', feedback: '4.2/5', discount: '20%', category: 'bags' },
    { id: 25, image: require('./Asstes/bag5.jpg'), brand: 'Zouk', name: 'Multicolour Mandala Print Office Essential Shoulder Bag', price: '₹ 2,023/-', originalPrice: '₹ 2,023/-', size: 'Medium', feedback: '4.4/5', discount: '63%', category: 'bags' },
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (availableSizes.length > 0 && !selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }
    // Get existing cart items from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if product with selected size is already in cart
    const existingItemIndex = existingCart.findIndex(item => item.product.id === product.id && item.selectedSize === selectedSize);
    if (existingItemIndex !== -1) {
      // Increment quantity
      existingCart[existingItemIndex].quantity += 1;
      alert('Quantity increased!');
    } else {
      // Add new item with quantity 1 and selected size
      existingCart.push({ product, quantity: 1, selectedSize });
      alert('Added to cart!');
    }
    localStorage.setItem('cart', JSON.stringify(existingCart));
    // Store the last product ID for back navigation
    localStorage.setItem('lastProductId', product.id);
    // Navigate to cart
    navigate('/cart');
  };

  const handleAddToWishlist = () => {
    // Get existing wishlist items from localStorage
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    // Check if product is already in wishlist
    const existingItemIndex = existingWishlist.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      alert('Already in wishlist!');
    } else {
      // Add new item
      existingWishlist.push(product);
      alert('Added to wishlist!');
    }
    localStorage.setItem('wishlist', JSON.stringify(existingWishlist));
  };



  // Define available sizes based on category
  const getAvailableSizes = (category) => {
    if (category === 'mens' || category === 'women') {
      return ['S', 'M', 'L', 'XL', 'XXL'];
    } else if (category === 'kids') {
      return ['S', 'M', 'L', 'XL'];
    } else if (category === 'shoes') {
      return ['6', '7', '8', '9', '10', '11', '12'];
    } else if (category === 'bags') {
      return ['Small', 'Medium', 'Large'];
    }
    return [];
  };

  const availableSizes = getAvailableSizes(product.category);

  return (
    <>
      <Navbar onLogout={onLogout} />
      <div style={{paddingTop: "80px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "100%", minHeight: "100vh",backgroundColor: "#e0f7fa",}}>
        {/* Product Details */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px", backgroundColor: "white", borderRadius: "12px", boxShadow: "0 6px 18px rgba(0,0,0,0.1)", padding: "30px", maxWidth: "900px",  marginTop: "20px",}}>
          <img src={product.image} alt={product.name} style={{ width: "250px", objectFit: "cover", borderRadius: "12px", }}/>
          <div style={{ width: "350px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1 style={{ fontSize: "18px", color: "#222", fontWeight: "700", marginBottom: "8px" }}>{product.brand}</h1>
            <h2 style={{ fontSize: "15px", color: "#666", marginBottom: "5px" }}>{product.name}</h2>
            <div>
              <p style={{ fontSize: "15px", marginBottom: "5px" }}>Select Size:</p>
              <div style={{ display: "flex", gap: "10px", marginBottom: "0px" }}>
                {availableSizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)}
                    style={{ padding: "8px 15px", borderRadius: "20px", border: "1px solid #ccc", backgroundColor: selectedSize === size ? "#007bff" : "#f0f0f0", color: selectedSize === size ? "white" : "black", cursor: "pointer", fontWeight: "600", transition: "all 0.3s ease", }}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <p style={{ fontSize: "15px", color: "#333", marginBottom: "0px" }}>Price: {product.price}</p>
            {product.discount !== "0%" && (
              <p style={{ fontSize: "15px", color: "#28a745", marginBottom: "0px" }}>Discount: {product.discount}</p>
            )}
            <p style={{ fontSize: "18px", color: "#555", marginBottom: "15px" }}>Feedback: {product.feedback}</p>

            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <button onClick={handleAddToCart} onMouseEnter={(e) => (e.target.style.backgroundColor = "#218838")}onMouseLeave={(e) => (e.target.style.backgroundColor = "#28a745")}
                style={{backgroundColor: "#28a745", color: "white",border: "none", padding: "12px 25px", borderRadius: "8px", cursor: "pointer",fontSize: "16px", fontWeight: "600",transition: "background-color 0.3s ease", }} >
                Add to Cart
              </button>
              <button onClick={handleAddToWishlist} onMouseEnter={(e) => (e.target.style.backgroundColor = "#e84141")} onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6b6b")}
                style={{backgroundColor: "#ff6b6b", color: "white", border: "none", padding: "12px 25px",borderRadius: "8px",cursor: "pointer", fontSize: "16px", fontWeight: "600", transition: "background-color 0.3s ease", }} >
                Add to Wishlist
              </button>
            </div> 
          </div>
        </div>

        {/* Back Button */}
        <button onClick={() => navigate("/home")} onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")} onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          style={{backgroundColor: "#007bff",color: "white", border: "none", padding: "12px 30px", borderRadius: "6px", cursor: "pointer",fontSize: "16px", fontWeight: "600", marginTop: "25px", transition: "background-color 0.3s ease", }}>
          Back
        </button>

        {/* Other Products Section */}
        <div style={{ marginTop: "10px", width: "100%", maxWidth: "1400px", padding: "0 20px" }}>
          <h3 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold", color: "#00796b", marginBottom: "20px" }}>Other Items</h3>
          <div style={{display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center", margin: "20px", flexWrap: "wrap", gap: "20px"}}>
            {products
              .filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 5)
              .map((p) => (
                <div key={p.id} onClick={() => navigate(`/product/${p.id}`)}
                  style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "180px", margin: "15px", borderRadius: "15px", paddingBottom: "5px", backgroundColor: "#fff", border: "2px solid #e0e0e0", boxShadow: "15px 14px 15px rgba(60, 60, 59, 0.3)", cursor: "pointer", }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "15px 14px 15px rgba(60, 60, 59, 0.3)";
                  }}
                >
                  <img src={p.image} alt={p.name} style={{borderRadius: "15px 15px 0 0",width: "100%",  objectFit: "cover",}} />
                  <h2 style={{fontSize: "18px",fontWeight: "600",color: "#00796b", margin: "1px 0 2px 0",minHeight: "10px", alignItems:"center"}}>{p.brand}</h2>
                  <h4 style={{fontSize: "14px",color: "#555", fontWeight: "400", margin: "4px", minHeight: "10px",}}>{p.name}</h4>
                  <p style={{fontSize: "18px",color: "#28a745", fontWeight: "700",margin: 0,}}>{p.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
