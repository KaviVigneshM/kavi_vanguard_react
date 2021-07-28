import './SecondTopNavi.css';
import VanguardLogo from '../../assets/images/vcep-logo.jpg';
import { GiHamburgerMenu } from "react-icons/gi";


function SecondTopNavComponent(props) {
    return (
        <nav>
            <div className="navigation-bar-vanguard-logo">
                <div className="vanguard-logo-navigation-block">
                    <div className="vanguard-logo">
                        <img className="vanguard-logo-img" src={VanguardLogo}/>
                    </div>
                    <div className="navigation-bar-vanguard-content">
                        <a href="#" class="navigation-bar-menu">ACCOUNT SUMMARY</a>
                        <a href="#" class="navigation-bar-menu">GRANTS</a>
                        <a href="#" class="navigation-bar-menu">CONTRIBUTION</a>
                        <a href="#" class="navigation-bar-menu">INVESTMENTS</a>
                        <a href="#" class="navigation-bar-menu"> RESOURCES</a>
                        <a href="#" class="navigation-bar-menu">MY ACCOUNT</a>
                    </div>
                    <div className="hamburger-menu-mobileview">
                        <GiHamburgerMenu onClick={props.changeham}/>
                    </div>
                </div>
            </div>
            <div className={props.name ? "true" : "false"}>
                <a href="#" class="navigation-bar-menu">ACCOUNT SUMMARY</a>
                <a href="#" class="navigation-bar-menu">GRANTS</a>
                <a href="#" class="navigation-bar-menu">CONTRIBUTION</a>
                <a href="#" class="navigation-bar-menu">INVESTMENTS</a>
                <a href="#" class="navigation-bar-menu"> RESOURCES</a>
                <a href="#" class="navigation-bar-menu">MY ACCOUNT</a>
            </div>
        </nav>
        
    )
}

export default SecondTopNavComponent;
