import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <nav className="flex">
                <Link to="/"><i className="fa fa-home" /></Link>
                <Link><i className="fa fa-bell" /></Link>
                <Link><i className="fa fa-user" /></Link>
                <Link to="/workslist"><i className="fa fa-list" /></Link>
                <Link to="/chat"><i className="fa fa-comments" /></Link>
            </nav>
        </div>
    </footer>
);

export default Footer;