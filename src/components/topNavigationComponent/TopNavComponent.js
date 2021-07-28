import './TopNavi.css';
import { GrMail } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";

function TopNavComponent() {
    return (
            <div className="app-bar">
                <div className="app-bar-content"> 
                    <span id="need-assistance-text">Need Assistance ?</span>
                    <select class="app-bar-dropdown-name">
                        <option>John Carson Eco Fund - A02…</option>
                    </select>
                    <GrMail className="mailletter"/>
                    <FaUserCircle className="user-icon"/>
                </div>
            </div>
    )
}

export default TopNavComponent;
