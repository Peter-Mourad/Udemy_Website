import React from "react";

import "./topContainer.css";

function TopContainer() {
    return (
        <div className="top-container">
            <div className="topic-menu">
                <a href="https://www.udemy.com/courses/development/">Development </a>
                <a href="https://www.udemy.com/courses/development/programming-languages/">programming Languages </a>
                <a href="https://www.udemy.com/topic/python/"> Python</a>
            </div>
            <div className="header">
                <h1>Learn Python: The Complete Python Programming Course</h1>
                <p>Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</p>
                <span className="inline">
                    <a className="rate-section" href="https://www.udemy.com/course/pythonforbeginners/#reviews" target={"blank"}>
                        <span className="rate">4.4</span>
                        <span>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-full" />
                        </span>
                        <span>(3,201 ratings)</span>
                    </a>
                    <span>19,442 students</span>
                </span>
                <span className="inline">
                    <span>Created by</span>
                    <a href="https://www.udemy.com/course/pythonforbeginners/#instructor-1">Avinash Jain, </a>
                    <a href="https://www.udemy.com/course/pythonforbeginners/#instructor-2">The Codex</a>
                </span>
                <span className="inline">
                    <span>
                        <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                        <span>Last updated 9/2015</span>
                    </span>
                    <span>
                        <i className="fa fa-globe" aria-hidden="true"></i>
                        <span>English</span>
                    </span>
                    <span>
                        <i className="fa fa-cc" aria-hidden="true"></i>
                        <span>English</span>
                    </span>
                </span>
            </div>
        </div>
    );
}

export default TopContainer;
