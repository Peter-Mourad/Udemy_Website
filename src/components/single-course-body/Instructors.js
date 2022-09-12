import React from "react";
import { useParams } from "react-router-dom";

function Instructors({ instructors }) {
    const { ID } = useParams();
    
    const fill = (instructor) => {
        return (
            <div className="instructor-container">
                <a href={ID}>{instructor["display_name"]}</a>
                <p>{instructor["job_title"]}</p>
                <div className="instructor-personal-data">
                    <img src={instructor["image_100x100"]} alt="instructor pic" />
                    <div className="achievments-data">
                        <div>{instructor["rating"]} Instructor Rating</div>
                        <div>{instructor["reviews"]} Reviews</div>
                        <div>{instructor["students"]} Students</div>
                        <div>{instructor["courses"]} Courses</div>
                    </div>
                </div>
                <div className="instructor-description">
                    <p>{ instructor["description"]}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="instructors-section">
            <h2>Instructors</h2>
            <div className="instructors-container">
                { instructors.map(fill) }
            </div>  
        </div>
    );
}

export default Instructors;