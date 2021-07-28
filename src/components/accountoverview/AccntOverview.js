import '../accountoverview/AccntOverview.css';
import { AiOutlineRight } from "react-icons/ai";

function AccntOverview() {
    return (
        <div className="account-overview-block">
            <div className="home-account-overview-block">
                Home
                <AiOutlineRight/>
                Account overview
            </div>
            <div className="account-overview-text">
                Account Overview
            </div>
            <span className="church-fund-text">The Church Fund - A1050919</span>
            <div className="balance">Balances as of 12/12/2012</div>
        </div>
    )
}

export default AccntOverview;
