import { FC } from "react";
import useSWR from "swr";
import { getGameArticlesFetcher } from "../../../api/api";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import { GameFooter } from "../GameFooter";

export const RandomIndexPage: FC = () => {
    const ApiUrl = "http://localhost:1337";

    const { data } = useSWR(`/game-articles?populate=*`, getGameArticlesFetcher);
    if (!data) {
        return null
    }

    const filteredArticles = data?.filter(article => article.attributes.type === 'svastara' || article.attributes.type === 'dnevnik');
    const random = Math.floor(Math.random() * filteredArticles.length);
    const randomArticle = filteredArticles[random];

    function createMarkup() {
        const htmlContent = { __html: randomArticle?.attributes.about };
        const re = /<img src="/gm
        const newStr = htmlContent.__html.replace(re, `<img src="${ApiUrl}`)
        const htmlContentRender = { __html: newStr };
        return htmlContentRender
    }

    return <div><GameDogAndSocialIconsHeader />
        <h1 className="font-sobakaisti text-center text-3xl mt-16 mb-16 px-4">RANDOM ARTICLE: <span className="text-red-500">{randomArticle.attributes.title}</span></h1>
        <div className="flex px-4">
            <div className="min-h-80 aspect-w-1 flex aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src={ApiUrl + randomArticle.attributes.image.data.attributes.url} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className={`ml-10 mb-10 w-2/3 max-[768px]:hidden`}>
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
        <div className={`px-4 mt-4 mb-10 sm:hidden`}>
            <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <GameFooter />
    </div>
}