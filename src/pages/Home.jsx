import React, {useState, useEffect, useRef} from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import heroBanner from "../assets/images/home-hero-banner.jpg";
import enduring from "../assets/images/enduring-value.jpg";
import luxury from "../assets/images/luxury.jpg";
import championVideo from "../assets/videos/champion.mp4";
import opportunity from "../assets/images/opportunity.jpg";
import downArrow from "../assets/images/down-arrow.svg";
import miami from "../assets/images/miami.jpg";
import marquis from "../assets/images/marquis.jpg";
import teamProfile from "../assets/images/team-profile.png";
import contact from "../assets/images/contact.jpg";
import rightArrow from "../assets/images/right-arrow.svg";
import boutiqueDesign from "../assets/images/boutique-design.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
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

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };
 
    const videoBannerRef = useRef();
    const headingBlock1Ref = useRef();
    const headingBlock2Ref = useRef();

    useEffect(() => {
        const el = videoBannerRef.current;
        gsap.to(el, {
            scale: 1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top center",
                end: "bottom+=100px",
                scrub: 1.05,
                markers: false
            }
        });

        const tl = gsap.timeline({            
            scrollTrigger: {
                trigger: el,
                start: "top top-=300",
                end: "bottom center",
                scrub: true,
                markers: false
            },
        });

        tl.to(headingBlock1Ref.current, { opacity: 0, y: -100, duration: 1 }, 0)
          .to(headingBlock2Ref.current, { opacity: 1, y:0, duration: 1 }, 0);

    }, [])

    return (

        <Layout>
            
            <div id="home" className="hero-section full-screen hidden-x">
                <div className="banner-image d-flex justify-content-center align-items-center h-100">
                    <div className="image-block color-light overlay bottom-overlay ms-auto position-relative w-50 m-w-100 h-100" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <img className="cover" width="" height="" src={heroBanner} alt="" />
                        <div className="summary-block position-absolute" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">Ivey Development is a company that helps property owners with assets suitable for development. Instead of selling their properties, owners’ partner with Ivey to maximize their value.</div>
                    </div>
                    <div className="heading-block m-color-light position-absolute">
                        <h1><span className="d-inline-block" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">Scaling</span> <span className="d-inline-block color-light" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">‘home’.</span></h1>
                    </div>
                </div>
            </div>

            <div className="image-grid-section image-grid-section-1 pt-60 m-pt-50 pb-50 hidden">
                <div className="container">                    
                    <div className="image-grid-wrapper d-grid align-items-end">
                        <div className="video-block position-relative">
                            <video className="cover" autoPlay muted loop data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                <source src={championVideo} type="video/mp4"/>
                            </video>                            
                            <div className="summary-block sm-center position-absolute">
                                <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">We champion</h2>
                            </div>
                        </div>
                        <div className="image-block color-light position-relative">
                            <img width="" height="" src={boutiqueDesign} alt="" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" />
                            <div className="summary-block color-light position-absolute">
                                <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">boutique design</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-grid-section image-grid-section-2 pb-100 hidden-x">
                <div className="container">                    
                    <div className="image-grid-wrapper d-grid">
                        <div className="grid-item grid-item-1 d-grid">
                            <div className="image-block d-grid">
                                <img width="" height="" src={luxury} alt="" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000" />
                                <h4 className="end" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">the luxury of convenience</h4>
                            </div>
                            <div className="video-block">
                                <video className="w-100" autoPlay muted loop data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                    <source src={championVideo} type="video/mp4"/>
                                </video> 
                            </div>                            
                        </div>
                        <div className="grid-item grid-item-2 h-100">
                            <div className="image-block d-inline-flex align-items-center position-relative h-100">
                                <img className="cover" width="" height="" src={enduring} alt="" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000" />
                                <div className="summary-block position-absolute">
                                    <h4 data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">enduring value</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-banner-section">
                <div className="video-block-wrapper position-relative">
                    <div className="video-block ms-auto h-100" ref={videoBannerRef}>
                        <video className="cover" autoPlay muted loop>
                            <source src={championVideo} type="video/mp4"/>
                        </video>                        
                    </div>
                    <div className="summary-block d-flex justify-content-center align-items-center position-absolute center w-100 h-100">
                        <div className="heading-block heading-block-1 position-absolute px-20" ref={headingBlock1Ref}>life, well designed.</div>
                        <div className="heading-block heading-block-2 position-absolute px-20" ref={headingBlock2Ref}>boutique design</div>           
                    </div>         
                </div>
            </div>

            <div id="services" className="slider-section opportunities py-120 m-py-80 hidden-x">
                <div className="container">
                    <div className="header-block center m-auto pb-50 m-pb-20" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="100">
                        <h2>Creating new opportunities in south Florida</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className='sm-center' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <Swiper                    
                        loop={true}              
                        slidesPerView={1}
                        breakpoints={{
                            767:{
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            992:{
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1367:{                 
                                slidesPerView: 4,
                                spaceBetween: 15,
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="image-block">
                                    <img width="" height="" src={opportunity} alt="" />
                                </div>
                                <div className="summary-block">
                                    <h3>small scale development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="image-block">
                                    <img width="" height="" src={opportunity} alt="" />
                                </div>
                                <div className="summary-block">
                                    <h3>small scale development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="image-block">
                                    <img width="" height="" src={opportunity} alt="" />
                                </div>
                                <div className="summary-block">
                                    <h3>community planning</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="image-block">
                                    <img width="" height="" src={opportunity} alt="" />
                                </div>
                                <div className="summary-block">
                                    <h3>above average returns</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="image-block">
                                    <img width="" height="" src={opportunity} alt="" />
                                </div>
                                <div className="summary-block">
                                    <h3>small scale development</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="image-block">
                                    <img width="" height="" src={opportunity} alt="" />
                                </div>
                                <div className="summary-block">
                                    <h3>above average returns</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className="image-grid-section image-grid-section-3 image-grid-odd pt-100 m-pt-0 hidden-x">
                <div className="container">
                    <div className="header-block" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="100">
                        <h2 className="mb-0">the source of our experience <img width="" height="" src={downArrow} alt="" /></h2>
                    </div>
                    <div className="image-grid-wrapper d-grid align-items-start">
                        <div className="image-block image-block-left overlay bottom-overlay position-relative">
                            <img width="" height="" src={miami} alt="" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" />
                            <div className="summary-block color-light position-absolute" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                <h2>Strategic support for the Ritz Carlton Residences Miami</h2>
                            </div>
                        </div>
                        <div className="images-block d-grid">
                            <div className="video-block">
                                <div className="video-block-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>                                
                                    <video className="w-100" muted loop ref={videoRef}>
                                        <source src={championVideo} type="video/mp4"/>
                                    </video>
                                </div>
                                <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                    <h3>Lifestyle design for the Marina Lofts in Aventura</h3>
                                </div>
                            </div>
                            <div className="image-block image-block-2">
                                <img width="" height="" src={marquis} alt="" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" />
                                <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                    <h3>Breaking ground with the Marquis</h3>
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

            <div id="contact" className="contact-section py-120 m-py-70 hidden-x">
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
                                <div className="top-summary w-100" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                    <h2>join Ivey Developments in creating home</h2>
                                </div>
                                <div className="bottom-summary w-100" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
                                    <h3>info@iveydevelopments.com</h3>
                                    <ul>
                                        <li><Link to="tel:+1-111-1111">+1-111-1111</Link></li>
                                        <li><Link to="">@IVEYDEVELOPMENTS</Link></li>
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