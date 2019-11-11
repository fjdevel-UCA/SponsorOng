import React, { Component } from "react";
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
    render(){
        return (
            <header
            className="site-navbar site-navbar-target bg-secondary shadow"
            role="banner"
          >
            <div className="container">
              <div className="row align-items-center position-relative">
                <div className="site-logo">
                  <Link to="/" className="text-white">
                    Be Sponsor
                  </Link>
                </div>
  
                <nav
                  className="site-navigation text-left ml-auto "
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                    <li className="active">
                      <a href="index.html" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about.html" className="nav-link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="causes.html" className="nav-link">
                        Our Causes
                      </a>
                    </li>
                    <li>
                      <a href="blog.html" className="nav-link">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" className="nav-link">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
  
                <div className="ml-auto toggle-button d-inline-block d-lg-none">
                  <a
                    href="#"
                    className="site-menu-toggle py-5 js-menu-toggle text-white"
                  >
                    <span className="icon-menu h3 text-white"></span>
                  </a>
                </div>
              </div>
            </div>
          </header>
        
        );
    }
}