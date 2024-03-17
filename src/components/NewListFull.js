import React from "react";
import { NEWS } from "../shared/news";
import FullNews from "./FullNews";

const NewsListFull = () => {
    const filterNews = NEWS.filter(news => news.status === true);
    return (
        <div className="d-flex">
            {filterNews.map(news => (
                <FullNews
                    key={news.id}
                    id={news.id}
                    name={news.name}
                    image={news.image}
                    description={news.description}
                    date={news.date}
                />
            ))}
        </div>
    );
};

export default NewsListFull;