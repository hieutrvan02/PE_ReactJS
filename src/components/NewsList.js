import React from "react";
import News from "./News";
import { NEWS } from "../shared/news";

const NewsList = () => {
    const filterNews = NEWS.filter(news => news.status === true);
    return (
        <div className="d-flex row col-3">
            {filterNews.map(news => (
                <News
                    name={news.name}
                />
            ))}
        </div>
    );
};

export default NewsList;