import shiplogo from '../../../assets/images/bitmap.png';
import '../footerbottom/FooterBott.css';

function FooterBot() {
    return (
        <div className="footer-btm">
            <div className="shiplogo-block">
                <img src={shiplogo}/>
            </div>
            <div className="bot-cpyryt">&copy;2018 Vanguard Charitable Endowment Program. VAGUARD and the Vanguard Ship Logo are trademarks of The Vanguard Group, Inc.</div>
        </div>
    )
}

export default FooterBot;
