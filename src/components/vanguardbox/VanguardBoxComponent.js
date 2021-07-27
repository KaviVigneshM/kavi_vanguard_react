import '../vanguardbox/VanguardBox.css';
import {BsFillInfoCircleFill } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineLeftCircle,AiOutlineRightCircle } from "react-icons/ai";


function VanguardBoxComponent() {
    const sty={fontSize:15,color:"black"}
    const styl={fontSize:15,color:"#006778"}
    const col={color:"#a8b400"}
    return (
        <div className="vanguard-box">
        <div class="grid-container">
            <div class="grid-item item1">
               <a style={sty}> Current Balance <sub><BsFillInfoCircleFill style={styl}/></sub></a>
               <a style={col}>$120,000</a>
            </div>
            <div class="grid-item2 item2">
                <div class="demo">
                        <a>Grants</a>
                        <a>Contributions (1890)</a>
                        <a>Exchange</a>
                        <a>Other Transactions</a>
                </div>
                <div class="link-head">
                    <a>Gift ID: 4436109</a>
                    <p>Vanguard New Jersey Long-Term Tax-Exempt fund Admiral Shares.</p>
                    <p>Username: <span id="user-name">John Doe</span></p>
                </div>
                <div className="coldiv">
  	                <div className="coldiv1">
                        Entered date
                        <p  className="bold">10/4/2019</p>
                    </div>
                    <div className="coldiv2">
                        Received date
                        <p className="bold">10/4/2019</p>
                    </div>
                    <div className="coldiv3">
                        Number of shares
                        <p  className="bold">50</p>
                    </div>
                </div>
                <div className="mob-coldiv">
  	                <div className="mob-coldiv1">
                        Entered date
                        <p  className="bold">10/4/2019</p>
                    </div>
                    <div className="mob-coldiv2">
                        Received date
                        <p className="bold">10/4/2019</p>
                    </div>
                </div>
                <div class="coldiv-2">
                    <div class="coldiv1">
                        Type
                        <p className="bold">VBS Security</p>
                    </div>
                    <div className="coldiv2">
                        Amount
                        <p  className="bold">$50,000.00</p>
                    </div>
                    <div className="coldiv3-2">
                        Status
                        <p className="bold">Entered</p>
                    </div>
                </div>
                <div class="mob-coldiv-2">
                    <div class="mob-coldiv1">
                        Type
                        <p className="bold">VBS Security</p>
                    </div>
                    <div className="mob-coldiv2">
                        Number of shares
                        <p  className="bold">50</p>
                    </div>
                </div>
                <div class="mob-coldiv-2">
                    <div class="mob-coldiv1">
                        Amount
                        <p className="bold">$50,000.00</p>
                    </div>
                    <div className="mob-coldiv2-sta">
                        Status
                        <p  className="bold">Entered</p>
                    </div>
                </div>
                <div className="view-cont"> VIEW CONTRIBUTION ACTIVITY <sub><HiArrowNarrowRight className="ryt-arw"/></sub></div>
            </div>
  
            <div class="grid-item item3">
            <a style={sty}> Available Balnce <sub><BsFillInfoCircleFill style={styl}/></sub></a>
               <a style={col}>$30,000</a>
               <a id="trans" style={styl}>VIEW TRANSACTION SUMMARY<sub><HiArrowNarrowRight className="ryt-arw"/></sub></a>
            </div>  
        </div>
        <div className="four-btn">
            <button className="contri-btn">CONTRIBUTION<sub><HiArrowNarrowRight className="ryt-arw"/></sub></button>
            <button className="grant-btn">GRANT <sub><HiArrowNarrowRight className="ryt-arw"/></sub></button>
            <button className="excha-btn">EXCHANGE <sub><HiArrowNarrowRight className="ryt-arw"/></sub></button>
            <button className="accnts-btn">MANAGE YOUR ACCOUNT<sub><IoMdArrowDropdown className="ryt-arw"/></sub></button>
        </div>
        <div className="slider">
            <AiOutlineLeftCircle className="left-arw"/>
            <div className="slider-content">
            <p>Featured</p>
            <p className="slider-content-para">Learn how to value your contribution</p>
            <p className="mob-slider-para">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.</p>
            <p className="slider-content-para2 mob-learn">Learn more <sub><HiArrowNarrowRight className="ryt-arw"/></sub></p>
            </div>
            <div className="slider-content2">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.</p>
            <p className="slider-content-para2">Learn more <sub><HiArrowNarrowRight className="ryt-arw"/></sub></p>
            </div>
            <AiOutlineRightCircle className="right-arw"/>
        </div>
        </div>
    )
}

export default VanguardBoxComponent;
