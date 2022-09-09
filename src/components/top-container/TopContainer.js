import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../../contexts/coursesContext";
import RateHtmlFormatting from "../../RateFormatting";

import "./topContainer.css";

function TopContainer() {
    const { ID } = useParams();
    const id = parseInt(ID);
    const data = useContext(CoursesContext);
    const coursesData = data.coursesData["python_res"]["items"];
    let courseData;
    for (let course in coursesData) {
        if (coursesData[course]["id"] === id) {
            courseData = coursesData[course];
            break;
        }
    }

    return (
        <div className="top-container">
            <div className="topic-menu">
                <a href="https://www.udemy.com/courses/development/">Development </a>
                <a href="https://www.udemy.com/courses/development/programming-languages/">programming Languages </a>
                <a href="https://www.udemy.com/topic/python/"> Python</a>
            </div>
            <div className="header">
                <h1>{ courseData.title }</h1>
                <p>{ courseData.headline }</p>
                <span className="inline">
                    <a className="rate-section" href="https://www.udemy.com/course/pythonforbeginners/#reviews" target={"blank"}>
                        <span dangerouslySetInnerHTML={{ __html: RateHtmlFormatting(courseData.rating) }} />
                        <span>(3,201 ratings)</span>
                    </a>
                    <span>19,442 students</span>
                </span>
                {/* todo: add instructors and last_update_date */}
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
