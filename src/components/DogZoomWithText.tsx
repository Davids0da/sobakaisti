import React from "react";
import {Link} from "react-router-dom";

interface DogWithZoomProps {
    image_src: string
    label: string
    url: string
}

export const DogWithZoom: React.FC<DogWithZoomProps> = ({ label, image_src, url }) => {
    return <Link to={url}>
        <div className="flex flex-col items-center group">
            <img className="w-16 hover:w-20" src={image_src} />
            <span className="hidden group-hover:inline">{label}</span>
        </div>
    </Link>;
};
