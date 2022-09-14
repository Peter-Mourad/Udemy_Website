import React from "react";

import "./PopoverCard.css";

function PopoverCard({ summary }) {
    return (
        <div className="course-Popover">
          <h2>{summary.title}</h2>
          <p>{`Update ${summary.last_update_date}`}</p>
          <p>
            <span>{`${summary.content_info} . `}</span>
            <span>{`${summary.instructional_level} . Subtitle`}</span>
          </p>
          <p>{summary.headline}</p>
          <div className="pop-buttons">
            <div className="course-objective">
              {
                summary.objectives_summary.map((el, i) => {
                return <p id={i}> &#10003; {el}</p>;
                })
              }
            </div>

            <button className="pop-add-cart">Add to cart</button>
            <button className="pop-fav">
              <i class="fa fa-heart-o" style={{ fontSize: "25px" }}></i>
            </button>
          </div>
        </div>
    );
}

export default PopoverCard;