import './SecondTopNavi.css';
import VanguardLogo from '../../assets/images/vcep-logo.jpg';
import { GiHamburgerMenu } from "react-icons/gi";


function SecondTopNavComponent() {
    return (
        <div className="secondtop-navi">
        <div className="secondtop-logobox">
            <div className="logo-block">
                <img className="logopic" src={VanguardLogo}/>
            </div>
            <div className="navi-content">
                ACCOUNT SUMMARY
                <select class="selectBox1">
                    <option>GRANTS</option>
                </select>
                <select class="selectBox1">
                    <option>CONTRIBUTION</option>
                </select>
                <select class="selectBox1">
                    <option>INVESTMENTS</option>
                </select>
                RESOURCES
                <select class="selectBox1">
                    <option>MY ACCOUNT</option>
                </select>
            </div>
            <div className="hamburger">
                <GiHamburgerMenu/>
            </div>
        </div>
        </div>
    )
}

export default SecondTopNavComponent;
