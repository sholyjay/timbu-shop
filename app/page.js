'use client';

import Image from "next/image";
import { useState } from 'react';
import { SlMagnifier } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import Footer from "@/components/footer";

const products = [
  {
    id: 1,
    name: 'Yindira floral',
    name1: 'Maxi fitted',
    price: '₦52,000',
    image: '/images/Card1.png',
    rating: 4,
  },
  {
    id: 2,
    name: 'Lilly',
    name1: 'Mini gown',
    price: '₦50,000',
    image: '/images/Card2.png',
    rating: 5,
  },
  {
    id: 3,
    name: 'Benny',
    name1: 'Pleated corset',
    price: '₦43,000',
    image: '/images/Card3.png',
    rating: 3,
  },
  {
    id: 4,
    name: 'Ladily',
    name1: 'Floral maxi',
    price: '₦49,000',
    image: '/images/Card 4.png',
    rating: 4,
  },

  {
    id: 5,
    name: 'Soft blu',
    name1: 'Sky corset',
    price: '₦40,000',
    image: '/images/Card 5.png',
    rating: 4,
  },

  {
    id: 6,
    name: 'Special one',
    name1: 'Maxi special',
    price: '₦55,000',
    image: '/images/Card 6.png',
    rating: 5,
  },

  {
    id: 7,
    name: 'Lilly',
    name1: 'Mini gown',
    price: '₦50,000',
    image: '/images/Card 7.png',
    rating: 5,
  },

  {
    id: 8,
    name: 'Chommy',
    name1: 'Knitted piece',
    price: '₦58,000',
    image: '/images/Card8.png',
    rating: 4,
  },

  {
    id: 9,
    name: 'Tower',
    name1: 'Petty straight',
    price: '₦44,000',
    image: '/images/Card 9.png',
    rating: 4,
  },

  {
    id: 10,
    name: 'Beach',
    name1: 'Floral maxi',
    price: '₦30,000',
    image: '/images/Card10.png',
    rating: 4,
  },

  {
    id: 11,
    name: 'Bloomy',
    name1: 'Dinner you',
    price: '₦60,000',
    image: '/images/Card11.png',
    rating: 5,
  },

  {
    id: 12,
    name: 'Princess',
    name1: 'Palace maxi',
    price: '₦30,000',
    image: '/images/Card12.png',
    rating: 4,
  },

  {
    id: 13,
    name: 'Whitey',
    name1: 'Yindira wit',
    price: '₦40,000',
    image: '/images/Card13.png',
    rating: 5,
  },

  {
    id: 13,
    name: 'Signature',
    name1: 'Flowery Shiff',
    price: '₦60,000',
    image: '/images/Card14.png',
    rating: 3,
  },

  {
    id: 13,
    name: 'Reddy',
    name1: 'Peppery flo',
    price: '₦40,000',
    image: '/images/Card15.png',
    rating: 4,
  },

  {
    id: 13,
    name: 'Fushion',
    name1: 'Knitted mini',
    price: '₦35,000',
    image: '/images/Card 16.png',
    rating: 4,
  },
  
];

const Header = () => {
  const [quantities, setQuantities] = useState({});

  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <a href="#">
            <Image
              src="/images/logo.png"
              alt="yindira logo"
              width={100} 
              height={50}
            />
          </a>
        </h1>
        <nav className="nav">
          <button className="icon">
            <Link href="#"><SlMagnifier /></Link>
          </button>
          <button className="icon">
            <Link href="#"><CgProfile /></Link>
          </button>
          <button className="icon">
            <Link href="/cart"><IoCartOutline /></Link>
          </button>
        </nav>
      </div>
      <div className="banner">
        <div className="textContainer">
          <h2 className="title">The perfect blend of dress are available at our stores.</h2>
          <p className="subtitle">"Elegance in every stitch: Transform your wardrobe with our handpicked selection of chic and timeless pieces"</p>
          <button className="shopButton">Shop now</button>
        </div>
        <div className="imageContainer">
          <Image
            src="/images/person.png" // replace with your image path
            alt="person"
            width={500}
            height={500}
            className="image"
          />
        </div>
      </div>
      <div className="categories">
        <button className="categoryButton1">Dresses</button>
        <button className="categoryButton">Tops</button>
        <button className="categoryButton">Buttons</button>
        <button className="categoryButton">Outwears</button>
        <button className="categoryButton">Activewears</button>
      </div>
      <div className="productSection">
        <div className="productGrid">
          {products.map((product) => (
            <div key={product.id} className="productCard">
              <Image src={product.image} alt={product.name} width={200} height={300} className="productImage" />
              <div className="productHeader">
                <h3 className="productName">{product.name}</h3>
                <div className="rating">
                  {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                </div>
              </div>
              <p className="productName1">{product.name1}</p>
              <p className="productPrice">{product.price}</p>
              <div className="cartControls">
                <button className="cartButton" onClick={() => handleDecrement(product.id)}>-</button>
                <span className="quantity">{quantities[product.id] || 0}</span>
                <button className="cartButton" onClick={() => handleIncrement(product.id)}>+</button>
                <button className="addToCartButton">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="btn">Load More</button>

      {/* <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h1 className="Footer-logo">
              <a href="#">
                <Image
                  src="/images/yindira.png"
                  alt="yindira logo"
                  width={100} 
                  height={50} 
                />
              </a>
            </h1>
            <p className="footer-text">"To empower women through fashion by offering a seamless, stylish, and inspiring online shopping experience that celebrates individuality and confidence."</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">HELP</h4>
            <ul className="footer-links">
              <li><Link href="#">FAQs</Link></li>
              <li><Link href="#">Size Guide</Link></li>
              <li><Link href="#">Shipping</Link></li>
              <li><Link href="#">Return & Exchange</Link></li>
              <li><Link href="#">Contact us</Link></li>
            </ul>
          </div>
          <div className="footer-section1">
            <h4 className="footer-title">COMPANY</h4>
            <ul className="footer-social">
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-section2">
            <h4 className="footer-title">MORE</h4>
            <ul className="footer-social">
              <li><Link href="#">Account</Link></li>
              <li><Link href="#">Wishlist</Link></li>
              <li><Link href="#">Track order</Link></li>
            </ul>
          </div>
          <div className="footer-section3">
            <h4 className="footer-title">LEGAL</h4>
            <ul className="footer-social">
              <li><Link href="#">Privacy policy</Link></li>
              <li><Link href="#">Terms of service</Link></li>
              <li><Link href="#">Refund policy</Link></li>
            </ul>
          </div>
          <div className="footer-section4">
            <h4 className="footer-title">NEW TO YINDIRA?</h4>
            <ul className="footer-social">
              <p>Sign up for exclusive offers, original stories, events and more.</p>
              <li><Link href="#">Twitter</Link></li>
            </ul>
          </div>
        </div>
    </footer>  */}
    <Footer/>
    </header>
  );
};

export default Header;