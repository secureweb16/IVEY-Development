import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import contact from "../assets/images/contact.jpg";
import rightArrow from "../assets/images/right-arrow.svg";
import envelope from "../assets/images/envelope.svg";
import phone from "../assets/images/phone.svg";
import axios from 'axios';
import config from "../config";

const Footer = () => { 

    const [isMailSent, setIsMailSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();        
        try {
            setIsLoading(true);
            const response = await axios.post(`${config.BASE_URL}/api/admin/send-email`, formData, { withCredentials: true });
            if (response) {
                setIsMailSent(true);

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            }
            setIsLoading(false);
            setTimeout(() => {
                setIsMailSent(false);
            }, 5000);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setIsMailSent(false);
            setIsLoading(false);
        }
    };

    return (

        <footer id="contact" className="site-footer section contact-section">
                <div className="contact-wrapper d-grid">
                    <div className="contact-block d-flex flex-column">
                        <div className="form-block">
                            <h2 className="m-center">contact us</h2>
                            <form className="pt-30" onSubmit={handleSubmit}>
                                <div className="form-field">
                                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="form-field">
                                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-field">
                                    <input type="tel" name='phone' placeholder="Phone number" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="form-field">
                                    <textarea placeholder="Message" name='message' value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <div className="submit-field end">
                                    {isMailSent && (<><p style={{ color: "#fff" }}>Message Sent!</p></>)}
                                    <button type="submit" className='submit-button d-inline-flex justify-content-end align-items-center' disabled={isLoading}>send <img width="" height="" src={rightArrow} alt="" /></button>
                                </div>
                            </form>
                        </div>
                        <div className="address-block mt-auto">
                            <ul className="uppercase">
                                <li><i><img width="" height="" src={envelope} alt="" /></i><Link to="mailto:info@iveydevelopments.com">info@iveydevelopments.com</Link></li>
                                <li><i><img width="" height="" src={phone} alt="" /></i><Link to="tel:+1 111 11111">+1 111 11111</Link></li>
                            </ul>
                            <div className="menu-block pt-30">
                                <ul className="d-flex align-items-center uppercase">
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="image-block color-light overlay top-bottom-overlay position-relative">
                        <img className="cover" width="" height="" src={contact} alt="" />                            
                        <div className="summary-block d-flex flex-column justify-content-between position-absolute top-0 w-100 h-100">                               
                            <div className="bottom-summary w-100" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h3><Link to="mailto:info@iveydevelopments.com">info@iveydevelopments.com</Link></h3>
                                <ul>
                                    <li><Link to="tel:+1-111-1111">+1-111-1111</Link></li>                                        
                                </ul>
                            </div>
                        </div>                            
                    </div>
                </div>                
        </footer>       

    );
};

export default Footer;