import React, { FC } from "react";
import {UserProps} from "../../../../../api/types";

interface UserProps1 {
    user: UserProps;
}
export const AuthorCircleForArticleCard:FC<UserProps1> = ({user}) => {
    const getInitialsWithDots = (user:UserProps) => {
        return user.first_name[0].toUpperCase() + "." + user.last_name[0].toUpperCase() + '.'
    }

    return <div className="mr-3 opacity-80 border rounded-full w-11 h-11 grid place-items-center border-black">
        <h3 className="text-xs font-['Noto_Sans', 'sans-serif'] font-bold">{getInitialsWithDots(user)}</h3></div>;
}

