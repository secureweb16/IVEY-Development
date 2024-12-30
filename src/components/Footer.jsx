import React from "react";
import { Link } from "react-router-dom";

const Footer = () => { 

    return (

        <footer className="site-footer py-100">
            <div className="container">
                <div className="menu-block">
                    <ul className="uppercase">
                        <li><Link to="">Email Ivey Developments</Link></li>
                        <li><Link to="">Services</Link></li>
                        <li><Link to="">More About Kirk Ivy</Link></li>
                        <li><Link to="">Ivey Design Build</Link></li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;