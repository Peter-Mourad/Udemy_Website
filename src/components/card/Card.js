import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import PopoverCard from "../popover/PopoverCard";
import Rate from "../Rate";

function Card({ course, id }) {
    let key = 0;
    const popover = (props) => (
        <Popover {...props}>
            <PopoverCard key={key++} summary={course} />
        </Popover>
    );
    return (
        <OverlayTrigger
            className="tippycard"
            overlay={popover}
            placement="top-end"
            trigger={["hover", "hover"]}
        >
            <div className="card-container">
                <div className="course-item">
                    <a href={`/course/${course.id}`}>
                        <img src={course.image_480x270} alt="course pic"></img>
                        <p><strong>{course.title}</strong></p>
                        <Rate key={ id } rate={course.rating} showRate={1} />
                        <p className="price">E£$699</p>
                    </a>
                </div>
            </div>
        </OverlayTrigger>
    );
}

export default Card;