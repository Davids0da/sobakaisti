// import React, {FC, useState} from "react";
// import useSWR from "swr";
// import {getArticlesFetcher} from "../../../api/api";
// import {ArticleCard} from "./components/article-card/ArticleCard";
// import {MovementDogAndSocialIconsHeader} from "../MovementDogAndSocialIconsHeader";
// import {AuthorCircleForArtsPage} from "./components/AuthorCircleForArts";
// import {AuthorCircleForContactPage} from "../contact/components/AuthorCircleForContactPage";
// import {ArticleHeader} from "./components/article-header/ArticleHeader";
// import {useParams} from "react-router-dom";
// import {MovementDog} from "../MovementDog";
// import {MovementFooter} from "../MovementFooter";
//
//
// export const TagIndexPage:FC = () => {
//     const [selectedId, setSelectedId] = useState(null)
//     const [sortBy, setSortBy] = useState('createdAt:desc');
//     const params = useParams();
//     const { data } = useSWR(`/articles?filters[slug][$eq]=${params}&populate=*}` , getArticlesFetcher);
//
//
//     return <div>
//         <MovementDogAndSocialIconsHeader />
//         <div className={`flex justify-center w-full mt-10`}><h1 className={`font-bold text-2xl`}>{params.slug}</h1></div>}
//         <div className="flex items-center w-full mt-10">
//             <button onClick={() => setSortBy('createdAt:desc')} className={`flex justify-end w-full ${sortBy === 'createdAt:desc' ? 'font-bold' : ''}`}>HRONOLOŠKI</button>
//             <div className="left-1/2 -ml-0.5 w-1 h-4 bg-gray-600 ml-5 mr-5"></div>
//             <button onClick={() => setSortBy('views:desc')} className={`flex w-full ${sortBy === 'views:desc' ? 'font-bold' : ''}`}>POPULARNO</button>
//         </div>
//         <h1 className="mt-6">Izdvajamo</h1>
//         <hr className="mb-6" />
//         <div className="flex flex-wrap">
//             {data?.map(article => <ArticleCard article={article} key={article.id} />)}
//         </div>
//         <MovementFooter />
//     </div>;
// };