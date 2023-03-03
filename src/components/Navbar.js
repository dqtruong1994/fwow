import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <header class="region--header">
  <div class="header__brand-nav">
     <div class="header__main-logo__container">
        <nav class="header__main-logo">
          <a class="mm-logo" href="/">
            <img src="https://assets.micromentor.org/static/img/mm-logo-signature.28724537589a.svg" alt="MicroMentor logo" class="logo"/>
          </a>
        </nav>
     </div>
     <nav class="header__mm-brandmark">
        <a class="mm-brandmark" href="/">
          <img src="https://assets.micromentor.org/static/img/mm-brandmark-blue.a46a9d0e8a7a.svg" alt="MicroMentor logo" class="logo" height="30" width="30"/></a></nav>
     <nav class="header__navigation">
        <nav class="site-menu--desktop-wrapper">
           <ul class="menu site-menu">
            <li>
                <Link to="/entrepreneurs" activeClassName='active' class="site-menu__link">
                  Find Entrepreneurs
                </Link>
            </li>
            <li>
                <Link to="/mentors" activeClassName='active' class="site-menu__link">
                  Find  Mentor
                </Link>
            </li>
             
           </ul>
        </nav>
        <ul class="dropdown menu utility-menu" data-dropdown-menu="5wun6n-dropdown-menu" role="menubar">
           <li class="header__signup" role="none">
                <Link to="/login" activeClassName='active'  class="button hollow sottovoce">
                  Login
                </Link>
            </li>
           <li class="header__signin" role="none">
                <Link to="/register"  activeClassName='active' class="button hollow sottovoce">
                  Register
                </Link>
            </li>
        </ul>
     </nav>
  </div>
</header>
  );
};

export default Navbar;
