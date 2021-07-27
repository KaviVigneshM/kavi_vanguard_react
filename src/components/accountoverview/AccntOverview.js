import '../accountoverview/AccntOverview.css';
import { AiOutlineRight } from "react-icons/ai";

function AccntOverview() {
    return (
        <div className="accnt-overview">
            <div className="accntbox">
                Home
                <AiOutlineRight/>
                Account overview
            </div>
            <div className="accntbox2">
                Account Overview
            </div>
            <span className="church">The church fund - A1050919</span>
            <div className="balance">Balances as of 12/12/2012</div>
        </div>
    )
}

export default AccntOverview;
