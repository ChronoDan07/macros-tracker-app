import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <a href="/">MacroTracker</a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/add-food">Add Food</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;