import React, {FC} from "react";
import {ArticleProps} from "../../../api/types";
import {AuthorCircleForArticleCard} from "./AuthorCircleForArticleCard";

interface ArticleInCardProps {
 article: ArticleProps;
}

export const ArticleCard:FC<ArticleInCardProps> = ({article}) => {

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date (article.attributes.published_date);
    const secondDate = new Date();

    const ApiUrl = "http://192.168.0.27:1337";

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    return <div className="flex h-48 w-1/2 mb-6 border border-gray-200 shadow-md lighy:border-gray-700 bg-white">
        <div className='w-2/5 overflow-hidden flex items-center'>
            <img className="scale-[1.75] overflow-hidden" src={ApiUrl + article.attributes.article_image.data.attributes.url}/>
        </div>
        <div
            className="p-4 w-3/5 flex flex-col">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900"><a>{article.attributes.title}</a></h3>
            <p className="mb-5 text-sm font-light dark:text-gray-400">{article.attributes.content.slice(0, 100)  + "..."}</p>
            <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center">
                    <AuthorCircleForArticleCard user={article.attributes.user.data.attributes}/>
                    <div>
                        <h6 className="text-sm">
                            {article.attributes.user.data.attributes.first_name + " " + article.attributes.user.data.attributes.last_name }
                        </h6>
                        <h6 className="text-sm">
                            {diffDays + " dana staro"}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};