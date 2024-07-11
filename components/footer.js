import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-section">
        <div className="footer-logo">
          <Link href="#">
            <Image
              src="/images/yindira.png"
              alt="yindira logo"
              width={100} 
              height={50}
            />
          </Link>
          <p>To empower women through fashion by offering a seamless, stylish, and inspiring online shopping experience that celebrates individuality and confidence.</p>
        </div>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul className="footer-links">
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Size Guide</Link></li>
            <li><Link href="#">Shipping</Link></li>
            <li><Link href="#">Return & Exchanges</Link></li>
            <li><Link href="#">Contact us</Link></li>
          </ul>
        </div>
        <div className="footer-section1">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Our stores</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>
        <div className="footer-section2">
          <h3>More</h3>
          <ul className="footer-links">
            <li><Link href="#">Account</Link></li>
            <li><Link href="#">Wishlist</Link></li>
            <li><Link href="#">Track order</Link></li>
          </ul>
        </div>
        <div className="footer-section3">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><Link href="#">Privacy policy</Link></li>
            <li><Link href="#">Terms of service</Link></li>
            <li><Link href="#">Refund policy</Link></li>
          </ul>
        </div>
        <div className="footer-section4">
          <h3>New to Yindira?</h3>
          <ul className="footer-links">
            <li><Link href="#">Sign up for exclusive offers, original stories, events and more.</Link></li>
            <li>
              <div className="footer-social">
                <Link href="#"><img src="/images/social-icon.png" alt="Social Icon" /></Link>
                {/* Add more social icons as needed */}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 yindira, All rights reserved.</p>
        <p><img src="/images/visa.png" alt="Visa" /></p>
      </div>
    </footer>
  );
};

export default Footer;
