import { FC, useState, useEffect } from "react";
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
    const [allData, setAllData] = useState<any[]>([]);
    const [visible, setVisible] = useState(4);

    // Fetch the latest 4 posts first
    const { data: initialData } = useSWR(
        `/game-articles?filters[type][$eq]=${type}&populate=*&sort=createdAt:desc&pagination[limit]=4`,
        getGameArticlesFetcher
    );

    // Fetch the rest of the posts after the first fetch is completed
    const { data: remainingData } = useSWR(
        initialData ? `/game-articles?filters[type][$eq]=${type}&populate=*&sort=createdAt:desc&pagination[start]=4` : null,
        getGameArticlesFetcher
    );

    // Merge data when both fetches complete
    useEffect(() => {
        if (initialData && remainingData) {
            setAllData([...initialData, ...remainingData]);
        } else if (initialData) {
            setAllData(initialData);
        }
    }, [initialData, remainingData]);

    if (type === "svastara") {
        type = "svaštara";
    }

    if (!allData.length) {
        return <Loader />;
    }

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    return (
        <div className="bg-white">
            <GameDogAndSocialIconsHeader />
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="font-sobakaisti text-center text-3xl mb-16">{type}</h1>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {allData
                        ?.filter((item) => item?.attributes?.hidden === false)
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
                    {visible < allData.length && (
                        <button className="mt-4 border-2 p-2 border-black" onClick={showMoreItems}>
                            Učitaj još
                        </button>
                    )}
                </div>
            </div>
            <GameFooter />
        </div>
    );
};
