import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { getArticleFetcher, getArticlesFetcher } from "../../../../../api/api";
import { MovementDogAndSocialIconsHeader } from "../../../MovementDogAndSocialIconsHeader";
import { formatDistance } from "date-fns";
import { srLatn } from "date-fns/locale";
import { generateInitials } from "../../../../../utilties";
import { MovementFooter } from "../../../MovementFooter";
import { Link } from "react-router-dom";
import { ArticleImageCarousle } from "./ArticleImageCarousel";
import { Comments } from "./Comments";
import { PostComment } from "./PostComment";
import { TagsComponent } from "./Tags";


export const ArticleIndexPage: FC = () => {
    const ApiUrl = import.meta.env.VITE_BASE_URL;
    const params = useParams();
    const navigate = useNavigate();
    const { data } = useSWR(`/articles/${params.slug}?populate=*`, getArticleFetcher);
    if (!data) {
        return null
    }

    console.log(data.attributes, 'xD');

    const tagsArray = data.attributes.tags.data.map(tag => tag.attributes.name);
    const goToCertainTagPage = (tag: string) => {
        navigate(`/movement/articles/tags/${tag}`);
        return null
    }

    // Multiple images for carousel
    const multipleImagesForCarousel = data.attributes.article_image.data;
    console.log(multipleImagesForCarousel, 'xD');

    // Published date with plugin
    const publishedDate = formatDistance(new Date(data.attributes.publishedAt), new Date(), { addSuffix: true, locale: srLatn })

    // Handle article content render for images to add ApiUrl
    function createMarkup() {
        const htmlContent = { __html: data?.attributes.content };
        const re = /<img src="/gm
        const newStr = htmlContent.__html?.replace(re, `<img src="${ApiUrl}`) || "";
        const htmlContentRender = { __html: newStr };
        return htmlContentRender
    }

    const goBackOnePage = () => {
        navigate(-1);
    }

    return <div>
        <MovementDogAndSocialIconsHeader />
        <div className={`flex flex-col items-center`}>
            <div className="mt-10 relative">
                <button onClick={goBackOnePage}>
                    <div className="hover:scale-110 duration-200 grid place-items-center h-16 w-16 rounded-full ring-2 ring-white border-black border-solid border">
                        <img className="h-8 w-8"
                            src={`/arts/${data.attributes.article_type}.svg`}
                            alt="" />
                    </div>
                </button>
                <span
                    className="font-semibold -top-4 flex justify-center text-xs left-12 absolute text-cyan-600  w-10 h-10 bg-white border border-cyan-600 rounded-full"><h6 className={`m-auto`}>{generateInitials(data.attributes.user.data.attributes)}</h6>
                </span>
            </div>
            <h1 className={`text-3xl text-bold mt-8 px-4 mb-2`}>{data.attributes.title}</h1>
            <div className={`flex items-center`}>
                <span
                    className="font-semibold flex justify-center mr-2 text-xs left-12 w-10 h-10 bg-white border border-cyan-600 rounded-full"><h6 className={`m-auto`}>{generateInitials(data.attributes.user.data.attributes)}</h6>
                </span>
                <h6 className="text-sm">
                    <Link to={`/movement/authors/${data.attributes.user.data.attributes.slug}`} className={`text-cyan-600`}>{data.attributes.user.data.attributes.first_name + " " + data.attributes.user.data.attributes.last_name}</Link> objavio {publishedDate}.
                </h6>
            </div>
            {multipleImagesForCarousel.length === 1 && <img className={`mt-4 md:w-2/3 sm:w-full md:p-0 p-4`} src={ApiUrl + data.attributes.article_image.data[0].attributes.url} />}
            {multipleImagesForCarousel.length !== 1 && <ArticleImageCarousle images={multipleImagesForCarousel} />}
            <div className={`mt-4 mb-10 w-2/3`}>
                <div className={`first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-black first-letter:text-black`} dangerouslySetInnerHTML={createMarkup()} />
            </div>
            <div className="text-md mb-10 flex items-center flex-col ">
                {tagsArray.length === 1 && <h4 className={`font-bold pr-2`}>Tag: </h4>}
                {tagsArray.length !== 1 && <h4 className={`font-bold pr-2`}>Tagovi: </h4>}
                {tagsArray.map(tagName => <TagsComponent tag={tagName} />)}
            </div>
            <div className={`flex flex-col md:w-2/3 sm:w-full items-center px-4`}>
                <div className={`flex flex-col`}>
                    {data.attributes.comments?.data.length !== 0 && <h3 className="text-lg font-semibold text-gray-900">Komentari</h3>}
                </div>
                {data.attributes.comments?.data.map(comment => <Comments attributes={comment.attributes} key={comment.id} />)}
                <h3 className="text-lg font-semibold text-gray-900 mt-10">Postavi komentar</h3>
                <PostComment />
            </div>
        </div>
        <MovementFooter />
    </div>
}