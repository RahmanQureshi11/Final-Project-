import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow py-3 mb-3 ">
        <div className="container">
          <Link className="navbar-brand" to="/">Wish List</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-dark " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contactus">ContactUs</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

    );
}

 export function Footer() {
    return (
        <footer>
            <div className="container p-3 mt-5 border-top">
            <small className="d-block text-muted text-center">&copy; 2024 - Wish List</small>
            </div>

        </footer>

    );
    
 }