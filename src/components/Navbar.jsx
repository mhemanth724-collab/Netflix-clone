import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          NETFLIX
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <Link to="/mylist">❤️ My List</Link>
        </div>

        {/* Profile */}
        <div className="profile">H</div>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <span>TV Shows</span>
          <span>Movies</span>
          <span>New & Popular</span>

          <Link
            to="/mylist"
            onClick={() => setMenuOpen(false)}
          >
            ❤️ My List
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;