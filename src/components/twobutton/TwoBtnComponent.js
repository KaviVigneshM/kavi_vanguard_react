import '../twobutton/TwoBtn.css';
import { HiArrowNarrowRight } from "react-icons/hi";

function TwoBtnComponent() {
    return (
        <div className="twobtn">
            <div className="twobtn-content">
                <button className="btn1">CREATE ANOTHER FUND<sub> <HiArrowNarrowRight className="rarw"/></sub></button>
                <button className="btn2">INVITED INTERESTED PARTIES<sub><HiArrowNarrowRight className="rarw"/></sub></button>
            </div>
        </div>
    )
}

export default TwoBtnComponent;
