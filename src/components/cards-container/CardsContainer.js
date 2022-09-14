import React, { useContext } from "react";

import Card from "../card/Card";

import { CoursesContext } from "../../contexts/coursesContext";

import "../courses-section/coursesSectionStyle.css";

function CardsContainer({ searchText }) {
    const json = useContext(CoursesContext);
    const coursesData = json.summary.python_res;

    return (
        <div className="courses-div">
            <div className="courses-intro">
                <h2> {coursesData.header} </h2>
                <p> {coursesData.description} </p>
            </div>
            <div className="carousel-container">
                <div className="carousel-inner">
                    <Card searchText={searchText} />
                </div>
            </div>
        </div>
    );
}

export default CardsContainer;
