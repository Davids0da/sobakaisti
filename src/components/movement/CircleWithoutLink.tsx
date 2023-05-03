import React,{FC} from "react";

interface CircleWithoutLinkProps {
    label: string
    article_or_user: boolean;
}

export const CircleWithoutLink:FC<CircleWithoutLinkProps> = ({ label , article_or_user}) => {
    return <div id="circle-link" className="opacity-80 border-2 rounded-full w-20 h-20 grid place-items-center border-black">
            <h3 className={`font-['Noto_Sans', 'sans-serif']  font-bold ${article_or_user ? 'text-xs' : 'text-xs'}`}>{label}</h3></div>;
};