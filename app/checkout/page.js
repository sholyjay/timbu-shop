import React from 'react';
import Image from 'next/image';
import { SlMagnifier } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import Footer from '@/components/footer';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <Link href="#">
            <Image
              src="/images/logo.png"
              alt="yindira logo"
              width={100} 
              height={50}
            />
          </Link>
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
      <div className="checkout-container">
        <div className="checkout-form-container">
          <h1 className='check'>Checkout</h1>
          <p className="returning-customer">
            Returning customer? <a href="#">Click here to login</a>
          </p>
          <div className="coupon-section">
            <input type="checkbox" id="coupon" />
            <label htmlFor="coupon">Have a coupon? Click here to enter</label>
          </div>
          <form className="billing-details">
            <h2>BILLING DETAILS</h2>
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="tel" placeholder="Enter your phone number" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>First name *</label>
                <input type="text" placeholder="Enter your first name" required />
              </div>
              <div className="form-group">
                <label>Last name *</label>
                <input type="text" placeholder="Enter your last name" required />
              </div>
            </div>
            <div className="form-group">
              <label>Street address *</label>
              <input type="text" placeholder="House number and street address" required />
            </div>
            <div className="form-row1">
              <div className="form-group">
                <label>State *</label>
                <select required>
                  <option value="">Select an option</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group2">
                <label>City *</label>
                <select required>
                  <option value="">Select an option</option>
                  <option value="Ikeja">Ikeja</option>
                  <option value="Lekki">Lekki</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Country *</label>
              <select required>
                <option value="">Select an option</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group1">
              <input type="checkbox" id="create-account" />
              <label htmlFor="create-account">Create account?</label>
            </div>
            <div className="form-group">
              <label>Order notes (optional)</label>
              <textarea placeholder="Notes about your order, e.g. special notes for delivery..."></textarea>
            </div>
          </form>
        </div>
        <div className="order-summary-container">
          <h2>YOUR ORDER</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Sub-total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lilly mini bodycon × 2</td>
                <td>₦100,000</td>
              </tr>
              <tr>
                <td>Sculpter silk shaper × 1</td>
                <td>₦22,000</td>
              </tr>
              <tr>
                <td>Candy signature pose × 1</td>
                <td>₦22,000</td>
              </tr>
              <tr>
                <td>Crochetelo knitted piece × 1</td>
                <td>₦25,000</td>
              </tr>
              <tr>
                <td>Sub-total</td>
                <td>₦167,000</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Enter your address to view shipping options</td>
              </tr>
              <tr>
                <td>Paystack fees</td>
                <td>₦1,200</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>₦168,200</td>
              </tr>
            </tbody>
          </table>
          <div className="terms">
            <p className='terms-text'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes decided in our privacy policy.</p>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I have read and agreed to the website Terms & Conditions
            </label>
          </div>
          <button type="submit" className='btn1'>PLACE ORDER</button>
        </div>
      </div>
{/* 
      <footer className="footer">
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
    </footer> */}

    <Footer/>
    </header>
  );
};

export default Header;