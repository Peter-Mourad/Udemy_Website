import React, { useContext } from "react";

import Rate from "../Rate";

import { CoursesContext } from "../../contexts/coursesContext";

function Card({searchText}) {
    const json = useContext(CoursesContext);
    const coursesData = json.summary["python_res"]["items"];

    const fill = (course) => {
        if (searchText && course.title.toLowerCase().includes(searchText.toLowerCase())) {
            return (
                <div className="card-container">
                    <div className="course-item">
                        <a href={`/course/${course.id}`}>
                            <img src={course.image_480x270} alt=""></img>
                            <p><strong>{course.title}</strong></p>
                            <Rate rate={course.rating} showRate={1} />
                            <p className="price">E£$699</p>
                        </a>
                    </div>
                </div>
            );
        }
    };
    return <div className="courses-list Python"> {coursesData.map(fill)} </div>;
}

export default Card;