import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/material/Icon";
import { CoursesContext } from "../../contexts/coursesContext";

import "./singleCourseBody.css";

const reviewsHTMLFormatting = (courseReviews) => {
    let html = ``;
    for (let review in courseReviews) {
        html += `<div class="review-container">\n`;
        

        html += `\t<div class="user-icon-container">\n`;
        const matches = courseReviews[review]["user"]["title"].match(new RegExp(/\b(\w)/g));
        const userIconName = matches[0] + (matches.length > 1 ? matches[1] : '');
        html += `\t\t<button class="user-icon">
            ${userIconName}
        </button>\n`;
        html += `\t</div>\n`;


        html += `\t<div class="main-review-container">\n`;
        html += `<span>${courseReviews[review]["user"]["title"]}</span>`;
        html += `\t</div>\n`;

        html += `</div>\n`;
    }
    return html;
}

function SingleCourseBody() {
    const { ID } = useParams();
    const id = parseInt(ID);

    const data = useContext(CoursesContext);

    const coursesData = data.coursesData["python_res"]["items"];
    let courseData;
    for (let course in coursesData) {
        if (coursesData[course]["id"] === id) {
            courseData = coursesData[course];
            break;
        }
    }

    const courseReviews = data.reviews[ID]["results"];
    reviewsHTMLFormatting(courseReviews)
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
                
                <div className="course-content">
                    <h2>Course content</h2>
                    <span>15 sections</span>
                    <span>• { courseData.num_published_lectures } lectures</span>
                    <span>• { courseData.content_info }</span>
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

                <div className="requirments-section">
                    <h2>Requirements</h2>
                    <div className="requirments">
                        <div>• Macintosh (OSX)/ Windows(Vista and higher) Machine</div>
                        <div>• Internet connection</div>
                    </div>
                </div>

                <div className="description-section">
                    <h2>Description</h2>
                    <p><strong>Do you want to become a programmer? Do you want to learn how to create games, automate your browser, visualize data, and much more? </strong></p>
                    <p>If you’re looking to learn Python for the very <strong>first time</strong> or need a <strong>quick brush-up</strong>, this is the course for you! </p>
                    <p>Python has rapidly become one of the <strong>most popular programming languages </strong>around the world. Compared to other languages such as Java or C++, Python consistently outranks and outperforms these languages in demand from businesses and job availability. The average Python developer makes <strong>over $100,000 </strong>- this number is only going to grow in the coming years.</p>
                    <p>The best part? Python is one of the <strong>easiest coding languages </strong>to learn right now. It doesn’t matter if you have no programming experience or are unfamiliar with the syntax of Python. By the time you finish this course, you'll be an <strong>absolute pro</strong> at programming!</p>
                    <p>This course will cover <strong>all the basics</strong> and <strong>several advanced concepts</strong> of Python. We’ll go over:</p>
                    <ul>
                        <li>
                            <p>The fundamentals of Python programming</p>
                        </li>
                        <li>
                            <p>Writing and Reading to Files</p>
                        </li>
                        <li>
                            <p>Automation of Word and Excel Files</p>
                        </li>
                        <li>
                            <p>Web scraping with BeautifulSoup4</p>
                        </li>
                        <li>
                            <p>Browser automation with Selenium</p>
                        </li>
                        <li>
                            <p>Data Analysis and Visualization with MatPlotLib</p>
                        </li>
                        <li>
                            <p>Regex parsing and Task Management</p>
                        </li>
                        <li>
                            <p>GUI and Gaming with Tkinter</p>
                        </li>
                        <li>
                            <p>And much more!</p>
                        </li>
                    </ul>
                    <p>If you read the above list and are feeling a bit confused, don’t worry! As an instructor and student on Udemy for <strong>almost 4 years,</strong> I know what it’s like to be overwhelmed with boring and mundane. I promise you’ll have a blast learning the ins and outs of python. I’ve successfully taught over<strong> 200,000+ students </strong>from over<strong> 200 countries</strong> jumpstart their programming journeys through my courses. </p>
                    <p>Here’s what some of my students have to say:</p>
                    <ul>
                        <li>
                            <p>“I wish I started programming at a younger age like Avi. &nbsp;This Python course was excellent for those that cringe at the thought of starting over from scratch with attempts to write programs once again. Python is a great building language for any beginner programmer. Thank you Avi!”</p>
                            <p><br /></p>
                        </li>
                        <li>
                            <p>“I had no idea about any programming language. With Avi's lectures, I'm now aware of several python concepts and I'm beginning to write my own programs. Avi is crisp and clear in his lectures and it is easy to catch the concepts and the depth of it through his explanations. Thanks, Avi for the wonderful course, You're awesome! It's helping me a lot :)”</p>
                            <p><br /></p>
                        </li>
                        <li>
                            <p>"Videos are short and concise and well-defined in their title, this makes them easy to refer back to when a refresher is needed. Explanations aren't convoluted with complicated examples, which adds to the quick pace of the videos. I am very pleased with the decision to enroll in this course. Not only has it increased the pace I'm learning Python but I actively look forward to continuing the course, whenever I get the chance. Avi is friendly and energetic, absolutely delightful as an instructor.”</p>
                        </li>
                    </ul>
                    <p>So what are you waiting for? <strong>Jumpstart your programming journey</strong> and dive into the world of Python by<strong> enrolling in this course today!</strong></p>
                    <h2 class="udlite-heading-xl styles--audience__title--1Sob_">Who this course is for:</h2>
                    <ul>
                        <li>Even if you haven't touched coding before, it won't matter. The easy step-to-step lectures will quickly guide you through everything you'll need to know about coding, mainly Python. This course is here for you to get accustomed and familiar with  Python and its syntax. And above all, Python is one of the easiest coding languages to learn, and there's a lot you can do with it.</li>
                    </ul>
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
            </div>
        </>
    );
}

export default SingleCourseBody;