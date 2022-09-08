import React from "react"
import Card from "../card/Card";
import "../courses-section/coursesSectionStyle.css";

const coursesData = require('../../db.json').courses_data.python_res;

function CardsContainer() {
    return (
        <div className="courses-div">
            <div className="courses-intro">
                <h2> { coursesData.header } </h2>
                <p> {coursesData.description} </p>
            </div>
            <div className="carousel-container">
                <div className="carousel-inner">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default CardsContainer;
