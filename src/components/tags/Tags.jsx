import React from 'react';
import "./Tags.scss"

function Tag(props) {
    return (
        <div className="tag">
            <div className="tag-content">{props.content}</div>
        </div>
    )
}

export default Tag