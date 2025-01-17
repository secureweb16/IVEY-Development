import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import heroBanner from "../assets/images/home-hero-banner.jpg";
import luxury from "../assets/images/luxury.jpg";
import luxury2 from "../assets/images/luxury-2.jpg";

import designed from "../assets/images/designed.jpg";


import championVideo from "../assets/videos/champion.mp4";
import luxuryVideo from "../assets/videos/luxury-video.mp4";
import lifewellVideo from "../assets/videos/life-well.mp4";
import miamibeachVideo from "../assets/videos/miami-beach.mp4";
import aventuraVideo from "../assets/videos/aventura.mp4";
import keybiscayneVideo from "../assets/videos/key-biscayne.mp4";
import miami from "../assets/images/miami.jpg";
import aventura from "../assets/images/aventura.jpg";
import keybiscayne from "../assets/images/key-biscayne.jpg";
import opportunity1 from "../assets/images/opportunity-1.jpg";
import opportunity2 from "../assets/images/opportunity-2.jpg";
import opportunity3 from "../assets/images/opportunity-3.jpg";
import opportunity4 from "../assets/images/opportunity-4.jpg";
import downArrow from "../assets/images/down-arrow.svg";
import teamProfile from "../assets/images/team-profile.png";
import contact from "../assets/images/contact.jpg";
import rightArrow from "../assets/images/right-arrow.svg";
import boutiqueDesign from "../assets/images/boutique-design.jpg";
import axios from 'axios';
import config from "../config";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

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

    const videoRefs = useRef([]);
    const handleMouseEnter = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].play();
        }
    };
    const handleMouseLeave = (index) => {
        if (videoRefs.current[index]) {
            videoRefs.current[index].pause();
        }
    };
 
    const videoBannerRef = useRef();
    const headingBlock1Ref = useRef();
    const headingBlock2Ref = useRef();

    useEffect(() => {
        const el = videoBannerRef.current;
        if (!el) return; // Ensure the ref is defined
        const videoEl = el.querySelector('.life-well-video'); // Select the video element
        if (!videoEl) return; // Ensure the video element exists

        // GSAP animation for video scaling
        gsap.to(el, {
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top center",
                end: "bottom+=100px",
                scrub: 1.05,
                markers: false,
            },
        });

        // Timeline for heading and video
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top top-=300",
                end: "bottom center",
                scrub: true,
                markers: false,
            },
        });

        tl.to(headingBlock1Ref.current, { opacity: 0, y: -100, duration: 1 }, 0)
          .to(headingBlock2Ref.current, { opacity: 1, y: 0, duration: 1 }, 0)
          .to(videoEl, { opacity: 1, onStart: () => videoEl.play(), duration: 1 }, 0);
    }, []);

    return (

        <Layout>
            
            <div id="home" className="hero-section full-screen">
                <div className="banner-image d-flex justify-content-center align-items-center h-100">
                    <div className="image-block color-light overlay bottom-overlay ms-auto position-relative w-50 m-w-100 h-100" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <img className="cover" width="" height="" src={heroBanner} alt="" />
                        <div className="summary-block position-absolute" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">Ivey Development is a company that helps property owners with assets suitable for development. Instead of selling their properties, owners’ partner with Ivey to maximize their value.</div>
                    </div>
                    <div className="heading-block m-color-light position-absolute">
                        <h1><span className="small" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">THE ART OF</span><span className="d-inline-block" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">scaling</span> <span className="d-inline-block color-light" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">‘home’.</span></h1>
                    </div>
                </div>
            </div>

            <div className="image-grid-section image-grid-section-1 pt-60 m-pt-50 pb-50">
                <div className="container">                    
                    <div className="image-grid-wrapper color-light d-grid">
                        <div className="video-block position-relative">
                            <video className="cover" autoPlay muted loop playsInline data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                <source src={championVideo} type="video/mp4"/>
                            </video>                            
                            <div className="summary-block sm-center position-absolute">
                                <h4 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">we specialize in</h4>
                            </div>
                        </div>
                        <div className="image-block position-relative">
                            <img width="" height="" src={boutiqueDesign} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" />
                            <div className="summary-block sm-center color-light position-absolute">
                                <h4 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">boutique design</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-grid-section image-grid-section-2">
                <div className="container">                    
                    <div className="image-grid-wrapper d-grid">
                        <div className="grid-item grid-item-1 d-grid">
                            <div className="image-block d-grid">
                                <img width="" height="" src={luxury} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" />
                                <h4 className="end" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">the luxury of convenience</h4>
                            </div>
                            <div className="video-block">
                                <img width="" height="" src={luxury2} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" />                                
                            </div>                            
                        </div>
                        <div className="grid-item grid-item-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="video-block d-inline-flex align-items-center position-relative overlay-full h-100">
                                <video className="cover" autoPlay muted loop playsInline>
                                    <source src={luxuryVideo} type="video/mp4"/>
                                </video> 
                                <div className="summary-block color-light position-absolute">
                                    <h4 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">enduring value</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-banner-section">
                <div className="video-block-wrapper position-relative">
                    <div className="video-block ms-auto h-100" ref={videoBannerRef}>
                        <img className="cover" width="" height="" src={designed} alt="" />
                        <video className="life-well-video cover position-absolute start-0 top-0" muted loop playsInline>
                            <source src={lifewellVideo} type="video/mp4"/>
                        </video>                        
                    </div>
                    <div className="summary-block color-light d-flex justify-content-center align-items-center position-absolute center w-100 h-100">
                        <div className="heading-block heading-block-1 position-absolute px-20" ref={headingBlock1Ref}>we set the foundation for</div>
                        <div className="heading-block heading-block-2 position-absolute px-20" ref={headingBlock2Ref}>life, well designed.</div>           
                    </div>         
                </div>
            </div>

            <div id="services" className="slider-section opportunities py-120 m-py-80 hidden-x">
                <div className="container">
                    <div className="header-block center m-auto pb-50 m-pb-20" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="100">
                        <h3 className="m-auto">creating new opportunities in South Florida and beyond</h3>
                        <p>Ivey Developments’ vision is to <strong>make space for life, well-designed.</strong> We aim to meaningfully participate in the creation of spaces that generate value continuously for all stakeholders, inhabitants included, as communities continue to develop.</p>
                    </div>
                </div>
                <div className="opportunity-images images-section">
                    <div className="d-grid column-4">
                        <div className="image-block"><img className="cover" width="" height="" src={opportunity1} alt="" /></div>
                        <div className="image-block"><img className="cover" width="" height="" src={opportunity2} alt="" /></div>
                        <div className="image-block"><img className="cover" width="" height="" src={opportunity3} alt="" /></div>
                        <div className="image-block"><img className="cover" width="" height="" src={opportunity4} alt="" /></div>
                    </div>
                </div>
                <div className="opportunity-text-column pt-80 px-100">
                    <div className="d-grid column-3">
                        <div className="summary-block">
                            <h4>small scale development</h4>
                            <p>Boutique, community-oriented, and curated development with long term value to the area, shareholders, and the inhabitants in mind.</p>
                        </div>
                        <div className="summary-block">
                            <h4>community planning</h4>
                            <p>We plan for life, well designed. Our approach to community planning champions convenient, fulfilling, and balanced living and maintaining that standard amist growth. </p>
                        </div>
                        <div className="summary-block">
                            <h4>above average returns</h4>
                            <p>Our goal is to provide outstanding returns through the unassailable approach of beautiful design, conscientious planning, and efficient  execution.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-grid-section image-grid-section-3 image-grid-odd pt-100 m-pt-0 hidden-x">
                <div className="container">                    
                    <div className="image-grid-wrapper d-grid align-items-start">                                            
                        <div className="image-block image-block-left overlay bottom-overlay position-relative">
                            <div className="header-block pb-40">
                                <h3 className="d-flex no-wrap mb-0" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="100">the source of our experience <img width="" height="" src={downArrow} alt="" /></h3>
                            </div>                            
                            <div className="video-block-wrapper d-flex align-items-center position-relative">
                                <img width="" height="" src={miami} alt="" />
                                <div className="video-block w-100 h-100 position-absolute" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
                                    <video className="cover" muted loop playsInline ref={(el) => (videoRefs.current[0] = el)}>
                                        <source src={miamibeachVideo} type="video/mp4"/>
                                    </video>
                                </div>
                                <div className="summary-block color-light position-absolute" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    <h3 className="mb-10">strategic support for the Ritz Carlton Residences</h3>
                                    <div className="location-block">MIAMI BEACH</div>
                                </div>
                            </div>
                        </div>
                        <div className="images-block d-grid">
                            <div className="video-block-wrapper">
                                <div className="d-flex align-items-center position-relative">
                                    <img width="" height="" src={aventura} alt="" />
                                    <div className="video-block w-100 h-100 position-absolute" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                                        <video className="cover" muted loop playsInline ref={(el) => (videoRefs.current[1] = el)}>
                                            <source src={aventuraVideo} type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                                <div className="summary-block pt-40 pb-10" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                    <h4 className="mb-10">lifestyle design for the Marina Lofts</h4>
                                    <div className="location-block">AVENTURA</div>
                                </div>                                
                            </div>
                            <div className="video-block-wrapper">
                                <div className="d-inline-flex align-items-center position-relative sm-w-100">
                                    <img className="sm-w-100" width="" height="" src={keybiscayne} alt="" />
                                    <div className="video-block w-100 h-100 position-absolute" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                                        <video className="cover" muted loop playsInline ref={(el) => (videoRefs.current[2] = el)}>
                                            <source src={keybiscayneVideo} type="video/mp4"/>
                                        </video>                                
                                    </div>
                                </div>
                                <div className="summary-block pt-40" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                    <h4 className="mb-10">breaking ground in Key Biscayne with the Marquis </h4>
                                    <div className="location-block">KEY BISCAYNE, FLORDIA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>              

            <div id="team" className="team-section py-120 m-pb-70 hidden-x">               
                <div className="container">
                    <div className="header-block center pb-100 m-pb-50" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <h2>Our team</h2>
                    </div>
                    <div className="team-items d-grid">
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={teamProfile} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Andy Ashwal</h4>
                                <div className="position-block">Investment Committee Advisor</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={teamProfile} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Andy Ashwal</h4>
                                <div className="position-block">Investment Committee Advisor</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={teamProfile} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Andy Ashwal</h4>
                                <div className="position-block">Investment Committee Advisor</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={teamProfile} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Andy Ashwal</h4>
                                <div className="position-block">Investment Committee Advisor</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={teamProfile} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Andy Ashwal</h4>
                                <div className="position-block">Investment Committee Advisor</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={teamProfile} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Andy Ashwal</h4>
                                <div className="position-block">Investment Committee Advisor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="contact-section pt-120 m-pt-70 hidden-x">
                <div className="container">
                    <div className="contact-wrapper d-grid align-items-center">
                        <div className="form-block">
                            <h3 className="m-center">contact us</h3>
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
                        <div className="image-block color-light overlay top-bottom-overlay position-relative">
                            <img width="" height="" src={contact} alt="" />                            
                            <div className="summary-block d-flex flex-column justify-content-between position-absolute top-0 w-100 h-100">                               
                                <div className="bottom-summary w-100" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                    <h4><Link to="mailto:info@iveydevelopments.com">info@iveydevelopments.com</Link></h4>
                                    <ul>
                                        <li><Link to="tel:+1-111-1111">+1-111-1111</Link></li>                                        
                                    </ul>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>

        </Layout>

    );

};

export default Home;