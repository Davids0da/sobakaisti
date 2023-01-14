import React, { FC } from "react";
import {UserProps} from "../../../../api/types";

interface ComponentUserProps {
    user: UserProps;
    setSelectedUserId: (id: number) => void
}
export const AuthorCircleForContactPage:FC<ComponentUserProps>  = ({user, setSelectedUserId }) => {
    const getInitialsWithDots = (user:UserProps) => {
        return user.first_name[0].toUpperCase() + "." + user.last_name[0].toUpperCase() + ".";
    };

    return <button onClick={() => setSelectedUserId(user.id)} className="mx-1 opacity-80 border group rounded-full w-11 h-11 grid place-items-center border-black hover:border-fuchsia-600 hover:border-2">
        <h3 className="text-xs font-['Noto_Sans', 'sans-serif'] font-bold group-hover:text-fuchsia-600">{getInitialsWithDots(user)}</h3>
        <div className="w-16 absolute mt-24 hidden group-hover:inline-block">
            <h3 className="text-xs font-bold text-fuchsia-600"> {user.first_name} <br /> {user.last_name} </h3>
        </div>
    </button>;
};

