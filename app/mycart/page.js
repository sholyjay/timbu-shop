
import Image from "next/image";
import { SlMagnifier } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import Footer from "@/components/footer";
import { GoDotFill } from "react-icons/go";


const Header = () => {
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
      <h1 className="cart-text">My Cart</h1>
      <div className="cart-container">
        <div className="cart-product">
          <h4>Product</h4>
          <ul className="cart-produce">
            <li>Size</li>
            <li>Quantity</li>
            <li>Prize</li>
            <li>Sub-Total</li>
          </ul>
        </div>
        <div className="cart-item">
          <div className="item-details">
            <Image 
              src="/images/Card2.png"
              alt="Product Image" 
              width={150} 
              height={150} 
            />
            <div className="candy-attach">
              <h2>Candy</h2>
              <p className="pie">Signature pose</p>
              <div className="dot_box">
                <GoDotFill className="dot" /> 
                <p className="pity">Wine</p>
              </div>
            </div>
          </div>
          <div className="item-actions">
            <p>M</p>
            <div className="quantity">
              <button>-</button>
              <input type="text" value="2" readOnly />
              <button>+</button>
            </div>
            <p>₦50,000</p>
            <p>₦100,000</p>
          </div>
        </div>

        <div className="cart-item">
          <div className="item-details">
            <Image 
              src="/images/Scupter.png"
              alt="Product Image" 
              width={150} 
              height={150} 
            />
            <div className="candy-attach">
              <h2>Candy</h2>
              <p className="pie">Signature pose</p>
              <div className="dot_box">
                <GoDotFill className="dot1" /> 
                <p className="pity"> Black</p>
              </div>
            </div>  
          </div>
          <div className="item-actions">
            <p>M</p>
            <div className="quantity">
              <button>-</button>
              <input type="text" value="1" readOnly />
              <button>+</button>
            </div>
            <p>₦22,000</p>
            <p>₦22,000</p>
          </div>
        </div>

        <div className="cart-item">
          <div className="item-details">
            <Image 
              src="/images/candy.png"
              alt="Product Image" 
              width={150} 
              height={150} 
            />
            <div className="candy-attach">
              <h2>Candy</h2>
              <p className="pie">Signature pose</p>
              <div className="dot_box">
                <GoDotFill className="dot2" /> 
                <p className="pity">Pink</p>
              </div>
            </div>
          </div>
          <div className="item-actions">
            <p>40</p>
            <div className="quantity">
              <button>-</button>
              <input type="text" value="1" readOnly />
              <button>+</button>
            </div>
            <p>₦20,000</p>
            <p>₦20,000</p>
          </div>
        </div>

        <div className="cart-item">
          <div className="item-details">
            <Image 
              src="/images/croch.png"
              alt="Product Image" 
              width={150} 
              height={150} 
            />
            <div className="candy-attach">
              <h2>Crochetelo</h2>
              <p className="pie">Knitted piece</p>
              <div className="dot_box">
                <GoDotFill className="dot3" /> 
                <p className="pity">Cream</p>
              </div>
            </div>
          </div>
          <div className="item-actions">
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <div className="quantity">
              <button>-</button>
              <input type="text" value="1" readOnly />
              <button>+</button>
            </div>
            <p>₦25,000</p>
            <p>₦25,000</p>
          </div>
        </div>

        <div className="cart-total">
          <h3>CART TOTAL</h3>
          <p className="catting">Sub-total: <span className="catting-price">₦167,000</span></p>
          <p className="catting">Shipping: <span className="shiping-text">Enter your address to view shipping options</span></p>
          <div className="coupon-section1">
            <input type="text" placeholder="Coupon Code" />
            <button>Apply</button>
          </div>
          <p className="catting-total">Total: <span className="catting-text">₦167,000</span></p>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
      <Footer/>
    </header>
  );
};

export default Header;