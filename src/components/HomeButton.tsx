import React, {FC} from "react";
import { Link } from "react-router-dom";

interface HomeButtonProps {
    url: string
}

export const HomeButton:FC<HomeButtonProps> = ({url}) => {
    return <Link to={url}>
        <button className="mt-4">
            <img className="w-4 opacity-80 hover:opacity-100" src="./src/assets/dog_house.svg"/>
        </button>
    </Link>
};