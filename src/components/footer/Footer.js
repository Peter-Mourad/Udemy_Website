import React from "react";

import "./footerStyle.css";

function Footer() {
    return (
        <div className="footer-section">
            <div className="partners-section">
                <div className="partners-section-intro">
                    <span>Top companies choose </span>
                    <a href="https://www.udemy.com/udemy-business/?locale=en_US&path=request-demo-mx%2F&ref=footer-ad">
                        Udemy Business 
                    </a>
                    <span>to build in-demand career skills. </span>
                </div>
                <div className="partners-logos">
                    <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="nasdaq"></img>
                    <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="volkswagen"></img>
                    <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="box"></img>
                    <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="netapp"></img>
                    <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="eventbrite"></img>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Footer;