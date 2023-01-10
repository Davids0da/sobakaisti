import React,{FC} from "react";

interface CircleWithoutLinkProps {
    label: string
}

export const CircleWithoutLink:FC<CircleWithoutLinkProps> = ({ label}) => {
    return <div id="circle-link" className="opacity-80 border-2 rounded-full w-20 h-20 grid place-items-center border-black">
            <h3 className="text-xs font-['Noto_Sans', 'sans-serif'] font-bold">{label}</h3></div>;
};