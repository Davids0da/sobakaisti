import React, {FC, useState} from "react";
import {ArticleHeaderSmallIconLink} from "./ArticleHeaderSmallIconLink";
import {AuthorCircleForContactPage} from "../../../contact/components/AuthorCircleForContactPage";
import useSWR from "swr";
import {getArticlesFetcher, getUsersFetcher} from "../../../../../api/api";
import {AuthorCircleForArtsHeader} from "../article-card/AuthorCircleForArtsHeader";

interface ArticleHeaderProps {
    type: string;
}
export const ArticleHeader:FC<ArticleHeaderProps>  = ({ type}) => {

    // Users for article header without duplicates
    const { data } = useSWR(`/articles?filters[article_type][$eq]=${type}&populate=*` , getArticlesFetcher);

    const articleTypes = ['literature', 'photography', 'video', 'paintings', 'music']

    if(!data) {
        return null;
    }

    const currentArticleType = data?.slice(0,1)[0].attributes.article_type;

    const articleTypesWithoutCurrentType = articleTypes.filter(e => e !== currentArticleType);

    const users = data?.map( article => article.attributes.user.data);
    const usersWithoutDuplicates = users?.filter((v,i,a)=>a.findIndex(v2=>(v2.attributes.email===v.attributes.email))===i);
    if (!usersWithoutDuplicates) {
        return null;
    }

    // Half of array with users
    const half = Math.ceil( usersWithoutDuplicates?.length / 2);
    const firstHalf = usersWithoutDuplicates?.slice(0, half);
    const secondHalf = usersWithoutDuplicates?.slice(half);


  return <div className={`flex flex-col items-center`}>
             <div className="mt-10 flex items-center w-full">
                 <div className={`flex w-full justify-end items-center`}>
                     {firstHalf?.map(user => <AuthorCircleForArtsHeader currentArticleType={currentArticleType} user={user} key={user.id} />)}
                     <div className={`flex flex-col h-20 justify-between mr-4 ml-6`}>
                         <ArticleHeaderSmallIconLink icon_and_link={articleTypesWithoutCurrentType[0]}/>
                         <ArticleHeaderSmallIconLink icon_and_link={articleTypesWithoutCurrentType[1]}/>
                     </div>
                 </div>
                 <div className={`flex justify-center`}>
                     <div className="grid place-items-center h-20 w-20 rounded-full ring-2 ring-white border-black border-solid border">
                        <img className="h-12 w-12"
                   src={`/arts/${currentArticleType}.svg`}
                   alt="" />
                     </div>
                 </div>
                 <div className={`flex w-full items-center`}>
                     <div className={`flex flex-col h-20 justify-between ml-4 mr-6`}>
                         <ArticleHeaderSmallIconLink icon_and_link={articleTypesWithoutCurrentType[2]}/>
                         <ArticleHeaderSmallIconLink icon_and_link={articleTypesWithoutCurrentType[3]}/>
                     </div>
                 {secondHalf?.map(user => <AuthorCircleForArtsHeader currentArticleType={currentArticleType} user={user} key={user.id}  />)}
                 </div>
             </div>
        </div>
};

