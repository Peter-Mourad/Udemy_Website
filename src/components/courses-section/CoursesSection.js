import React from "react";

import "./coursesSectionStyle.css";
import CardsContainer from "../cards-container/CardsContainer";

const CoursesSection = () => {
    return (
        <div className="courses-section">
            <h1>A broad selection of courses</h1>
            <p>Choose from 185,000 online video courses with new additions published every month</p>
            <ul className="nav nav-tabs">
                <li className="nav-item active" data-cont=".Python">
                    <a className="nav-link" href="/">Python</a>
                </li>
                <li className="nav-item" data-cont=".Excel">
                    <a className="nav-link" href="/">Excel</a>
                </li>
                <li className="nav-item" data-cont=".Web_Development">
                    <a className="nav-link" href="/">Web Development</a>
                </li>
                <li className="nav-item" data-cont=".JavaScript">
                    <a className="nav-link" href="/">javaScript</a>
                </li>
                <li className="nav-item" data-cont=".Data_Science">
                    <a className="nav-link" href="/">Data Science</a>
                </li>
                <li className="nav-item" data-cont=".AWS_Certification">
                    <a className="nav-link" href="/">AWS Certification</a>
                </li>
                <li className="nav-item" data-cont=".Drawing">
                    <a className="nav-link" href="/">Drawing</a>
                </li>
            </ul>
            <CardsContainer/>
        </div>
    );
}

export default CoursesSection;