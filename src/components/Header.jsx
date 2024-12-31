import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import siteLogo from "../assets/images/site-logo.svg";
const Header = () => {

    const [scrolltopdata, setscrolltopdata] = useState('');
        useEffect(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY < 15) {
                    setscrolltopdata('');
                } else {
                    setscrolltopdata('header-overlay');
                }
            });
    }, [])

    return (
        <header className={`site-header d-flex justify-content-between align-items-center position-fixed px-100 py-50 m-py-30 m-px-30 ${scrolltopdata} w-100`}>
            <div className="site-logo">
                <img width="" height="" src={siteLogo} alt="" />
            </div>
            <div className="site-nav">
                <ul className="d-flex justify-content-end color-light uppercase">
                    <li><Link to="#services">Services</Link></li>
                    <li><Link to="#team">Team</Link></li>
                    <li><Link to="#contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;