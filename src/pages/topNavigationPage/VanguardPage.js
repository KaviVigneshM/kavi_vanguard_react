import '../topNavigationPage/Vanguard.css';
import TopNavComponent from '../../components/topNavigationComponent/TopNavComponent';
import SecondTopNavComponent from '../../components/secondtopNavigationComponent/SecondTopNavComponent';
import AccntOverview from '../../components/accountoverview/AccntOverview';
import VanguardBoxComponent from '../../components/vanguardbox/VanguardBoxComponent';
import TwoBtnComponent from '../../components/twobutton/TwoBtnComponent';
import FooterDetailcomponent from '../../components/footer/footerdetails/FooterDetailcomponent';
import WelAlert from '../../components/welalert/WelAlert';
import FooterBot from '../../components/footer/footerbottom/FooterBot';

function TopNavigation() {
    return (
        <>
            <TopNavComponent/>
            <SecondTopNavComponent/>
            <div className="mobile">
            <WelAlert/>
            </div>
            <AccntOverview/>
            <VanguardBoxComponent/>
            <TwoBtnComponent/>
            <FooterDetailcomponent/>
            <FooterBot/>
        </>
    )
}

export default TopNavigation;
