import React from "react";

function Requirements({ requirements }) {
    return (
        <div className="requirments-section">
            <h2>Requirements</h2>
            <div className="requirments">
                {requirements.map((requirement) => {
                    return <li> {requirement} </li>;
                })}
            </div>
        </div>
    );
}

export default Requirements;