import React, {FC} from "react";
import useSWR from "swr";
import {getArticlesFetcher} from "../../../api/api";
import {ArticleCard} from "../arts/ArticleCard";
import {MovementDogAndSocialIconsHeader} from "../MovementDogAndSocialIconsHeader";


export const LiteratureIndexPage:FC = () => {

    const { data } = useSWR("/articles?filters[article_type][$eq]=literature&populate=*" , getArticlesFetcher);

    return <div className="container px-72 pt-4">
        <MovementDogAndSocialIconsHeader />
        <div className="flex items-center w-full mt-6">
            <button className="flex justify-end w-full">HRONOLOŠKI</button>
            <div className="left-1/2 -ml-0.5 w-1 h-4 bg-gray-600 ml-5 mr-5"></div>
            <button className="flex w-full">POPULARNO</button>
        </div>
        <h1 className="mt-6">Izdvajamo</h1>
        <hr className="mb-6" />
        <div className="flex flex-wrap">
        {data?.map(article => <ArticleCard article={article} key={article.id} />)}
        </div>
    </div>;
};