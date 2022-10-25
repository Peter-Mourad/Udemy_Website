import React, {useContext, useState} from "react";
import { CoursesContext } from "../../contexts/coursesContext";
import { useParams } from "react-router-dom";
import { MdOndemandVideo } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";
import { RiFolderDownloadLine } from "react-icons/ri";
import { IoIosInfinite } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

import "./sidebarStyle.css";

function SidebarContainer() {
    const { ID } = useParams();
    const id = parseInt(ID);
    const data = useContext(CoursesContext);
    
    const coursesData = data.summary["python_res"]["items"];
    let courseData;
    for (let course in coursesData) {
        if (coursesData[course]["id"] === id) {
            courseData = coursesData[course];
            break;
        }
    }

    const [fix, setFix] = useState();
    window.addEventListener('scroll', () => {
        (window.scrollY >= 320 ? setFix(true) : setFix(false));
    });

    return (
        <div className={(fix) ? "sidebar-container fix" : "sidebar-container unfix"}>
            <img src={courseData["image_480x270"]} alt="" className={!fix ? "show-img" : "hide-img"} />
            <h2>{(courseData["is_paid"] ? "E£679.99" : "E£0.0")}</h2>
            <button className="inverted-button">Add to Cart</button>
            <button>Buy now</button>
            <p className="description">30-Day Money-Back Guarantee</p>
            <div className="course-info">
                <h5>This course includes:</h5>
                <li>
                    <span><MdOndemandVideo className="test"/></span>
                    {courseData["content_info_short"]} hours on-demand video
                </li>
                <li>
                    <span><AiOutlineFile /></span>
                    1 article
                </li>
                <li>
                    <span><RiFolderDownloadLine /></span>
                    3 downloadable resources
                </li>
                <li>
                    <span><IoIosInfinite /></span>
                    Full lifetime access
                </li>
                <li>
                    <span><FaMobileAlt /></span>
                    Access on mobile and TV
                </li>
                <li>
                    <span><GiTrophyCup /></span>
                    Certificate of completion
                </li>
                <div className="options">
                    <button href="/">Share</button>
                    <button href="/">Gift this course</button>
                    <button href="/">Apply Coupon</button>
                </div>
            </div>
            <hr></hr>
            <div className="content-group">
                <h4>Training 5 or more people?</h4>
                <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
                <button>Try Udemy Business</button>
            </div>
        </div>
    );
}

export default SidebarContainer;