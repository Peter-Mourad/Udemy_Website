import React from "react";
    
function RateHtmlFormatting(rate){
    let html = `<span class="rate"><strong>${Math.round(rate * 10) / 10}</strong></span>\n`;
    for (let i = 0; i < 5; i++, rate--){
        if (rate >= 1) 
            html += `\t\t\t\t\t\t\t<i class="fa fa-star"></i>\n`;
        else if (rate > 0) 
            html += `\t\t\t\t\t\t\t<i class="fa fa-star-half-full"></i>\n`;
        else
            html += `<i class="fa fa-star-o"></i>\n`;
    }
    return html;
}


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

