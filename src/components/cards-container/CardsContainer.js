import React from "react"
import Card from "../card/Card";
import "../courses-section/coursesSectionStyle.css";

function CardsContainer({data}) {
    return (
        <div className="courses-div">
            <div className="courses-intro">
                <h2>Expand your career opportunities with Python</h2>
                <p>Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple
                    syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to
                    build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and
                    advanced developers alike.
                </p>
            </div>
            <div className="carousel-container">
                <div className="carousel-inner">
                    <Card data={data}></Card>
                </div>
            </div>
        </div>
    )
}

export default CardsContainer;
