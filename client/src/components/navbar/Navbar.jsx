import "./navbar.scss";
import { useState } from "react";
import img from "../../images/p1.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log();
  return (
    <div className={isScrolled ? "navbar scroll" : "navbar"}>
      <div className='container'>
        <div className='left'>
          <img
            src='https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8&w=1000&q=80'
            alt='logo'
          />
          <Link to='/' className='link'>
            <span>Home</span>
          </Link>
          <Link to='/series' className='link'>
            <span>Series</span>
          </Link>
          <Link to='/movies' className='link'>
            <span>Movies</span>
          </Link>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <i className=' icon fas fa-search'></i>
          <span>KID</span>
          <i className=' icon fas fa-bell'></i>
          <img src={img} alt='' />
          <div className='profile'>
            <i className=' icon fas fa-arrow-down'></i>
            <div className='options'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
