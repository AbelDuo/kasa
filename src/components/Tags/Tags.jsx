import React from "react"; 
import "../Tags/Tags.scss";   


const Tags =  ({tags}) => {
    return (
        <div className = "labelTags">
            {tags.map((tag,tagIndex) =>(
                <p key={tagIndex} className="tag">
                    {tag}
                </p>
            ))}
        </div>
    );
};

export default Tags;