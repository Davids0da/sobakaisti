import React, {FC} from "react";
import {ArticleProps} from "../../api/types";

interface ArticleInCardProps {
 article: ArticleProps;
}

export const ArticleInCard:FC<ArticleInCardProps> = ({article}) => {
    return <div className="border-2 p-4 border-black mb-4">
        <h1>{article.attributes.title}</h1>
        <p>{article.attributes.content}</p>
        <p>{article.attributes.createdAt}</p>
    </div>;
};