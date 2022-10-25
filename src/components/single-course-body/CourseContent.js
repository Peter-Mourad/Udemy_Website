import React from "react";

import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/material/Icon";
import { BsPlayCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

import "./singleCourseBody.css";

const CourseContent = ({ courseContent, lectures, totalLength }) => {
    const fill = (item) => {
        return (
            <Accordion className="accordion-container">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <IoIosArrowDown />
                    <span className="accordion-summary">
                        {item.title}
                    </span>
                </AccordionSummary>
                <AccordionDetails className="accordion-details-section">
                    <ul className="accordion-details-list">
                        {
                            item.items.map((content) => {
                                return (
                                    <li>
                                        <span><BsPlayCircleFill /></span>
                                        {content.title}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </AccordionDetails>
            </Accordion>
        );
    };

    return (
        <div className="course-content">
            <h2>Course content</h2>
            <span>15 sections</span>
            <span>• {lectures} lectures</span>
            <span>• {totalLength}</span>
            <div className="content-container">
                {courseContent.map(fill)}
            </div>
        </div>
    );
}

export default CourseContent;