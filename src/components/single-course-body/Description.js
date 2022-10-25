import React, { useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "./singleCourseBody.css";

function Description({ details }) {
    const [isDescriptionShowMore, setDescriptionShowMore] = useState(false);
    const toggleDescriptionButton = () => {
        setDescriptionShowMore(!isDescriptionShowMore);
    };
    const lines = details.description.split(new RegExp(/\r?\n/));
    const showLessLines = lines.slice(0, 10);

    const fill = (line) => {
        return <p>{line}</p>
    };

    return (
        <div className="description-section">
            <div className="description-wrapper">
                <h2>Description</h2>
                {(isDescriptionShowMore ? lines.map(fill) : showLessLines.map(fill))}
                {
                    (isDescriptionShowMore ?
                    <div>
                        <h2>Who this course is for:</h2>
                        <p>{details["for_who"]}</p>
                    </div>
                    : ''
                )}
            </div>
            <button onClick={toggleDescriptionButton}>
                <span>{(isDescriptionShowMore) ? "Show less" : "Show more"}</span>
                {(isDescriptionShowMore) ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
        </div>
    );
}

export default Description;