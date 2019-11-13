import React, { Component } from "react";
export default class NavbarGlobal extends Component {
  render() {
    return (
      <div>
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <div className="bg-primary py-3 top-bar shadow d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-md-left pl-0">
                <a href="#" className=" pr-3 pl-0">
                  Home
                </a>
                <a href="#" className="p-3">
                  Events
                </a>
                <a href="register" className="p-3">
                  Become A Volunteer
                </a>
              </div>
              <div className="col-md-6 text-md-right">
                <a href="#" className="p-3">
                  <span className="icon-twitter"></span>
                </a>
                <a href="#" className="p-3">
                  <span className="icon-facebook"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
