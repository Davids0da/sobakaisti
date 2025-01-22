import { FC } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getGameArticleFetcher } from "../../api/api";
import { GameDogAndSocialIconsHeader } from "./GameDogAndSocialIconsHeader";
import { GameFooter } from "./GameFooter";
import { GameTagsComponent } from "../movement/arts/components/article/GameTags";
import { ArticleShareButton } from "../movement/arts/components/article/ArticleShareButton";

export const GameArticleIndexPage: FC = () => {
    const params = useParams();
    const ApiUrl = import.meta.env.VITE_BASE_URL;

    const { data } = useSWR(`/game-articles/${params.slug}?populate=*`, getGameArticleFetcher);
    if (!data) {
        return null
    }

    function createMarkup() {
        const htmlContent = { __html: data?.attributes.about };
        const re = /<img src="/gm
        const newStr = htmlContent.__html?.replace(re, `<img src="${ApiUrl}`) || "";
        const htmlContentRender = { __html: newStr };
        console.log(newStr)
        return htmlContentRender
    }

    const tagsArray = data.attributes.tags.data.map(tag => tag.attributes.name);

    <div className={`mt-4 mb-10 w-2/3`}>
        <div className={`first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-black first-letter:text-black`} dangerouslySetInnerHTML={createMarkup()} />
    </div>

    return <div><GameDogAndSocialIconsHeader />
        <h1 className="font-sobakaisti text-center text-3xl mt-16 mb-16">{data.attributes.title}</h1>
        <div className="flex px-4">
            <div>
                <div className="min-h-80 aspect-w-1 flex aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img src={ApiUrl + data.attributes.image.data.attributes.url} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="text-md mb-10 flex items-left article-content flex-col mt-2 ml-2">
                    {tagsArray.length === 1 && <h4 className={`font-bold pr-2`}>Tag: </h4>}
                    {tagsArray.length !== 1 && <h4 className={`font-bold pr-2`}>Tagovi: </h4>}
                    {tagsArray.map(tagName => <GameTagsComponent tag={tagName} />)}
                </div>
            </div>
            <div className={`ml-10 mb-10 w-2/3 max-[768px]:hidden article-content`}>
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
        <div className={`px-4 mt-4 mb-10 sm:hidden article-content`}>
            <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <div className="grid  place-items-center"> 
        <ArticleShareButton></ArticleShareButton>
        </div>



        <GameFooter />
    </div>
}