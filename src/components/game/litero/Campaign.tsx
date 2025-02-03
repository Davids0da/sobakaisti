import { FC, useState } from "react";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import useSWR from "swr";
import { getMapsFetcher, getProductsFetcher } from "../../../api/api";
import { GameListItem } from "../shop/GameListItem";
import { Loader } from "../../Loader";
import { GameFooter } from "../GameFooter";


export const CampaignIndexPage: FC = () => {

    const { data, isLoading } = useSWR(`/maps?populate=*`, getMapsFetcher);
    const [visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 4);
    }

    if(!data) {
        return null;
    }

    return <div className="bg-white">
        <GameDogAndSocialIconsHeader />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="font-sobakaisti text-center text-3xl mb-16">Pohod</h1>
            {isLoading && <Loader />}
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {!isLoading && data?.slice(0,visible).map(data => <GameListItem title={data.attributes.title} short_about={data.attributes.short_about} slug={data.attributes.slug} image_url={data.attributes.image.data[0].attributes.url} key={data.id} />)}
            </div>
        </div>
          <div className="flex justify-center">
            {visible < data?.length && <button className="mt-4 border-2 p-2 border-black" onClick={showMoreItems}>Učitaj još</button>}
        </div>
        <GameFooter />
    </div>
} 