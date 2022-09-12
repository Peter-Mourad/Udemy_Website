import React from "react";
import Rate from "../../components/Rate";
import { MdOutlineSearch } from "react-icons/md";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";

function Reviews({ reviews }) {
    const { ID } = useParams();
    
    const fill = (review) => {
        const matches = review["user"]["title"].match(new RegExp(/\b(\w)/g));
        const userIconName = matches[0] + (matches.length > 1 ? matches[1] : '');
        return (
            <div className="review-container" id={review["id"]}>
                <div className="user-icon container">
                    <button className="user-icon">
                        {userIconName}
                    </button>
                </div>
                <div className="main-review-container">
                    <div>{review["user"]["title"]}</div>
                    <Rate rate={review["rating"]} />
                    <p>{review["content"]}</p>
                    <p>Was this review helpful?</p>
                    <button> <FaRegThumbsUp /> </button>
                    <button> <FaRegThumbsDown /> </button>
                    <a href={ID}> Report</a>
                </div>
            </div>
        );
    };

    return (
        <div className="reviews-section">
            <h2>Reviews</h2>
            <div className="reviews-control-section">
                <div className="reviews-search-bar">
                    <form>
                        <input type="text" placeholder="search reviews"></input>
                        <button type={"submit"}>
                            <MdOutlineSearch />
                        </button>
                    </form>
                </div>
                <button>
                    <span>All ratings</span>
                    <span><IoIosArrowDown /></span>
                </button>
            </div>
            <div className="reviews-container">
                {reviews.map(fill)}
            </div>
        </div>
    );
}

export default Reviews;