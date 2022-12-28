import React,{FC} from "react";
import {Link} from "react-router-dom";

interface CircleLinkProps {
    url: string
    label: string
}

export const CircleLink:FC<CircleLinkProps> = ({url, label}) => {
    return <Link to={url}>
        <div className="border-2 rounded-full w-24 h-24 grid place-items-center border-black hover:w-28 hover:h-28">{label}</div>
    </Link>;
};