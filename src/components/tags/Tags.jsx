import React from 'react';
import "./Tags.scss"

function Tag(props) {
    return (
        <div className="tag">
            <p className="tag-content">{props.content}</p>
        </div>
    )



}

export default Tag