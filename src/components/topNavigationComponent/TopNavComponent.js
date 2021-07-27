import './TopNavi.css';
import { GrMail } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

function TopNavComponent() {
    return (
        <div className="topnavi-bluebox">
            <div className="topnavi-content"> 
                <span id="need">Need Assistance ?</span>
                <select class="selectBox">
                    <option>John Carson Eco Fund - A02…</option>
                </select>
                <GrMail className="mailletter"/>
                <FaUserCircle className="user-icon"/>
                </div>
        </div>
    )
}

export default TopNavComponent;
