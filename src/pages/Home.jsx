import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "./Layout";
import heroBanner from "../assets/images/home-hero-banner.jpg";
import champion from "../assets/images/champion.jpg";
import designed from "../assets/images/designed.jpg";
import designedMobile from "../assets/images/designed-mobile.jpg";
import opportunity from "../assets/images/opportunity.jpg";
import downArrow from "../assets/images/down-arrow.svg";
import miami from "../assets/images/miami.jpg";
import aventura from "../assets/images/aventura.jpg";
import marquis from "../assets/images/marquis.jpg";
import team from "../assets/images/team.jpg";
import teamProfile from "../assets/images/team-profile.jpg";
import contact from "../assets/images/contact.jpg";
import rightArrow from "../assets/images/right-arrow.svg";
import boutiqueDesign from "../assets/images/boutique-design.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import config from "../config"

const Home = () => {

    class Tabs extends React.Component{
        state = {
            activeTab: this.props.children[0].props.teamHeading,
        };
      
        changeTab = (tab) => {
            this.setState({ activeTab: tab });
        };
      
        render(){
            let content;
            const buttons = React.Children.map(this.props.children, (child) => {
                if (child.props.teamHeading === this.state.activeTab) {
                    content = child.props.children;
                }
                return {
                    teamProfile: child.props.teamProfile,
                    teamHeading: child.props.teamHeading,
                    teamPosition: child.props.teamPosition,
                };
            });      
            return (
                <div className="team-wrapper d-grid align-items-center">
                    {/* Reorder JSX to display the image block first */}
                    <div className="image-block overlay bottom-overlay position-relative">{content}</div>
                    <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
                </div>
            );
        }
    }
  
    const TabButtons = ({ buttons, changeTab, activeTab }) => {
        return (
            <div className="team-items">
                {buttons.map((button) => {
                    const { teamProfile, teamHeading, teamPosition } = button;
                    return(
                        <button
                            key={teamHeading}
                            className={
                            teamHeading === activeTab
                                ? 'active team-item d-flex align-items-center'
                                : 'team-item d-flex align-items-center'
                            }
                            onClick={() => changeTab(teamHeading)}
                        >
                        {/* Place the image block before the summary block */}
                        <div className="image-block">
                            <img src={teamProfile} alt="" className="button-image" />
                        </div>
                        <div className="summary-block">
                            <h4>{teamHeading}</h4>
                            <div className="position-block">{teamPosition}</div>
                        </div>
                </button>
              );
            })}
          </div>
        );
    };
      
    const Tab = props =>{
        return(
            <React.Fragment>
                {props.children}
            </React.Fragment>
        )
    }

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

        <Layout>
            
            <div id="home" className="hero-section full-screen">
                <div className="banner-image d-flex justify-content-center align-items-center h-100">
                    <div className="image-block color-light overlay bottom-overlay margin-start-auto position-relative w-50 m-w-100 h-100">
                        <img className="cover" width="" height="" src={heroBanner} alt="" />
                        <div className="summary-block position-absolute">Ivey Development is a company that helps property owners with assets suitable for development. Instead of selling their properties, owners’ partner with Ivey to maximize their value.</div>
                    </div>
                    <div className="heading-block position-absolute">
                        <h1>Scaling <span className="color-light">‘home’.</span></h1>
                    </div>
                </div>
            </div>

            <div className="image-grid-section m-pt-50 pb-100">
                <div className="container">                    
                    <div className="image-grid-wrapper d-grid align-items-end">
                        <div className="image-block image-block-left position-relative">
                            <img width="" height="" src={champion} alt="" />
                            <div className="summary-block position-absolute">
                                <h2>We champion</h2>
                            </div>
                        </div>
                        <div className="image-block image-block-right color-light position-relative">
                            <img width="" height="" src={boutiqueDesign} alt="" />
                            <div className="summary-block position-absolute">
                                <h2>boutique design</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="image-banner-section d-flex justify-content-center">                    
                <div className="image-block">
                    <picture className="w-100 full-screen">
                        <source media="(max-width:1023px)" srcset={designedMobile}/>
                        <img className="h-100 cover" src={designed} alt="" />
                    </picture>
                </div>
                <div className="summary-block full-screen d-flex justify-content-center align-items-center position-absolute">
                    <div className="heading-block">life, well designed.</div>
                </div>               
            </div>

            <div id="services" className="slider-section opportunities py-120 m-py-80">
                <div className="container">
                    <div className="header-block center m-auto pb-50">
                        <h2 data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">Creating new opportunities in south Florida</h2>
                        <p data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <Swiper                    
                    loop={true}                    
                    slidesPerView={1}                    
                    breakpoints={{
                        767:{
                            loop: false,
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        992:{
                            loop: false,
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1367:{
                            loop: false,
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

            <div className="image-grid-section image-grid-odd pt-100 m-pt-0">
                <div className="container">
                    <div className="header-block">
                        <h2 className="mb-0">the source of our experience <img width="" height="" src={downArrow} alt="" /></h2>
                    </div>
                    <div className="image-grid-wrapper d-grid align-items-start">
                        <div className="image-block image-block-left overlay bottom-overlay position-relative">
                            <img width="" height="" src={miami} alt="" />
                            <div className="summary-block color-light position-absolute">
                                <h2>Strategic support for the Ritz Carlton Residences Miami</h2>
                            </div>
                        </div>
                        <div className="images-block d-grid">
                            <div className="image-block image-block-1">
                                <img width="" height="" src={aventura} alt="" />
                                <div className="summary-block">
                                    <h3>Lifestyle design for the Marina Lofts in Aventura</h3>
                                </div>
                            </div>
                            <div className="image-block image-block-2">
                                <img width="" height="" src={marquis} alt="" />
                                <div className="summary-block">
                                    <h3>Breaking ground with the Marquis</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="team" className="team-section py-120 m-pb-70">               
                <div className="container">
                    <div className="header-block center pb-100 m-pb-50">
                        <h2>Our team</h2>
                    </div>
                    <Tabs>
                        <Tab teamProfile={teamProfile} teamHeading="Andy Ashwal" teamPosition="Investment Committee Advisor">
                            <img width="" height="" src={team} alt="" />
                            <div className="summary-block color-light position-absolute bottom-0 w-100">
                                <h3>Kirk Ivy</h3>
                                <div className="position-block uppercase pb-20 m-pb-10">President & Chief Development Officer 1</div>
                                <div className="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </Tab>
                        <Tab teamProfile={teamProfile} teamHeading="Andy Ashwal 2" teamPosition="Investment Committee Advisor">
                            <img width="" height="" src={team} alt="" />
                            <div className="summary-block color-light position-absolute bottom-0 w-100">
                                <h3>Kirk Ivy</h3>
                                <div className="position-block uppercase pb-20 m-pb-10">President & Chief Development Officer 2</div>
                                <div className="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </Tab>
                        <Tab teamProfile={teamProfile} teamHeading="Andy Ashwal 3" teamPosition="Investment Committee Advisor">
                            <img width="" height="" src={team} alt="" />
                            <div className="summary-block color-light position-absolute bottom-0 w-100">
                                <h3>Kirk Ivy</h3>
                                <div className="position-block uppercase pb-20 m-pb-10">President & Chief Development Officer 3</div>
                                <div className="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </Tab>
                        <Tab teamProfile={teamProfile} teamHeading="Andy Ashwal 4" teamPosition="Investment Committee Advisor">
                            <img width="" height="" src={team} alt="" />
                            <div className="summary-block color-light position-absolute bottom-0 w-100">
                                <h3>Kirk Ivy</h3>
                                <div className="position-block uppercase pb-20 m-pb-10">President & Chief Development Officer 4</div>
                                <div className="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </Tab>
                        <Tab teamProfile={teamProfile} teamHeading="Andy Ashwal 5" teamPosition="Investment Committee Advisor">
                            <img width="" height="" src={team} alt="" />
                            <div className="summary-block color-light position-absolute bottom-0 w-100">
                                <h3>Kirk Ivy</h3>
                                <div className="position-block uppercase pb-20 m-pb-10">President & Chief Development Officer 5</div>
                                <div className="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </Tab>
                        <Tab teamProfile={teamProfile} teamHeading="Andy Ashwal 6" teamPosition="Investment Committee Advisor">
                            <img width="" height="" src={team} alt="" />
                            <div className="summary-block color-light position-absolute bottom-0 w-100">
                                <h3>Kirk Ivy</h3>
                                <div className="position-block uppercase pb-20 m-pb-10">President & Chief Development Officer 6</div>
                                <div className="text-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            </div>
                        </Tab>                       
                    </Tabs>                    
                </div>
            </div>

            <div id="contact" className="contact-section py-120 m-py-70">
                <div className="container">
                    <div className="contact-wrapper d-grid align-items-center">
                        <div className="form-block">
                            <h3 className="m-center">contact us</h3>
                            <form className="pt-30" onSubmit={handleSubmit}>
                                <div className="form-field">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-field">
                                    <input
                                        type="tel"
                                        name='phone'
                                        placeholder="Phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-field">
                                    <textarea 
                                        type="" 
                                        placeholder="Message" 
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        required 
                                    ></textarea>
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
                                <div className="top-summary w-100">
                                    <h2>join Ivey Developments in creating home</h2>
                                </div>
                                <div className="bottom-summary w-100">
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