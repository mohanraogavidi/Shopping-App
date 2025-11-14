import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from "./Asstes/images1.jpg";
import image2 from "./Asstes/images2.jpg";
import image3 from "./Asstes/images3.jpg";
import image4 from "./Asstes/images4.jpg";
import image5 from "./Asstes/images5.jpg";
import bgimage from "./Asstes/bgimages3.jpg";
import men1 from "./Asstes/men1.jpg";
import men2 from "./Asstes/men2.jpg";
import men3 from "./Asstes/men3.jpg";
import men4 from "./Asstes/men4.jpg";
import men5 from "./Asstes/men5.jpg";
import women1 from "./Asstes/women1.jpg";
import women2 from "./Asstes/women2.jpg";
import women3 from "./Asstes/women3.jpg";
import women4 from "./Asstes/women4.jpg";
import women5 from "./Asstes/women5.jpg";
import kid1 from "./Asstes/kid1.jpg";
import kid2 from "./Asstes/kid2.jpg";
import kid3 from "./Asstes/kid3.jpg";
import kid4 from "./Asstes/kid4.jpg";
import kid5 from "./Asstes/kid5.jpg";
import bag1 from "./Asstes/bag1.jpg";
import bag2 from "./Asstes/bag2.jpg";
import bag3 from "./Asstes/bag3.jpg";
import bag4 from "./Asstes/bag4.jpg";
import bag5 from "./Asstes/bag5.jpg";
import shoe1 from "./Asstes/shoe1.jpg";
import shoe2 from "./Asstes/shoe2.jpg";
import shoe3 from "./Asstes/shoe3.jpg";
import shoe4 from "./Asstes/shoe4.jpg";
import shoe5 from "./Asstes/shoe5.jpg";
import styli from "../Assets/stylimendark.jpeg";
import campus from "../Assets/campussutra.jpeg";
import puma from "../Assets/puma.jpeg";
import garage from "../Assets/gargego.jpeg";
import chaabra from "../Assets/chaabra.webp";
import peach from "../Assets/peachself.jpeg";
import mabish from "../Assets/Mabish.webp";
import stylum from "../Assets/stylum.webp";
import kidsaj from "../Assets/AjDezines.jpeg";
import kidsbitiya from "../Assets/bitiyabhama.jpeg";
import kidskisah from "../Assets/Kisah.jpeg";
import kidsstylo from "../Assets/Stylobug.jpeg";
import bagsmouchi from "../Assets/bagsmouchi.jpeg";
import bagsstyli from "../Assets/bagsstyli.jpeg";
import bagstommy from "../Assets/bagstommy.jpeg";
import bagszouk from "../Assets/bagszouk.jpeg";
import shoescampus from "../Assets/shoescampus.jpeg";
import shoespuma from "../Assets/shoespuma.jpeg";
import shoesredtape from "../Assets/shoesredtape.jpeg";
import shoesreebok from "../Assets/shoesreebok.jpeg";

