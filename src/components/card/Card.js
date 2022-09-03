import React from "react";

function RateHtmlFormatting(rate){
    let html = `<span className="rate"><strong>${rate}</strong></span>\n`;
    for (let i = 0; i < 5; i++, rate--){
        if (rate >= 1) 
            html += `\t\t\t\t\t\t\t<i className=fa fa-star"></i>\n`;
        else if (rate > 0) 
            html += `\t\t\t\t\t\t\t<i className="fa fa-star-half-full"></i>\n`;
        else
            html += `\t\t\t\t\t\t\t<i className="fa fa-star-o"></i>\n`;
    }
    return html;
}

function Card({ data }) {
    const fill = (course) => {
        return (
            <div className="card-container">
                <div className="course-item">
                    <a href={course.link}>
                        <img src={course.image} alt=""></img>
                        <i class="fa-solid fa-star"></i>
                        <p><strong>{course.title}</strong></p>
                        <p className="author">{course.author}</p>
                        <div class="rate-section">
                            {RateHtmlFormatting(course.rate)}
                        </div>
                        <p className="price">E£${course.price}</p>
                    </a>
                </div>
            </div>
        );
    };
    return <div className="courses-list Python">{data.map(fill)}</div>;
}

export default Card;

