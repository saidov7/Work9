import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-8">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">MyShop</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/about" className="btn btn-ghost">About</Link>
        <Link to="/contact" className="btn btn-ghost">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
