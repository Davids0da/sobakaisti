import React, {FC} from "react";
import useSWR from "swr";
import {getArticlesFetcher} from "../../../api/api";
import {ArticleInCard} from "../ArticleInCard";

export const Manifesto:FC = () => {
    const { data } = useSWR("/articles?filters[article_type][$eq]=manifesto&populate=*" , getArticlesFetcher);


    const arrOfUsers = data?.map(article => article.attributes.user?.data?.attributes?.first_name);
    const setOfUsers = [...new Set(arrOfUsers)];
    console.log(setOfUsers);


    return <div>
        {data?.map(article => <ArticleInCard article={article} key={article.id} />)}
    </div>;
};