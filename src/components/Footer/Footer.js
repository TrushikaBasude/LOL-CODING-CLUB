import { Link } from "react-router-dom";
import "./Footer.css";

function Explore() {
  return (
    <div className="explore">
      <h3>EXPLORE</h3>

      <ul className="menu">
        <li>
          <a
            href="https://lolclubwit.hashnode.dev/newsletter"
            target="_blanck"
            rel="noopener noreferrer"
          >
            Newsletter
          </a>
        </li>
        <li>
          <a
            href="https://forms.gle/6keszXqp6ZNGgR6QA"
            target="_blanck"
            rel="noopener noreferrer"
          >
            Write Blog
          </a>
        </li>
        <li>
          <a
            href="https://forms.gle/QSMzwVr5PrZJcd6t8"
            target="_blanck"
            rel="noopener noreferrer"
          >
            Suggestion Box
          </a>
        </li>
        <li>
          <a
            href="https://lolclubwit.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blogs by LOL
          </a>
        </li>
        <li>
          <a
            href="https://hashnode.com/@lolclubwit"
            target="_blanck"
            rel="noopener noreferrer"
          >
            Hashnode
          </a>
        </li>
      </ul>
    </div>
  );
}

function Events() {
  return (
    <div className="events">
      <h3>EVENTS</h3>
      <ul className="menu">
        <li>
          <Link to="/events">Hackathons</Link>
        </li>
        <li>
          <Link to="/events">Coding Contest</Link>
        </li>
        <li>
          <Link to="/events">BootCamps</Link>
        </li>
        <li>
          <Link to="/events">Workshops</Link>
        </li>
        <li>
          <Link to="/events">Seminars</Link>
        </li>
      </ul>
    </div>
  );
}

function DirectLinks() {
  return (
    <div className="direct-links">
      <h3>DIRECT LINKS</h3>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/events">Our Events</Link>
        </li>
        <li>
          <Link to="/team">Our Team</Link>
        </li>
        <li>
          <a
            href="https://lolclubwit.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blogs
          </a>
        </li>
      </ul>
    </div>
  );
}

function ConnectUs() {
  return (
    <div className="connect-us">
      <h3>CONNECT US</h3>
      <p>
        <i className="fa fa-map-marker"></i>
        LOL Coding Club, <br />
        Walchand Institue Of Technology, Solapur
      </p>
      {/* <p>
        <i className="fa fa-phone" aria-hidden="true"></i> +91 9876543210
      </p> */}
      <a
        href="mailto:lolclubwit@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-envelope" aria-hidden="true"></i>
        lolclubwit@gmail.com
      </a>
      <div className="socials">
        <a
          href="https://www.linkedin.com/company/lol-coding-club/"
          target="_blanck"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/lolcodingclub_wit/" target="_blanck">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://discord.gg/bjSxDHzEte" target="_blanck">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a href="https://hashnode.com/@lolclubwit" target="_blanck">
          <i className="fa-brands fa-hashnode"></i>
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="prefooter">
        <ConnectUs />
        <div className="sub-prefooter">
          <DirectLinks />
          <Explore />
          <Events />
        </div>
      </div>
      <div className="footer">
        <p>
          Copyright ©2023 All rights reserved | This is made with{" "}
          <i className="fa-solid fa-heart"></i> by LOL Coding Club Dev Team
        </p>
      </div>
    </footer>
  );
}

export default Footer;
