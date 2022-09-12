import React from "react";
import { GrLanguage } from "react-icons/gr";

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
            <div className="footer-main-section">
                <div className="footer-links-container">
                    <div>
                        <a href="https://www.udemy.com/udemy-business/?locale=en_US&mx_pg=clp-pythonforbeginners&path=%2F&ref=footer">Udemy Business</a>
                    </div>
                    <div>
                        <a href="https://about.udemy.com/careers?locale=en-us">Careers</a>
                        </div>
                    <div>
                        <a href="https://www.udemy.com/terms/">Terms</a>
                        </div>
                    <div>
                        <a href="https://www.udemy.com/teaching/?ref=teach_footer">Teach on Udemy</a>
                        </div>
                    <div>
                        <a href="https://blog.udemy.com/?ref=footer">Blog</a>
                        </div>
                    <div>
                        <a href="https://www.udemy.com/terms/privacy/">Privacy Policy</a>
                        </div>
                    <div>
                        <a href="https://www.udemy.com/mobile/">Get the app</a>
                        </div>
                    <div>
                        <a href="https://www.udemy.com/support/">Help and Support</a>
                        </div>
                    <div>
                        <a href="https://www.udemy.com/support/">Cookie Settings</a>
                        </div>
                    <div>
                        <a href="https://about.udemy.com/?locale=en-us">About us</a>
                        </div>
                    <div>
                        <a href="https://www.udemy.com/affiliate/">Affiliate</a>
                        </div>
                    <div>
                        <a href="https://www.udemy.com/sitemap/">Sitemap</a>
                        </div>
                    <div>
                        <a href="https://about.udemy.com/company?locale=en-us#offices">Contact us</a>
                        </div>
                    <div>
                        <a href="https://investors.udemy.com/">Investors</a>
                        </div>
                    <div>
                        <a href="https://about.udemy.com/accessibility-statement?locale=en-us">Accessibility statement</a>
                    </div>
                </div>
                <div className="language-button">
                    <button>
                        <GrLanguage className="language-icon"/>
                        <span>English</span>
                    </button>
                </div>
            </div>
            <div className="logo-and-copyright">
                <div>
                    <button>
                        <a href="/">
                            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="udemy logo" />
                        </a>
                    </button>
                </div>
                <div className="copyright-div">© 2022 Udemy, Inc.</div>
            </div>
        </div>
    );
}

export default Footer;