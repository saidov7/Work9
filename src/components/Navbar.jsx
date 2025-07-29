import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-8 gap-10">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">MyShop</Link>
      </div>
      <div className="hidden md:flex gap-5">
        <Link to="/" className="btn btn-ghost btn-lg">Home</Link>
        <Link to="/about" className="btn btn-ghost btn-lg">About</Link>
        <Link to="/contact" className="btn btn-ghost btn-lg">Contact</Link>
      </div>
      <div className="flex gap-2 items-center">
        {user ? (
          <>
            <span className="text-sm hidden md:block">👤 {user.email}</span>
            <button onClick={handleLogout} className="btn btn-sm btn-outline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-outline">Login</Link>
            <Link to="/signup" className="btn btn-sm btn-primary">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;