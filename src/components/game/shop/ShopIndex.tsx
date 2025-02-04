import { FC } from "react";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import { GameListItem } from "./GameListItem";
import useSWR from "swr";
import { getProductsFetcher } from "../../../api/api";
import { GameFooter } from "../GameFooter";

export const ShopIndexPage: FC = () => {

    const { data } = useSWR(`/products?populate=*`, getProductsFetcher);

    // Filter out expired products
    const filteredDataExpiredProducts = data?.filter(data => new Date(data.attributes.expiration_date) > new Date());

    // Filter out not published products
    const filteredNotPublishedProducts = filteredDataExpiredProducts?.filter(data => new Date(data.attributes.published_date) < new Date());

    // Day and night products
    const dayProducts = filteredNotPublishedProducts?.filter(data => data.attributes.day === true);
    const nightProducts = filteredNotPublishedProducts?.filter(data => data.attributes.night === true);

    const hours = new Date().getHours()
    const isDayTime = hours > 6 && hours < 18;


    console.log(dayProducts);
    console.log(nightProducts);

    return <div className="bg-white">
        <GameDogAndSocialIconsHeader />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="font-sobakaisti text-center text-3xl mb-16">Dućan</h1>
            {!isDayTime && nightProducts && nightProducts !== undefined && <h1 className="font-sobakaisti text-red-500 text-center text-3xl mb-16">Trenutno nema aktivnih proizvoda!</h1>}
            {isDayTime && !dayProducts && dayProducts !== undefined && <h1 className="font-sobakaisti text-red-500 text-center text-3xl mb-16">Trenutno nema aktivnih proizvoda!</h1>}
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {isDayTime && dayProducts?.map((product: any) => <GameListItem short_about={product.attributes.short_about} title={product.attributes.title} slug={product.attributes.slug} image_url={product.attributes.image.data.attributes.url} key={product.id} />)}
                {!isDayTime && nightProducts?.map((product: any) => <GameListItem short_about={product.attributes.short_about} title={product.attributes.title} slug={product.attributes.slug} image_url={product.attributes.image.data.attributes.url} key={product.id} />)}
            </div> 
        </div>
        <GameFooter />
    </div>
}