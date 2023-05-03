import React from "react";
import {Link} from "react-router-dom";

interface DogWithZoomProps {
    image_src: string
    label: string
    url: string
}

export const DogWithZoom: React.FC<DogWithZoomProps> = ({ label, image_src, url }) => {
    return <Link to={url}>
        <div className="flex flex-col place-items-center group hover:scale-110 duration-200">
            <img className="w-16" src={image_src} />
            <span className="max-[768px]:opacity-80 opacity-0 mt-4 text-xs font-['Noto_Sans', 'sans-serif'] font-bold group-hover:opacity-80">{label}</span>
        </div>
    </Link>;
};
