import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { CoursesContext } from "../../contexts/coursesContext";
import Rate from "../Rate";

import "./topContainer.css";

function TopContainer() {
    const { ID } = useParams();
    const id = parseInt(ID);
    const data = useContext(CoursesContext);
    const coursesData = data.summary["python_res"]["items"];
    let courseData;
    for (let course in coursesData) {
        if (coursesData[course]["id"] === id) {
            courseData = coursesData[course];
            break;
        }
    }

    const fill = (isntructor) => {
        return (
            <a href="https://www.udemy.com/course/pythonforbeginners/#instructor-1">{isntructor.display_name}</a>
        );
    }

    return (
        <div className="top-container-body">
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
                            <span >
                                <Rate rate={courseData.rating} showRate={1} />
                            </span>
                            <span>(3,201 ratings)</span>
                        </a>
                        <span>19,442 students</span>
                    </span>              
                    <span className="inline">
                        <span>Created by</span>
                        <span>
                            {courseData.visible_instructors.map(fill)}                
                        </span>
                    </span>
                    <span className="inline">
                        <span>
                            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
                            <span>Last updated { courseData.last_update_date.substring(5,7)} / { courseData.last_update_date.substring(0,4)}</span>
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
        </div>
    );
}

export default TopContainer;
