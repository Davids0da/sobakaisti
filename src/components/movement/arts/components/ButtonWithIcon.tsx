import React, {FC} from "react";
import {Link} from "react-router-dom";

interface ButtonWithIconProps {
    type: string;
}
export const ButtonWithIcon:FC<ButtonWithIconProps> = ({type}) => {
    return <Link to={type}><div className="hover:scale-[1.2] duration-200 grid place-items-center h-14 w-14 rounded-full ring-2 ring-white border-black border-solid border">
            <img className="h-8 w-8"
                 src={`/src/assets/arts/${type}.svg`}
                 alt="" />
        </div>
    </Link>
};