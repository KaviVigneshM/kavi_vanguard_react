import '../../footer/footerdetails/FooterDtls.css';
import whitelogo from '../../../assets/images/white logo.PNG';
import { GrFacebookOption,GrTwitter,GrYoutube } from "react-icons/gr";
import { IoLogoRss,IoIosMail } from "react-icons/io";
import { HiArrowNarrowRight } from "react-icons/hi";


function FooterDetailcomponent() {
    return (
            <div className="footer">
                <div className="footer-content-block">
                    <div className="logo-copyright-column">
                        <div className="vanguard-whitelogo-footer">   
                            <img src={whitelogo}/>
                        </div>
                        <div  className="socialmedia-logo">
                            <GrFacebookOption className="facebook"/>
                            <GrTwitter className="twitter"/>
                            <GrYoutube className="youtube"/>
                            <IoLogoRss className="hotspot"/>
                            <IoIosMail className="mail"/>
                        </div>
                        <div className="copy-right">
                            &copy;2018 Vanguard Charitable Endowment Program
                        </div>
                    </div>
                    <div className="about-career-legal-column">
                        <div className="information-link-block">
                            <a> ABOUT US </a>
                            <a> CAREER OPPORTUNITIES </a>
                            <a>LEGAL DISCLOSURE </a>
                            <a> POLICIES AND GUIDELINES </a>
                            <a> USER AGREEMENT </a>
                        </div>
                    </div>
                    <div className="contact-privacy-column">
                        <div className="information-link-block">
                            <a> CONTACT US </a>
                            <a> FORMS </a>
                            <a>PRIVACY POLICY </a>
                            <a> TERMS & CONDITION </a>
                            <a> COMPANY POICIES </a>
                        </div>
                    </div>
                    <div className="mobile-about-career-legal-column">
                        <div className="mobile-information-link-block">
                            <a> ABOUT US </a>
                            <a> CAREER OPPORTUNITIES </a>
                            <a>LEGAL DISCLOSURE </a>
                            <a> POLICIES AND GUIDELINES </a>
                            <a> USER AGREEMENT </a>
                        </div>
                        <div className="mobile-information-link-block2">
                            <a> CONTACT US </a>
                            <a> FORMS </a>
                            <a>PRIVACY POLICY </a>
                            <a> TERMS & CONDITION </a>
                            <a> COMPANY POICIES </a>
                        </div>
                    </div>
                    <div className="subscribe-newsletter-column">
                        <div className="subscribe-searchbar-block">
                            <p>Subscribe to our Newsletter</p>
                            <div className="email-arrow-block">
                                <input id="email-bar" type="text" placeholder="Enter your Email Address"/>
                                <button className="arrow-button-footer"><HiArrowNarrowRight className="right-arrow-icon"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default FooterDetailcomponent;
