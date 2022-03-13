import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from './../../assets/img/logo_sm.png'
import './navbar.scss';

const Menu = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>

      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="enhive logo" />
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="navbar-menu">
        { toggleMenu
          ? < RiCloseLine color = "#fff" size ={27} onClick = {() => setToggleMenu(false)} />
          : < RiMenu3Line color = "#fff" size ={27} onClick = {() => setToggleMenu(true)} />
        }
        { toggleMenu && (
          <div className="navbar-menu_container scale-up-ver-top  ">
            <div className="navbar-menu-container_links">
              <Menu />
          </div>
        </div>
      )}
      </div>

    </nav>
  )
}

export default Navbar