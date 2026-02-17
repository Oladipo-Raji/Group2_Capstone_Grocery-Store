import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      
      {/* TOP SECTION */}
      <div className="footer-top">
        
        {/* Column 1 */}
        <div className="footer-column">
          <h3>FreshCart</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li>Vegetables</li>
            <li>Fruits</li>
            <li>Drinks</li>
            <li>Dairy Products</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Useful Links</h3>
          <ul>
            <li>Offers</li>
            <li>My Account</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>Payment Methods</li>
            <li>Money-back Guarantee</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="footer-column support">
          <h3>24/7 Customer Support</h3>
          <p className="phone">+1 987 654 3210</p>

          <h3 className="newsletter-title">Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <hr />

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        <p>© 2026 FreshCart. All rights reserved.</p>

        <div className="socials">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>

        <div className="payments">
          <span>VISA</span>
          <span>MC</span>
          <span>AMEX</span>
          <span>PP</span>
        </div>
      </div>

    </footer>
  );
}
