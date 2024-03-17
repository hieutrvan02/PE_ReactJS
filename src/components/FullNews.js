import React from "react";

const FullNews = ({ id, name, image, description, date }) => {

    return (
        <div className="news card">
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">{description}</p>
                <p className="card-text">Date: {date}</p>
                <button className='mr-3'>Xem chi tiết</button>
            </div>
        </div>
    );
};

export default FullNews;