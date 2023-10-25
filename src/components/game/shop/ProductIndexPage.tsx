import { FC } from "react";
import { useParams } from "react-router-dom";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import useSWR from "swr";
import { getProductFetcher } from "../../../api/api";
import { formatDistance } from "date-fns";
import { srLatn } from "date-fns/locale";
import { GameFooter } from "../GameFooter";

export const ProductIndexPage: FC = () => {
    const params = useParams();
    const ApiUrl = process.env.VITE_BASE_URL;

    const { data } = useSWR(`/products/${params.slug}?populate=*`, getProductFetcher);
    if (!data) {
        return null
    }

    function createMarkup() {
        if (!data || !data.attributes || !data.attributes.about) {
          // Handle the case when data or its properties are undefined or null
          return { __html: '' };
        }
      
        const htmlContent = { __html: data.attributes.about };
        const re = /<img src="/gm;
        const newStr = htmlContent.__html.replace(re, `<img src="${ApiUrl}`);
        const htmlContentRender = { __html: newStr };
        return htmlContentRender;
      }

    <div className={`mt-4 mb-10 w-2/3`}>
        <div className={`first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-black first-letter:text-black`} dangerouslySetInnerHTML={createMarkup()} />
    </div>

    return <div><GameDogAndSocialIconsHeader />
        <h1 className="font-sobakaisti text-center text-3xl mt-16 mb-16">{data.attributes.title}</h1>
        <div className="flex px-4">
            <div className="min-h-80 aspect-w-1 flex aspect-h-1 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src={ApiUrl + data.attributes.image.data[0].attributes.url} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className={`ml-10 mb-10 w-2/3 max-[768px]:hidden`}>
                <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
        <div className={`px-4 mt-4 mb-10  sm:hidden`}>
            <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <GameFooter />
    </div>
}