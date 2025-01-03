import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import siteLogo from "../assets/images/site-logo.svg";
import menuToggle from "../assets/images/menu-toggle.svg";
import close from "../assets/images/close.svg";
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

    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
        setIsNavOpen(true);
    }
    const closeNav = () => {
        if (isNavOpen) {
          setIsNavOpen(false);
        }
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            // Determine the offset dynamically based on the screen width
            const offset = window.innerWidth <= 1023 ? 20 : 50; // Adjust values as needed
            const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth',
            });
        }
        closeNav();
    };

    const menuItems = [
        { name: "Services", id: "services" },
        { name: "Team", id: "team" },
        { name: "Contact", id: "contact" },
    ];

    const [activeSection, setActiveSection] = useState("");    
    useEffect(() => {
        const handleScroll = () => {
            const menuItems = ["services", "team", "contact"];
            let currentSection = "";
            menuItems.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const offset = window.innerHeight / 3;
                    const sectionTop = section.getBoundingClientRect().top;
                    if (sectionTop < offset && sectionTop > -section.offsetHeight) {
                        currentSection = id;
                    }
                }
            });
            setActiveSection(currentSection);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`site-header d-flex justify-content-between align-items-center position-fixed px-100 py-50 m-py-30 m-px-30 ${scrolltopdata} w-100`}>
            <div className="site-logo">
                <Link className="d-flex align-items-center" to="/" onClick={(e) =>{ e.preventDefault(); scrollToSection('home')}}><img width="" height="" src={siteLogo} alt="" /></Link>
            </div>
            <div className={`site-nav ${isNavOpen ? "open-menu" : ""}`}>
                <ul className="d-flex justify-content-end color-light uppercase">
                    {menuItems.map(({ name, id }) => (
                        <li key={id}>
                            <Link
                                to="/"
                                className={activeSection === id ? "active position-relative" : "position-relative"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(id);
                                    setActiveSection(id); // Update on click
                                }}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>                
                <div className="close-menu position-absolute d-hide" onClick={closeNav}><img width="" height="" src={close} alt="" /></div>
            </div>
            <div className="mobile-menu-button d-hide" onClick={toggleNav}><img width="" height="" src={menuToggle} alt="" /></div>
        </header>
    );
};

export default Header;