import React, { useContext, useState } from "react";

import CourseContent from "./CourseContent";
import Requirements from "./Requirments";
import Description from "./Description";

import { useParams } from "react-router-dom";
import RateHtmlFormatting from "../../RateFormatting";
import { CoursesContext } from "../../contexts/coursesContext";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

import "./singleCourseBody.css";

const reviewsHTMLFormatting = (courseReviews) => {
    let html = ``;
    for (const key in courseReviews) {
        let review = courseReviews[key];
        html += `<div class="review-container" id="${review["id"]}">\n`;
        
        // html for user-icon-container
        html += `\t<div class="user-icon container">\n`;
        const matches = review["user"]["title"].match(new RegExp(/\b(\w)/g));
        const userIconName = matches[0] + (matches.length > 1 ? matches[1] : '');
        html += `\t\t<button class="user-icon">
            ${userIconName}
        </button>\n`;
        html += `\t</div>\n`;

        // html for main review container
        html += `\t<div class="main-review-container">\n`;
        html += `<div>${review["user"]["title"]}</div>`;
        html += RateHtmlFormatting(review["rating"]);
        html += `<p>${review["content"]}</p>\n
        <p>Was this review helpful?</p>\n
        <button> <FaRegThumbsUp /> </button>\n
        <button> <FaRegThumbsDown /> </button>\n
        <a href=""> Report</a>\n`;
        html += `\t</div>\n`;

        html += `</div>\n`;
    }
    return html;
};

const instructorsHTMLFormatting = (instructors) => {
    let html = ``;
    for (let i = 0; i < instructors.length; i++) {
        html += `<div class="instructor-container">\n`;
        html += `<a>${instructors[i]["display_name"]}</a>\n
        <p>${ instructors[i]["job_title"]}</p>\n`;

        html += `<div class="instructor-personal-data">\n
            <img src="${instructors[i]["image_100x100"]}" alt="instructor image" />\n
            <div class="achievments-data">\n
                <div>${instructors[i]["rating"]} Instructor Rating</div>\n
                <div>${instructors[i]["reviews"]} Reviews</div>\n
                <div>${instructors[i]["students"]} Students</div>\n
                <div>${instructors[i]["courses"]} Courses</div>\n
            </div>\n
        </div>\n`;

        html += `<div class="instructor-description">\n
            <p>${ instructors[i]["description"]}</p>\n
        </div>\n`;
        html += `</div>\n`;
    }
    return html;
};

function SingleCourseBody() {
    const { ID } = useParams();

    // collecting courses data from the context
    const json = useContext(CoursesContext);

    const summary = json.summary["python_res"]["items"];
    let courseData;
    for (let course in summary) {
        if (summary[course]["id"] === parseInt(ID)) {
            courseData = summary[course];
            break;
        }
    }

    const coursesData = json.data;
    let data;
    for (let course in coursesData) {
        if (coursesData[course]["id"] === ID) {
            data = coursesData[course];
            break;
        }
    }

    const courseReviews = json.reviews[ID]["results"];

    // showMore buttons toggle functions
    // const [isReviewsShowMore, setReviewsShowMore] = useState(false);

    // const toggleReviewsButton = () => {
    //     setReviewsShowMore(!isReviewsShowMore);
    // };

    return (
        <>
            <div className="course-body">
                <div className="what-you-will-learn"> 
                    <h2>What you'll learn</h2>
                    <div className="list-items">
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>Create their own Python Programs</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>Become an experienced Python Programmer</span>
                        </li>
                        <li>
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span>Parse the Web and Create their own Games</span>
                        </li>
                    </div>
                </div>
                
                <CourseContent
                    courseContent={data.details.course_info}
                    lectures={courseData.num_published_lectures}
                    totalLength={courseData.content_info}
                />

                <Requirements requirements={data["details"]["Requirements"]} />

                <Description details={data.details} />

                <div className="instructors-section">
                    <h2>Instructors</h2>
                    <div className="instructors-container"
                        dangerouslySetInnerHTML={{ __html: instructorsHTMLFormatting(courseData["visible_instructors"])}}    
                    >
                    </div>
                </div>

                <div className="reviews-section">
                    <h2>Reviews</h2>
                    <div className="reviews-control-section">
                        <div className="reviews-search-bar">
                            <form>
                                <input type="text" placeholder="search reviews"></input>
                                <button type={"submit"}>
                                    search
                                </button>
                            </form>
                        </div>
                        <button> All ratings</button>
                    </div>
                    <div className="reviews-container"
                        dangerouslySetInnerHTML={{ __html: reviewsHTMLFormatting(courseReviews) }}
                    >
                    </div>
                </div>

                <div className="report-abuse">
                    <button>Report abuse</button>
                </div>
            </div>
        </>
    );
}

export default SingleCourseBody;