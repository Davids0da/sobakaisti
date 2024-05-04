import { FC, useRef, useState, MutableRefObject, useEffect } from "react";
import { GameDogAndSocialIconsHeader } from "../../GameDogAndSocialIconsHeader";
import useSWR from "swr";
import { getTagsFetcher } from "../../../../api/api";
import { GameFooter } from "../../GameFooter";
import { useParams } from "react-router-dom";


export const VocabularyIndexPage: FC = () => {

    const ApiUrl = import.meta.env.VITE_BASE_URL;
    const params = useParams();

    const myRef: MutableRefObject<HTMLHeadingElement | null> = useRef(null);

    const [tag, setTag] = useState('A');
    const [about, setAbout] = useState('');
    const [tagName, setTagName] = useState('');

    const { data } = useSWR(`/tags?populate=*`, getTagsFetcher);

    const letters = ['A', 'B', 'V', 'G', 'D', 'E', 'Z', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'F', 'H', 'C', 'X'];

    const setTagFirstLetter = (letter: string) => {
        setTag(letter);
    }

    const filterTagsbyFirstLetter = data?.filter(tagg => tagg && tagg.attributes.name[0].toLowerCase() === tag.toLowerCase());

    useEffect(() => {
        if (params.slug && data) {
            const newTag = params.slug?.toString().split('')[0];
            setTag(newTag);
            const filterTagsbyFirstLetterUseEffect = data?.filter(tagg => tagg && tagg.attributes.name[0].toLowerCase() === newTag.toLowerCase());
            const tag = filterTagsbyFirstLetterUseEffect?.find((t)=> {
               return t.attributes.slug === params.slug
            })
            console.log(tag, 'blah', filterTagsbyFirstLetterUseEffect)
            setTagAbout(tag?.attributes);
        }
    }, [params.slug , data])

    const setTagAbout = (attributes: any) => {
        if (!myRef.current) {
            return null;
        }
        setAbout(attributes.about);
        setTagName(attributes.name);
        window.scrollTo(0, myRef.current.offsetTop - 40);
    }

    function createMarkup(html: string) {
        const htmlContent = { __html: html };
        const re = /<img src="/gm
        const newStr = htmlContent.__html.replace(re, `<img src="${ApiUrl}`)
        const htmlContentRender = { __html: newStr };
        return htmlContentRender
    }


    return <div className="bg-white">
        <GameDogAndSocialIconsHeader />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="font-sobakaisti text-center text-3xl mb-16">Rečnik</h1>
            <div className="md:flex xs:flex-col">
                <div className="w-64 max-[768px]:w-full space-x-2 space-y-2">
                    {letters.map(letter => <button key={letter} onClick={() => setTagFirstLetter(letter)} className="font-sobakaisti text-xl ml-2 w-10 h-10 rounded-full 
                       bg-black hover:bg-red-500 text-white">
                        {letter}
                    </button>)}
                </div>
                <div className="ml-10 mt-1 max-[768px]:ml-2 max-[768px]:mt-6">
                    <h1 className="text-2xl font-sobakaisti">Reči:</h1>
                    {filterTagsbyFirstLetter?.map(tag => <h1 key={tag.id} className="hover:text-red-500"><button onClick={() => setTagAbout(tag.attributes)}>{tag.attributes.name}</button></h1>)}
                </div>
                <div className="ml-10 mt-1 max-[768px]:ml-2 max-[768px]:mt-6">
                    <h1 ref={myRef} className="text-2xl font-sobakaisti">Opis reči: <span className="text-red-500">{tagName}</span> </h1>
                    <div dangerouslySetInnerHTML={createMarkup(about)} />
                </div>
            </div>
        </div>
        <GameFooter />
    </div>
}