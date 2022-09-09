import React from "react";
import RateHtmlFormatting from "../../RateFormatting";

const coursesData = require('../../db.json').courses_data.python_res.items;

function Card() {

    const fill = (course) => {
        return (
            <div className="card-container">
                <div className="course-item">
                    <a href={`/course/${course.id}`}>
                        <img src={course.image_125_H} alt=""></img>
                        <p><strong>{course.title}</strong></p>
                        <div className="rate-section"
                            dangerouslySetInnerHTML={{ __html: RateHtmlFormatting(course.rating) }}
                        >
                        </div>
                        <p className="price">E£$699</p>
                    </a>
                </div>
            </div>
        );
    };
    return <div className="courses-list Python">{coursesData.map(fill)}</div>;
}

export default Card;