export default function HomePage({ onLogout }) {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // products (same as before)
  const mensProducts = [
    { id: 1, image: men1, brand: "Snitch", name: "Linen Line Green Stripes Shirt", price: "₹ 299/-" },
    { id: 2, image: men2, brand: "Perch", name: "Men White Linen Cotton", price: "₹ 499/-" },
    { id: 3, image: men3, brand: "The Souled Store", name: "Original Tropical Beat", price: "₹ 639/-" },
    { id: 4, image: men4, brand: "PRONK", name: "Vintage Nirvana Men Oversized", price: "₹ 1299/-" },
    { id: 5, image: men5, brand: "PRONK", name: "Vintage Nirvana Men Oversized", price: "₹ 1299/-" },
    { id: 26, image: styli, brand: "Styli", name: "Men Dark Blue Ballon Fit Dark Wash Denim", price: "₹1,440" },
    { id: 27, image: campus, brand: "Campus Sutra", name: "Men Black Solid Casual Shirt", price: "₹608" },
    { id: 28, image: puma, brand: "Puma", name: "Smashic Unisex White Sneakers", price: "₹1,800" },
    { id: 29, image: garage, brand: "Garage", name: "Men Garage Shirt", price: "₹753" },
  ];

  const womensProducts = [
    { id: 6, image: women1, brand: "PRONK", name: "Red Silk Blend Heavy", price: "₹ 799/-" },
    { id: 7, image: women2, brand: "Mabish By Sonal Jain", name: "Pink Crop Top with Draped", price: "₹ 489/-" },
    { id: 8, image: women3, brand: "Akhilam", name: "Women Pink Georgette Saree", price: "₹ 829/-" },
    { id: 9, image: women4, brand: "SGF11", name: "Pure Soft Silk Handwork", price: "₹ 699/-" },
    { id: 10, image: women5, brand: "SGF11", name: "Pure Soft Silk Handwork", price: "₹ 699/-" },
    { id: 30, image: chaabra, brand: "Chaabra", name: "Women Chaabra Dress", price: "₹3,920" },
    { id: 31, image: peach, brand: "Libas", name: "Women Libas Dress", price: "₹4,880" },
    { id: 32, image: mabish, brand: "Mabish", name: "Women Mabish Dress", price: "₹1,976" },
    { id: 33, image: stylum, brand: "Stylum", name: "Women Slim Fit Multi Striped Full Sleeves Cutaway Collar Casual Shirt - White", price: "₹1,334" },
  ];

  const kidsProducts = [
    { id: 11, image: kid1, brand: "AJ Dezines", name: "Kurta and Sharara for Girls", price: "₹ 199/-" },
    { id: 12, image: kid2, brand: "AJ Dezines", name: "Silk Dhoti Kurta for Boys", price: "₹ 1505/-" },
    { id: 13, image: kid3, brand: "BownBee", name: "Pure Chanderi Sleeve Sherwani", price: "₹ 679/-" },
    { id: 14, image: kid4, brand: "KISAH", name: "Floral Printed Nehru Jacket", price: "₹ 399/-" },
    { id: 15, image: kid5, brand: "Little Bansi", name: "Kurta with Dhoti and Jacket", price: "₹ 399/-" },
    { id: 38, image: kidsaj, brand: "AJ Dezines", name: "Kids AJ Dress", price: "₹ 1,200" },
    { id: 39, image: kidsbitiya, brand: "Bitiya", name: "Kids Bitiya Outfit", price: "₹ 850" },
    { id: 40, image: kidskisah, brand: "KISAH", name: "Kids Kisah Jacket", price: "₹ 650" },
    { id: 41, image: kidsstylo, brand: "Stylo", name: "Kids Stylo Shirt", price: "₹ 950" },
  ];

  const shoesProducts = [
    { id: 16, image: shoe1, brand: "Snitch", name: "Linen Line Green Stripes Shirt", price: "₹ 299/-" },
    { id: 17, image: shoe2, brand: "Perch", name: "Men White Linen Cotton", price: "₹ 499/-" },
    { id: 18, image: shoe3, brand: "The Souled Store", name: "Original Tropical Beat", price: "₹ 639/-" },
    { id: 19, image: shoe4, brand: "PRONK", name: "Vintage Nirvana Men Oversized", price: "₹ 1299/-" },
    { id: 20, image: shoe5, brand: "Campus", name: "Og-30 Men Grey Sneakers", price: "₹ 1299/-" },
    { id: 42, image: shoescampus, brand: "Campus", name: "Campus Shoes", price: "₹1,500" },
    { id: 43, image: shoespuma, brand: "Puma", name: "Puma Shoes", price: "₹2,500" },
    { id: 44, image: shoesredtape, brand: "Red Tape", name: "Red Tape Shoes", price: "₹1,800" },
    { id: 45, image: shoesreebok, brand: "Reebok", name: "Reebok Shoes", price: "₹2,200" },
  ];

  const bagsProducts = [
    { id: 21, image: bag1, brand: "Snitch", name: "Linen Line Green Stripes Shirt", price: "₹ 299/-" },
    { id: 22, image: bag2, brand: "Perch", name: "Men White Linen Cotton", price: "₹ 499/-" },
    { id: 23, image: bag3, brand: "The Souled Store", name: "Original Tropical Beat", price: "₹ 639/-" },
    { id: 24, image: bag4, brand: "PRONK", name: "Vintage Nirvana Men Oversized", price: "₹ 1299/-" },
    { id: 25, image: bag5, brand: "Zouk", name: "Multicolour Mandala Print Office Essential Shoulder Bag", price: "₹ 2,023/- 63% Off" },
    { id: 46, image: bagsmouchi, brand: "Mouchi", name: "Mouchi Bag", price: "₹3,894" },
    { id: 47, image: bagsstyli, brand: "Styli", name: "Styli Bag", price: "₹1,332" },
    { id: 48, image: bagstommy, brand: "Tommy", name: "Tommy Bag", price: "₹4,200" },
    { id: 49, image: bagszouk, brand: "Zouk", name: "Zouk Bag", price: "₹4,000" },
  ];

  return (
    <>
      <Navbar onLogout={onLogout} />
      <div style={{paddingTop: "80px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "100%", minHeight: "100vh",backgroundColor: "#e0f7fa",}}>
        <div style={{display: "flex", justifyContent: "center",alignItems: "center",}}>
          <img src={bgimage} alt="imagebg" style={{width: "100%"}} />
        </div>

        <div style={{display: "flex", textAlign: "center", padding: "20px", flexWrap: "wrap", justifyContent: "center",width:"100%"}}>
          {[{ img: image1, label: "Mens Wear", id: "mens-section" },
            { img: image2, label: "Womens Wear", id: "women-section" },
            { img: image3, label: "Kids Wear", id: "kids-section" },
            { img: image4, label: "Shoes", id: "shoes-section" },
            { img: image5, label: "Bags", id: "bags-section" }].map((item, i) => (
            <div
              key={i}
              onClick={() => { scrollToSection(item.id); }}
              style={{display: "flex", justifyContent: "center", alignItems: "center",position: "relative",width: "280px",height: "400px", borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 15px rgba(0,0,0,0.3)",fontFamily: "Arial, sans-serif", margin: "10px", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer",}}
              onMouseEnter={(e) => { e.target.style.transform = "scale(1.05)"; e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)"; }}
            >
              <img src={item.img} alt={item.label} style={{width: "100%", height: "100%", objectFit: "cover",}} />
              <div style={{display: "flex",justifyContent: "center", flexDirection: "column", alignItems: "center", position: "absolute", bottom: "0", width: "130px", height: "80px", backgroundColor: "rgba(255, 69, 0, 0.85)",  color: "#fff", padding: "20px", borderRadius: "50px", marginBottom: "10px",}}>
                <h3 style={{ margin: "0 0 10px 0", fontSize: "18px" }}>{item.label}</h3>
                <p style={{ margin: "0 0 15px 0", fontSize: "16px" }}>50-70% OFF</p>
                <button style={{padding: "5px 10px", backgroundColor: "#fff", color: "#ff4500", border: "none", borderRadius: "8px", cursor: "pointer",fontWeight: "bold", }}>
                    Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "20px", margin: "30px",}}>
          {[{ title: "Mens Collections", data: mensProducts, id: "mens-section" },
            { title: "Womens Collections", data: womensProducts, id: "women-section" },
            { title: "Kid's Collections", data: kidsProducts, id: "kids-section" },
            { title: "Shoes Collections", data: shoesProducts, id: "shoes-section" },
            { title: "Bags Collections", data: bagsProducts, id: "bags-section" }].map((section) => (
            <section key={section.id} id={section.id} style={{display: "flex",justifyContent: "center", flexDirection: "column", alignItems: "center", marginTop: "-80px",paddingTop: "100px",}}>
              <h1 style={{fontSize: "32px", fontWeight: "bold", color: "#00796b", marginBottom: "20px", textAlign: "center"}}>{section.title}</h1>
              <div style={{display: "flex",justifyContent: "center", flexDirection: "row",alignItems: "center", margin: "20px", flexWrap: "wrap",gap: "20px", }}>
                {section.data.map((product) => (
                  <div key={product.id} onClick={() => handleProductClick(product.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "15px 14px 15px rgba(60, 60, 59, 0.3)";
                  }}
                    style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "200px", margin: "15px", borderRadius: "15px", paddingBottom: "5px", backgroundColor: "#fff", border: "2px solid #e0e0e0", boxShadow: "15px 14px 15px rgba(60, 60, 59, 0.3)", cursor: "pointer", }}
                  >
                    <img src={product.image} alt={product.name} style={{borderRadius: "15px 15px 0 0",width: "100%", height: "270px", objectFit: "cover",}} />
                    <h2 style={{fontSize: "18px",fontWeight: "600",color: "#00796b", margin: "1px 0 2px 0",minHeight: "10px", alignItems:"center"}}>{product.brand}</h2>
                    <h4 style={{fontSize: "14px",color: "#555", fontWeight: "400", margin: "4px", minHeight: "10px",}}>{product.name}</h4>
                    <p style={{fontSize: "18px",color: "#28a745", fontWeight: "700",margin: 0,}}>{product.price}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}


