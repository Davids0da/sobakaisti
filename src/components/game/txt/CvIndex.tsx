import { FC } from "react";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import useSWR from "swr";
import { getCvFetcher } from "../../../api/api";
import { GameFooter } from "../GameFooter";

export const CvIndexPage: FC = () => {

    const { data } = useSWR(`/cv`, getCvFetcher);


    return <div className="bg-white">
        <GameDogAndSocialIconsHeader />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="font-sobakaisti text-center text-3xl mb-16">CV</h1>
            {data?.attributes.content}
        </div>
        <GameFooter />
    </div>
}