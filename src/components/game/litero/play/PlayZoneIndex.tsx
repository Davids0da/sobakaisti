import { FC, useState } from "react";
import useSWR from "swr";
import { getGameArticlesFetcher } from "../../../../api/api";
import { Loader } from "../../../Loader";
import { GameDogAndSocialIconsHeader } from "../../GameDogAndSocialIconsHeader";
import { GameFooter } from "../../GameFooter";
import { GameListItem } from "../../shop/GameListItem";

export interface PlayZoneIndexProps {
    type: string;
}

export const PlayZoneIndexPage: FC<PlayZoneIndexProps> = ({ type }) => {

    const { data, isLoading } = useSWR(`/game-articles?filters[type][$eq]=${type}&populate=*&sort=createdAt:desc`, getGameArticlesFetcher);


    const [visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 4);
    }

    if (type === 'svastara') {
        type = 'svaštara'
    }

    if (!data) {
        return null;
    }


    return <div className="bg-white">
        <GameDogAndSocialIconsHeader />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="font-sobakaisti text-center text-3xl mb-16">{type}</h1>
            {isLoading && <Loader />}
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {!isLoading &&
                    data
                        ?.filter((item) => item?.attributes?.hidden === false) // Client-side filter for hidden === false
                        .slice(0, visible)
                        .map((data) => (
                            <GameListItem
                                short_about={data?.attributes.short_about}
                                title={data?.attributes.title}
                                slug={data?.attributes.slug}
                                image_url={data?.attributes.image.data.attributes.url}
                                key={data.id}
                            />
                        ))}
            </div>
            <div className="flex justify-center">
                {visible < data?.length && <button className="border-2 p-2 border-black" onClick={showMoreItems}>Učitaj još</button>}
            </div>
        </div>
        <GameFooter />
    </div>
}