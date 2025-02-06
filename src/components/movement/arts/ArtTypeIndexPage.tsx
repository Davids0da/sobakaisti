import React, { FC, useEffect, useState } from "react";
import useSWR from "swr";
import { getArticlesFetcher } from "../../../api/api";
import { ArticleCard } from "./components/article-card/ArticleCard";
import { MovementDogAndSocialIconsHeader } from "../MovementDogAndSocialIconsHeader";
import { ArticleHeader } from "./components/article-header/ArticleHeader";
import { useParams } from "react-router-dom";
import { MovementFooter } from "../MovementFooter";
import { Loader } from "../../Loader"; // Import Loader

interface ArtTypeIndexPageProps {
    type: string;
}

export const ArtTypeIndexPage: FC<ArtTypeIndexPageProps> = ({ type }) => {
    const params = useParams();
    const [sortBy, setSortBy] = useState("createdAt:desc");
    const [visible, setVisible] = useState(4);
    const [allData, setAllData] = useState<any[]>([]); // Store merged data

    // First fetch (only latest 4 posts)
    const { data: initialData, isValidating: loadingInitial } = useSWR(
        `${type !== "tags"
            ? `/articles?filters[article_type][$eq]=${type}&populate=*&sort=${sortBy}${params.slug === undefined ? "" : `&filters[user][slug][$eq]=${params.slug}`}&pagination[limit]=4`
            : `/articles?filters[tags][name][$contains]=${params.slug}&populate=*&sort=${sortBy}&pagination[limit]=4`
        }`,
        getArticlesFetcher
    );

    // Second fetch (remaining posts)
    const { data: remainingData, isValidating: loadingRemaining } = useSWR(
        initialData
            ? `${type !== "tags"
                ? `/articles?filters[article_type][$eq]=${type}&populate=*&sort=${sortBy}${params.slug === undefined ? "" : `&filters[user][slug][$eq]=${params.slug}`}&pagination[start]=4`
                : `/articles?filters[tags][name][$contains]=${params.slug}&populate=*&sort=${sortBy}&pagination[start]=4`
            }`
            : null,
        getArticlesFetcher
    );

    // Merge the fetched data when available
    useEffect(() => {
        if (initialData && remainingData) {
            setAllData([...initialData, ...remainingData]);
        } else if (initialData) {
            setAllData(initialData);
        }
    }, [initialData, remainingData]);

    const artTypes = ["photography", "video", "literature", "paintings", "music"];

    const showMoreItems = () => {
        setVisible((prev) => prev + 4);
    };

    // Show loader while fetching data
    if (loadingInitial) return <Loader />;

    return (
        <div>
            <MovementDogAndSocialIconsHeader />
            {type === "tags" && (
                <div className="flex justify-center w-full mt-10">
                    <h1 className="font-bold text-2xl">#{params.slug}</h1>
                </div>
            )}
            <div className="h-32">
                {artTypes.includes(type) && <ArticleHeader type={type} />}
            </div>
            {type === "publications" && (
                <div className="flex justify-center w-full mt-10">
                    <h1 className="font-bold text-2xl">IZDANJA</h1>
                </div>
            )}
            <div className="flex items-center w-full mt-10 mb-10">
                <button
                    onClick={() => setSortBy("createdAt:desc")}
                    className={`flex justify-end w-full ${sortBy === "createdAt:desc" ? "font-bold" : ""}`}
                >
                    HRONOLOŠKI
                </button>
                <div className="left-1/2 -ml-0.5 w-1 h-4 bg-gray-600 ml-5 mr-5"></div>
                <button
                    onClick={() => setSortBy("views:desc")}
                    className={`flex w-full ${sortBy === "views:desc" ? "font-bold" : ""}`}
                >
                    POPULARNO
                </button>
            </div>
            <div className="flex px-4 w-full flex-wrap">
                {allData?.slice(0, visible).map((article) => (
                    <ArticleCard article={article} key={article.id} />
                ))}
            </div>
            <div className="flex justify-center">
                {visible < allData.length && (
                    <button className="border-2 p-2 border-black" onClick={showMoreItems}>
                        Hoću jošssss!
                    </button>
                )}
            </div>
            {loadingRemaining && <Loader />} {/* Show loader if fetching more */}
            <MovementFooter />
        </div>
    );
};
