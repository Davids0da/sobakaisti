import { FC } from "react";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import useSWR from "swr";
import { getCvFetcher } from "../../../api/api";
import { GameFooter } from "../GameFooter";

export const CvIndexPage: FC = () => {

    const { data } = useSWR(`/cv`, getCvFetcher);

    const ApiUrl = import.meta.env.VITE_BASE_URL;

    function createMarkup() {
        const htmlContent = { __html: data?.attributes.content };
        const re = /<img src="/gm
        const newStr = htmlContent.__html?.replace(re, `<img src="${ApiUrl}`) || "";
        const htmlContentRender = { __html: newStr };
        return htmlContentRender
    }

    return <div className="bg-white">
        <GameDogAndSocialIconsHeader />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="font-sobakaisti text-center text-3xl mb-16">CV</h1>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
        <GameFooter />
    </div>
}