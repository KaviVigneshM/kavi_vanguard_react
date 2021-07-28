import '../twobutton/TwoBtn.css';
import { HiArrowNarrowRight } from "react-icons/hi";

function TwoBtnComponent() {
    return (
        <div className="anotherfund-interestedparties-button">
            <div className="anotherfund-interestedparties-button-content">
                <button className="anotherfund-button">CREATE ANOTHER FUND<sub> <HiArrowNarrowRight className="Narrow-right-icon"/></sub></button>
                <button className="invited-button">INVITED INTERESTED PARTIES<sub><HiArrowNarrowRight className="Narrow-right-icon"/></sub></button>
            </div>
        </div>
    )
}

export default TwoBtnComponent;
