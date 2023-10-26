import React, {FC} from "react";
import { Link } from "react-router-dom";
import DogHouse from "/src/assets/dog_house.svg";

interface HomeButtonProps {
    url: string
}

export const HomeButton:FC<HomeButtonProps> = ({url}) => {
    return <Link to={url}>
        <button className="mt-4">
            <img className="w-4" src={DogHouse}/>
        </button>
    </Link>
};