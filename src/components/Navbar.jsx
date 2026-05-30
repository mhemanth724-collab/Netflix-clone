import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        backgroundColor: "rgba(0,0,0,0.9)",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            color: "#E50914",
            fontSize: "32px",
            fontWeight: "bold",
            margin: 0,
            cursor: "pointer",
          }}
        >
          NETFLIX
        </h1>
      </Link>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          gap: "25px",
          fontSize: "16px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <span>TV Shows</span>

        <span>Movies</span>

        <span>New & Popular</span>

        <Link
          to="/mylist"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ❤️ My List
        </Link>
      </div>

      {/* Profile */}
      <div
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "5px",
          backgroundColor: "#E50914",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        H
      </div>
    </div>
  );
}

export default Navbar;