import { Scale } from "lucide-react";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="navbar">

        {/* LEFT LINKS */}
        <div className="nav-left">
          <span className="nav-link">Home</span>
          <span className="nav-link">Explore Rights</span>
          <span className="nav-link">Submit Query</span>
        </div>

        {/* CENTER LOGO */}
        <div className="nav-logo">
          <Scale size={28} />
        </div>

        {/* RIGHT LINKS + BUTTONS */}
        <div className="nav-right">
          <span className="nav-link">Experts</span>
          <span className="nav-link">About</span>
          <span className="nav-link">Contact</span>

          <button className="nav-btn nav-login">
            Login
          </button>

          <button className="nav-btn nav-register">
            Register
          </button>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;