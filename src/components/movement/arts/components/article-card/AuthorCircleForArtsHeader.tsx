import React, { FC } from "react";
import {UserProps} from "../../../../../api/types";
import {Link, useParams} from "react-router-dom";


interface ComponentUserProps {
    user: {
        id: number,
        attributes: UserProps
    };

    currentArticleType: string
}
export const AuthorCircleForArtsHeader:FC<ComponentUserProps>  = ({user, currentArticleType }) => {
    const getInitialsWithDots = (user:UserProps) => {
        return user.first_name[0].toUpperCase() + "." + user.last_name[0].toUpperCase() + ".";
    };

    const params = useParams()

    return <Link to={`/movement/arts/${currentArticleType}/${user.attributes.slug}`} className={`mx-1 opacity-80 group rounded-full w-11 h-11 grid place-items-center border-black hover:border-cyan-600 hover:border-2 ${params.slug === user.attributes.slug ? 'border-cyan-600 border-2' : 'border'} `}>
        <h3 className={`text-xs font-['Noto_Sans', 'sans-serif'] font-bold ${params.slug === user.attributes.slug ? 'text-cyan-600' : ''} group-hover:text-cyan-600`}>{getInitialsWithDots(user.attributes)}</h3>
        <div className={`w-16 absolute mt-24 hidden group-hover:flex justify-center`}>
            <h3 className="text-xs font-bold text-cyan-600"> {user.attributes.first_name} <br /> {user.attributes.last_name} </h3>
        </div>
    </Link>;
};

