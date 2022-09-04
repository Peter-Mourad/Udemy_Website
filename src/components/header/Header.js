import React from "react";

import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="intro">
                <h2>New to Udemy? Lucky you.</h2>
                <p>Courses start at E£169.99. Get your new student offer before it expires.</p>
            </div>
            <img src="https://img-b.udemycdn.com/notices/web_banner/slide_1_image_udlite/b8f46419-eca3-44c1-8ba0-ed2ca89f8884.jpg" alt="header"></img>
        </div>  
    );
};

export default Header;