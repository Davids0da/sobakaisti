import React, { FC } from "react";
import {Link, useNavigate} from "react-router-dom";

interface ArticleHeaderSmallIconLinkProps {
    icon_and_link: string;
}
export const ArticleHeaderSmallIconLink:FC<ArticleHeaderSmallIconLinkProps>  = ({icon_and_link}) => {

    const navigate = useNavigate();
    const goBackToIconPage = () => {
        navigate(`/movement/arts/${icon_and_link}`);
    }

    return <button onClick={goBackToIconPage}>
        <img className="h-6 w-6 hover:scale-[1.2] duration-200"
             src={`/arts/${icon_and_link}.svg`}
             alt="" />
    </button>
};

