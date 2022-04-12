import React from 'react';
import './Header.css';
import Logo from '../../../../images/logo.jpg';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand text-dark d-flex align-items-center" href="#">
                        <img src={Logo} alt="logo" width="60" height="60"
                            className="d-inline-block align-text-top me-3" />
                        <span className="text-dark fs-4">Faija Akther Faiju</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-dark" aria-current="page" href="#">HOME</a>
                            </li>
                            <div className="dropdown ms-5">
                                <button className="btn btn-outline dropdown-toggle" id="dropdownMenu2"
                                    data-bs-toggle="dropdown">
                                    SHOP
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li><a className="nav-link text-dark" href="#">Acrylic painting</a></li>
                                    <li><a className="nav-link text-dark" href="#">Art On Canvas</a></li>
                                    <li><a className="nav-link text-dark" href="#">Bookmarks</a></li>
                                </ul>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link text-dark ms-5" href="#">CART</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark ms-5" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark ms-5" href="#">LOGIN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;