import '../../footer/footerdetails/FooterDtls.css';
import whitelogo from '../../../assets/images/white logo.PNG';
import { GrFacebookOption,GrTwitter,GrYoutube } from "react-icons/gr";
import { IoLogoRss,IoIosMail } from "react-icons/io";
import { HiArrowNarrowRight } from "react-icons/hi";


function FooterDetailcomponent() {
    return (
            <div className="footer">
                <div className="row">
                    <div className="column1">
                     <div className="whitelogo-footer">   
                        <img src={whitelogo}/>
                    </div>
                    <div  className="socialmedia-logo">
                        <GrFacebookOption className="fb"/>
                        <GrTwitter className="twt"/>
                        <GrYoutube className="youtube"/>
                        <IoLogoRss className="hotspot"/>
                        <IoIosMail className="mail"/>
                    </div>
                    <div className="cpyright">
                        &copy;2018 Vanguard Charitable Endowment Program
                    </div>
                    </div>
                <div className="column2">
                    <div className="info-footer">
                       <a> ABOUT US </a>
                       <a> CAREER OPPORTUNITIES </a>
                       <a>LEGAL DISCLOSURE </a>
                       <a> POLICIES AND GUIDELINES </a>
                       <a> USER AGREEMENT </a>
                    </div>
                </div>
                <div className="column3">
                    <div className="info-footer">
                       <a> CONTACT US </a>
                       <a> FORMS </a>
                       <a>PRIVACY POLICY </a>
                       <a> TERMS & CONDITION </a>
                       <a> COMPANY POICIES </a>
                    </div>
                </div>
                <div className="column-mob">
                    <div className="info-footer-mob">
                       <a> ABOUT US </a>
                       <a> CAREER OPPORTUNITIES </a>
                       <a>LEGAL DISCLOSURE </a>
                       <a> POLICIES AND GUIDELINES </a>
                       <a> USER AGREEMENT </a>
                    </div>
                    <div className="info-footer-mob2">
                       <a> CONTACT US </a>
                       <a> FORMS </a>
                       <a>PRIVACY POLICY </a>
                       <a> TERMS & CONDITION </a>
                       <a> COMPANY POICIES </a>
                    </div>
                </div>
                <div className="column4">
                    <div className="footer-searchbar">
                        <p>Subscribe to our Newsletter</p>
                        <input id="search-bar" type="text" placeholder="Enter your Email Address"/>
                        <button className="arw-btn-footer"><HiArrowNarrowRight className="rytarw"/></button>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default FooterDetailcomponent;
