import React from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/material/Icon";

import "./singleCourseBody.css";

const coursesData = require('../../db.json');

const url = window.location.pathname;


function SingleCourseBody() {
    const reviews = coursesData.reviews;
    const data = coursesData.courses_data.python_res.items;
    // console.log(data);
    // console.log(reviews);

    let { ID } = useParams();
    console.log(ID);
    //todo: get reviews and data of this course id
    console.log(reviews[ID]);

    return (
        <>
            <Link to={url} />
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

                <div className="course-content">
                    <h2>Course content</h2>
                    <span>15 sections</span>
                    <span>• 146 lectures</span>
                    <span>• 14h 42m total length</span>
                    <div className="content-container">
                        <Accordion className="accordion-container">
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="accordion-summary">UP and running with python</span>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-details-section">
                                <ul className="accordion-details-list">
                                    <i className="fa-solid fa-circle-play"></i>
                                    <li> variables sgd</li>
                                    <li> variables WETGWG</li>
                                    <li> variablesas weG SG</li>
                                    <li> variables asdgs WASefgsg</li>
                                    <li> variables awsft</li>
                                    <li> variables asdgsdg</li>
                                    <li> variables SG</li>
                                    <li> variables WG</li>
                                    <li> variables W GR WF QWGDUY</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordion-container">
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="accordion-summary">UP and running with python</span>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-details-section">
                                <ul className="accordion-details-list">
                                    <i className="fa-solid fa-circle-play"></i>
                                    <li> variables sgd</li>
                                    <li> variables WETGWG</li>
                                    <li> variablesas weG SG</li>
                                    <li> variables asdgs WASefgsg</li>
                                    <li> variables awsft</li>
                                    <li> variables asdgsdg</li>
                                    <li> variables SG</li>
                                    <li> variables WG</li>
                                    <li> variables W GR WF QWGDUY</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="accordion-container">
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <span className="accordion-summary">UP and running with python</span>
                            </AccordionSummary>
                            <AccordionDetails className="accordion-details-section">
                                <ul className="accordion-details-list">
                                    <i className="fa-solid fa-circle-play"></i>
                                    <li> variables sgd</li>
                                    <li> variables WETGWG</li>
                                    <li> variablesas weG SG</li>
                                    <li> variables asdgs WASefgsg</li>
                                    <li> variables awsft</li>
                                    <li> variables asdgsdg</li>
                                    <li> variables SG</li>
                                    <li> variables WG</li>
                                    <li> variables W GR WF QWGDUY</li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleCourseBody;