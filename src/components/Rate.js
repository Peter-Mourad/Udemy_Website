import React from "react";
import "../globalStyle.css";

const Rate = ({ rate , showRate}) => {
    const stars = [0, 0, 0, 0, 0];
    for (let i = 0; i < 5 && rate > i; i++){
        (rate >= (i + 1)) ? stars[i] = 1 : stars[i] = 0.5;
    }

    const fill = (star) => {
        return <i className={star===1 ? "fa fa-star" : (star ? "fa fa-star-half-full" : "fa fa-star-o")} />
    }
    
    return (
        <div className="rate-section">
            {(showRate ? <span className="rate"><strong>{Math.round(rate * 10) / 10}</strong></span> : '')}
            {stars.map(fill)}
        </div>
    );
}

export default Rate;