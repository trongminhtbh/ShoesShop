import React, { Fragment } from "react";


function BranchTitle({name}) {
    return (
        <div className="title-branch d-flex row">
            <div className="title-branch-header col-1">
                <h3>{name}</h3> 
            </div>
            <div className="line"></div>
        </div>
    )
}

export default BranchTitle