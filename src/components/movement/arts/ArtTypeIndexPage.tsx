import React, { FC, useEffect, useState } from "react";
import useSWR from "swr";
import { getArticlesFetcher } from "../../../api/api";
import { ArticleCard } from "./components/article-card/ArticleCard";
import { MovementDogAndSocialIconsHeader } from "../MovementDogAndSocialIconsHeader";
import { ArticleHeader } from "./components/article-header/ArticleHeader";
import { useParams } from "react-router-dom";
import { MovementFooter } from "../MovementFooter";

interface ArtTypeIndexPageProps {
    type: string;
}
export const ArtTypeIndexPage: FC<ArtTypeIndexPageProps> = ({ type }) => {
    const params = useParams();
    const [sortBy, setSortBy] = useState('createdAt:desc');

    const [visible, setVisible] = useState(4);

    const tagsType = `/articles?filters[tags][name][$contains]=${params.slug}&populate=*&sort=${sortBy}`
    const elseType = `/articles?filters[article_type][$eq]=${type}&populate=*&sort=${sortBy}${params.slug === undefined ? '' : `&filters[user][slug][$eq]=${params.slug}`}`

    const { data } = useSWR(`${type !== 'tags' ? elseType : tagsType}`, getArticlesFetcher);

    const artTypes = [`photography`, `video`, `literature`, `paintings`, `music`]

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 4);
    }

    return <div>
        <MovementDogAndSocialIconsHeader />
        {type === `tags` && <div className={`flex justify-center w-full mt-10`}><h1 className={`font-bold text-2xl`}>#{params.slug}</h1></div>}
        {artTypes.find((typ) => typ.includes(type)) && <ArticleHeader type={type} />}
        {type === `publications` && <div className={`flex justify-center w-full mt-10`}><h1 className={`font-bold text-2xl`}>IZDANJA</h1></div>}
        <div className="flex items-center w-full mt-10">
            <button onClick={() => setSortBy('createdAt:desc')} className={`flex justify-end w-full ${sortBy === 'createdAt:desc' ? 'font-bold' : ''}`}>HRONOLOŠKI</button>
            <div className="left-1/2 -ml-0.5 w-1 h-4 bg-gray-600 ml-5 mr-5"></div>
            <button onClick={() => setSortBy('views:desc')} className={`flex w-full ${sortBy === 'views:desc' ? 'font-bold' : ''}`}>POPULARNO</button>
        </div>
        <h1 className="mt-6 px-4">Izdvajamo</h1>
        <hr className="mb-6 px-4" />
        <div className="flex px-4 w-full flex-wrap">
            {data?.slice(0, visible).map(article => <ArticleCard article={article} key={article.id} />)}
        </div>
        <div className="flex justify-center">
            {visible < data?.length && <button className="border-2 p-2 border-black" onClick={showMoreItems}>Učitaj još objava</button>}
        </div>
        <MovementFooter />
    </div>;
};