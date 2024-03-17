import React from "react";

const News = ({ id, name, image, description, date }) => {
    return (
        <div className="news card">
            <div className="card-body">
                <p className="card-title">{name}</p>
            </div>
        </div>
    );
};

export default News;