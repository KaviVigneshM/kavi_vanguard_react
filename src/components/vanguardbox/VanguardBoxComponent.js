import '../vanguardbox/VanguardBox.css';
import {BsFillInfoCircleFill } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineLeftCircle,AiOutlineRightCircle } from "react-icons/ai";


function VanguardBoxComponent() {
    return (
        <div className="transaction-details">
            <div class="transaction-details-block">
                <div class="current-balance-card  current-balance-card-item">
                    <a> Current Balance <BsFillInfoCircleFill className="information-icon"/></a>
                    <a>$120,000</a>
                </div>
                <div class="transaction-user-details  transaction-user-details-item">
                    <div class="grant-contribute-tabs">
                        <a>Grants (1)</a>
                        <a>Contributions (1890)</a>
                        <a>Exchange (0)</a>
                        <a>Other Transactions (0)</a>
                    </div>
                    <div class="gift-id-username-block">
                        <a>Gift ID: 4436109</a>
                        <p>Vanguard New Jersey Long-Term Tax-Exempt fund Admiral Shares.</p>
                    </div>
                    <div className="transaction-date-shares-block">
  	                    <div className="enter-date">
                            Entered date
                            <p  className="bold-date-share-amount">10/4/2019</p>
                        </div>
                        <div className="recieved-date">
                            Received date
                            <p className="bold-date-share-amount">10/4/2019</p>
                        </div>
                        <div className="number-of-shares">
                            Number of shares
                            <p  className="bold-date-share-amount">50</p>
                        </div>
                    </div>
                    <div className="mobile-transaction-date-shares-block">
                        <div className="mobile-enter-date">
                                Entered date
                                <p  className="bold-date-share-amount">10/4/2019</p>
                            </div>
                        <div className="mobile-recieved-date">
                            Received date
                            <p className="bold-date-share-amount">10/4/2019</p>
                        </div>
                    </div>
                    <div class="transaction-type-amount-block">
                        <div class="type">
                            Type
                            <p className="bold-date-share-amount">VBS Security</p>
                        </div>
                        <div className="amount">
                            Amount
                            <p  className="bold-date-share-amount">$50,000.00</p>
                        </div>
                        <div className="status">
                            Status
                            <p className="bold-date-share-amount">Entered</p>
                        </div>
                    </div>
                    <div class="mobile-transaction-date-shares-block">
                        <div class="mobile-type">
                            Type
                            <p className="bold-date-share-amount">VBS Security</p>
                        </div>
                        <div className="mobile-number-shares">
                            Number of shares
                            <p  className="bold-date-share-amount">50</p>
                        </div>
                    </div>
                    <div class="mobile-transaction-type-amount-block">
                        <div class="mobile-amount">
                            Amount
                            <p className="bold-date-share-amount">$50,000.00</p>
                        </div>
                        <div className="mobile-status">
                            Status
                            <p  className="bold-date-share-amount">Entered</p>
                        </div>
                    </div>
                    <div className="view-contribution"> VIEW CONTRIBUTION ACTIVITY <sub><HiArrowNarrowRight className="arrow-narrow-right"/></sub></div>
                </div>
                <div class="available-balance-card  available-balance-card-item">
                    <a> Available Balance <BsFillInfoCircleFill className="information-icon"/></a>
                    <a>$30,000</a>
                    <a id="transaction-summary">VIEW TRANSACTION SUMMARY<sub><HiArrowNarrowRight className="arrow-narrow-right"/></sub></a>
                </div>  
            </div>
            <div className="contribution-grant-exchange-account-button">
                <button className="contribution-button">CONTRIBUTION<sub><HiArrowNarrowRight className="arrow-narrow-right"/></sub></button>
                <button className="grant-button">GRANT <sub><HiArrowNarrowRight className="arrow-narrow-right"/></sub></button>
                <button className="exchange-button">EXCHANGE <sub><HiArrowNarrowRight className="arrow-narrow-right"/></sub></button>
                <button className="account-button">MANAGE YOUR ACCOUNT<sub><IoMdArrowDropdown className="arrow-narrow-right"/></sub></button>
            </div>
            <div className="slider">
                <AiOutlineLeftCircle className="left-circle-arrow"/>
                <div className="slider-content-feature-learnvalue">
                    <p>Featured</p>
                    <p className="slider-content-learnvalue-text">Learn how to value your contribution</p>
                    <p className="mobile-slider-lorem-text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.</p>
                    <p className="slider-content-learn-more  mobile-learn-more-text">Learn more <sub><HiArrowNarrowRight className="arrow-narrow-right"/></sub></p>
                </div>
                <div className="slider-content-lorem-learnmore">
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.</p>
                    <p className="slider-content-learn-more">Learn more <sub><HiArrowNarrowRight className="arrow-narrow-right"/></sub></p>
                </div>
                <AiOutlineRightCircle className="right-circle-arrow"/>
            </div>
        </div>
    )
}

export default VanguardBoxComponent;
