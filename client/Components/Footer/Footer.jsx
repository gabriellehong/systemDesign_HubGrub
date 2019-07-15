import React from 'react';
import './footer.css';

const Footer = (props) => {
  return (
    <div className="footer-body">
      <div className="footer-topHalf">
        <div className="footer-collapsibleSection col-1-4">
          <span className="footer-collapsibletitleText">Get to know us</span>
          <div className="footer-collapsibleContent">
            <ul>
              <li className="footer-li"><a className="footer-a" href="">About Grubhub</a></li>
              <li className="footer-li"><a className="footer-a" href="">Our apps</a></li>
              <li className="footer-li"><a className="footer-a" href="">Our blog</a></li>
              <li className="footer-li"><a className="footer-a" href="">Careers</a></li>
              <li className="footer-li"><a className="footer-a" href="">Investor relations</a></li>
              <li className="footer-li"><a className="footer-a" href="">News</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-collapsibleSection col-1-4">
          <span className="footer-collapsibletitleText">Useful links</span>
          <div className="footer-collapsibleContent">
            <ul className="footer-ul">
              <li className="footer-li"><a className="footer-a" href="">Gift cards</a></li>
              <li className="footer-li"><a className="footer-a" href="">Coupons</a></li>
              <li className="footer-li"><a className="footer-a" href="">FAQ</a></li>
              <li className="footer-li"><a className="footer-a" href="">Help</a></li>
              <li className="footer-li"><a className="footer-a" href="">Grubhub for Alexa</a></li>
              <li className="footer-li"><a className="footer-a" href="">Student discounts</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-collapsibleSection col-1-4">
          <span className="footer-collapsibletitleText">Connect with us</span>
          <div className="footer-collapsibleContent">
            <ul>
              <li className="footer-li"><a className="footer-a" href="">Facebook</a></li>
              <li className="footer-li"><a className="footer-a" href="">Twitter</a></li>
              <li className="footer-li"><a className="footer-a" href="">Instagram</a></li>
              <li className="footer-li"><a className="footer-a" href="">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-collapsibleSection col-1-4">
          <span className="footer-collapsibletitleText">Partner with us</span>
          <div className="footer-collapsibleContent">
            <ul>
              <li className="footer-li"><a className="footer-a" href="">For restaurants</a></li>
              <li className="footer-li"><a className="footer-a" href="">For drivers</a></li>
              <li className="footer-li"><a className="footer-a" href="">For corporate accounts</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottomHalf">
          <div className="footer-copyright">© 2019 Grubhub All rights reserved.</div>
          <a className="footer-a footer-terms" href="">Terms of Use</a><br />
          <a className="footer-a footer-privacy" href="">Privacy Policy</a>
      </div>
    </div>
  )
}

export default Footer;
