import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import CourseContent from "./CourseContent";
import Requirements from "./Requirments";
import Description from "./Description";
import Instructors from "./Instructors";
import Reviews from "./Reviews";

import { CoursesContext } from "../../contexts/coursesContext";

import "./singleCourseBody.css";

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

                <Instructors instructors={courseData["visible_instructors"]} />

                <Reviews reviews={ courseReviews }/>

                <div className="report-abuse">
                    <button>Report abuse</button>
                </div>
            </div>
        </>
    );
}

export default SingleCourseBody;