import React, {useEffect, useRef} from 'react';
import Layout from "./Layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
// import heroBanner from "../assets/videos/hero-banner.mp4";
import heroBanner from "../assets/videos/IveyBanner.mp4";
import weSpecialize from "../assets/images/weSpecialize.jpg";
import luxury from "../assets/images/amir-hossein.jpg";
import luxury2 from "../assets/images/luxury-2.jpg";
// import designed from "../assets/images/designed.jpg";
import designed from "../assets/images/Ivey-1VideoBanner.png";
import enduringValue from "../assets/images/enduring-value.jpg";
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
import homeIcon from "../assets/images/home-icon.svg";
import planningIcon from "../assets/images/planning-icon.svg";
import returnIcon from "../assets/images/return-icon.svg";
import downArrow from "../assets/images/down-arrow.svg";
import kirk from "../assets/images/kirk-ivy.png";
import andy from "../assets/images/andy.png";
import meilyn from "../assets/images/meilyn.png";
import daniella from "../assets/images/daniella.png";
import paul from "../assets/images/paul.png";
import simone from "../assets/images/simone.png";
import elena from "../assets/images/elena.png";
import boutiqueDesign from "../assets/images/boutique-design.jpg";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {    

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

    return (

        <Layout>
            
            <div id="home" className="section hero-section full-screen">
                <div className="banner-image d-flex justify-content-center align-items-center h-100">
                    <div className="image-block color-light overlay bottom-overlay ms-auto position-relative w-50 m-w-100 h-100" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">                        
                        <video className="cover" autoPlay muted loop playsInline data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <source src={heroBanner} type="video/mp4"/>
                        </video>
                        <div className="summary-block m-center position-absolute" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Ivey Development is a company that helps property owners with assets suitable for development. Instead of selling their properties, owners’ partner with Ivey to maximize their value.</div>
                    </div>
                    <div className="heading-block m-color-light position-absolute">
                        <h1><span className="small" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">THE ART OF</span><span className="d-inline-block" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">Scaling</span> <span className="d-inline-block color-light" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000"><span className="m-hide">‘</span>life<span className="m-hide">’</span>.</span></h1>
                    </div>
                </div>
            </div>

            <div className="section image-grid-section image-grid-section-1 m-hide pt-60 m-pt-50 pb-50">
                <div className="container">                    
                    <div className="image-grid-wrapper color-light d-grid">
                        <div className="video-block position-relative">
                            <img className="sm-w-100" width="" height="" src={weSpecialize} alt="" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" />
                            <div className="summary-block sm-center position-absolute">
                                <h3 data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">we specialize in</h3>
                            </div>
                        </div>
                        <div className="image-block position-relative overlay-full" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <img className="cover" width="" height="" src={boutiqueDesign} alt="" />
                            <div className="summary-block sm-center color-light position-absolute">
                                <h3 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">boutique design</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-image-slider mobile-image-slider-1 center m-color-light d-hide position-relative m-pt-20 m-px-10">                
                <div className="image-block overlay-full position-relative w-100 h-100">
                    <img className="cover" width="" height="" src={weSpecialize} alt="" />
                </div>                
                <div className="summary-block position-absolute">
                    <h6 className="uppercase">We Specialize In</h6>
                    <h2>boutique design</h2>
                </div>
            </div>

            <div className="section image-grid-section m-hide image-grid-section-2">
                <div className="container">                    
                    <div className="image-grid-wrapper d-grid">
                        <div className="grid-item grid-item-1 d-grid">
                            <div className="image-block d-grid">
                                <img width="" height="" src={luxury} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" />
                                <h3 className="end" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">with the aim of creating</h3>
                            </div>
                            <div className="video-block">
                                <img width="" height="" src={luxury2} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" />
                            </div>                            
                        </div>
                        <div className="grid-item grid-item-2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <div className="video-block d-inline-flex align-items-center position-relative overlay-full h-100">
                                <img className="cover" width="" height="" src={enduringValue} alt="" />
                                <div className="summary-block color-light position-absolute">
                                    <h3 data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">enduring value</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-image-slider mobile-image-slider-2 center m-color-light d-hide overlay position-relative m-pt-20">
                <Swiper className="h-100111"
                    spaceBetween={5}

                    slidesPerView={1.2}                    
                    centeredSlides={true}                            
                    initialSlide={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div className="image-block overlay-full position-relative h-100">
                            <img className="cover" width="" height="" src={luxury} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-block overlay-full position-relative h-100">
                            <img className="cover" width="" height="" src={boutiqueDesign} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-block overlay-full position-relative h-100">
                            <img className="cover" width="" height="" src={enduringValue} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-block overlay-full position-relative h-100">
                            <img className="cover" width="" height="" src={luxury2} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="summary-block position-absolute">
                    <h6 className="uppercase">with the aim of creating</h6>
                    <h2>enduring value</h2>
                </div>
            </div>

            <div className="section video-banner-section">
                <div className="video-block-wrapper position-relative">
                    <div className="video-block ms-auto h-100" ref={videoBannerRef}>
                        <img className="cover" width="" height="" src={designed} alt="" />
                        <video className="life-well-video cover position-absolute start-0 top-0" muted loop playsInline>
                            <source src={lifewellVideo} type="video/mp4"/>
                        </video>                        
                    </div>
                    <div className="summary-block d-flex justify-content-center align-items-center position-absolute center w-100 h-100">
                        <div className="heading-block heading-block-1 color-light position-absolute px-20" ref={headingBlock1Ref}>we set the foundation for</div>
                        <div className="heading-block heading-block-2 color-light position-absolute px-20" ref={headingBlock2Ref}>life, well designed.</div>           
                    </div>         
                </div>
            </div>

            <div id="services" className="section slider-section opportunities py-120 m-py-80">
                <div className="container">
                    <div className="header-block center m-auto pb-50 m-pb-20" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="100">
                        <h2 className="m-auto">creating new opportunities in South Florida and beyond</h2>
                        <p>Ivey Developments’ vision is to <strong>make space for life, well-designed.</strong> We aim to meaningfully participate in the creation of spaces that generate value continuously for all stakeholders, inhabitants included, as communities continue to develop.</p>
                    </div>
                </div>
                <div className="opportunity-images images-section">
                    <Swiper
                            spaceBetween={10}
                            slidesPerView={1.5}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            breakpoints={{                                
                                1024: { slidesPerView: 3, spaceBetween: 20, loop: true, centeredSlides: false },
                                1440: { slidesPerView: 4, spaceBetween: 20, centeredSlides: false },
                            }}
                    >
                        <SwiperSlide>
                            <div className="image-block"><img className="cover" width="" height="" src={opportunity1} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-block"><img className="cover" width="" height="" src={opportunity2} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-block"><img className="cover" width="" height="" src={opportunity3} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-block"><img className="cover" width="" height="" src={opportunity4} alt="" /></div>
                        </SwiperSlide>                        
                    </Swiper>                    
                </div>
                <div className="opportunity-text-column pt-120 px-100 sm-pt-60">
                    <div className="d-grid column-2 m-auto">
                        <div className="summary-block position-relative">
                            <div className="icon-block position-absolute top-0 start-0"><img width="" height="" src={homeIcon} alt="" /></div>
                            <h3>small scale development</h3>
                            <p>Boutique, community-oriented, and curated development with long term value to the area, shareholders, and the inhabitants in mind.</p>
                            
                        </div>
                        <div className="summary-block position-relative">
                        <div className="icon-block position-absolute top-0 start-0"><img width="" height="" src={planningIcon} alt="" /></div>
                            <h3>community planning</h3>
                            <p>We plan for life, well designed. Our approach to community planning champions convenient, fulfilling, and balanced living and maintaining that standard amist growth. </p>
                        </div>
                        <div className="summary-block position-relative">
                            <div className="icon-block position-absolute top-0 start-0"><img width="" height="" src={returnIcon} alt="" /></div>
                            <h3>above average returns</h3>
                            <p>Our goal is to provide outstanding returns through the unassailable approach of beautiful design, conscientious planning, and efficient  execution.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section image-grid-section image-grid-section-3 image-grid-odd pt-100 m-pt-0">
                <div className="container">                    
                    <div className="image-grid-wrapper d-grid align-items-start">                                            
                        <div className="image-block image-block-left overlay bottom-overlay position-relative">
                            <div className="header-block pb-40">
                                <h2 className="d-flex no-wrap mb-0" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="100">expertise through experience <img width="" height="" src={downArrow} alt="" /></h2>
                            </div>                            
                            <div className="video-block-wrapper d-flex align-items-end position-relative">
                                <img width="" height="" src={miami} alt="" />
                                <div className="video-block w-100 h-100 position-absolute" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
                                    <video className="cover" muted loop playsInline ref={(el) => (videoRefs.current[0] = el)}>
                                        <source src={miamibeachVideo} type="video/mp4"/>
                                    </video>
                                </div>
                                <div className="summary-block color-light position-absolute" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                                    <h2 className="pb-10">Strategic support for the Ritz Carlton Residences</h2>
                                    <div className="location-block">MIAMI BEACH</div>
                                </div>
                            </div>
                        </div>
                        <div className="images-block image-block-right sm-color-light d-grid">
                            <div className="video-block-wrapper position-relative">
                                <div className="d-flex align-items-center position-relative">
                                    <img className="sm-w-100" width="" height="" src={aventura} alt="" />
                                    <div className="video-block w-100 h-100 position-absolute" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                                        <video className="cover" muted loop playsInline ref={(el) => (videoRefs.current[1] = el)}>
                                            <source src={aventuraVideo} type="video/mp4"/>
                                        </video>
                                    </div>
                                </div>
                                <div className="summary-block pt-40 pb-10" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                    <h3 className="mb-10">Lifestyle design for the Marina Lofts</h3>
                                    <div className="location-block">AVENTURA</div>
                                </div>                                
                            </div>
                            <div className="video-block-wrapper position-relative">
                                <div className="d-flex align-items-center position-relative sm-w-100">
                                    <img className="sm-w-100" width="" height="" src={keybiscayne} alt="" />
                                    <div className="video-block w-100 h-100 position-absolute" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                                        <video className="cover" muted loop playsInline ref={(el) => (videoRefs.current[2] = el)}>
                                            <source src={keybiscayneVideo} type="video/mp4"/>
                                        </video>                                
                                    </div>
                                </div>
                                <div className="summary-block pt-40" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                    <h3 className="mb-10">Breaking ground on Biscayne Boulevard with the Marquis</h3>
                                    <div className="location-block uppercase">Biscayne Boulevard</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>              

            <div id="team" className="section team-section py-120 m-pt-70 m-pb-70">               
                <div className="container">
                    <div className="header-block center pb-100 m-pb-50" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <h2>Our team</h2>
                    </div>
                    <div className="team-items d-grid">
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={kirk} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Kirk Ivy</h4>
                                <div className="position-block">President & Chief Development Officer</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={andy} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Andy Ashwal</h4>
                                <div className="position-block">Investment Committer Advisor</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={meilyn} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Meilyn Vega</h4>
                                <div className="position-block">Lead Architect</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={daniella} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Daniella Acuna</h4>
                                <div className="position-block">Lead Designer</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={paul} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Paul Burke</h4>
                                <div className="position-block">Development Advisor</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={simone} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Simone Keize</h4>
                                <div className="position-block">Chief Financial Officer</div>
                            </div>
                        </div>
                        <div className="team-item d-grid align-items-center">
                            <div className="image-block">
                                <img width="" height="" src={elena} alt="" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
                            </div>
                            <div className="summary-block" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                                <h4>Elena Ivy</h4>
                                <div className="position-block">Development Broker</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            

        </Layout>

    );

};

export default Home;