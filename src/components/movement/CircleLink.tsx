import React,{FC} from "react";
import {Link} from "react-router-dom";

interface CircleLinkProps {
    url: string
    label: string
}

export const CircleLink:FC<CircleLinkProps> = ({url, label}) => {
    return <Link to={url}>
        <div id="circle-link" className="opacity-100 border-2 bg-white rounded-full w-20 h-20 grid place-items-center border-black hover:scale-110 duration-200">
            <h3 className="text-xs font-['Noto_Sans', 'sans-serif'] font-bold">{label}</h3></div>
    </Link>;
};