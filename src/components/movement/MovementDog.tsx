import React,{FC} from "react";
import {Link} from "react-router-dom";

export const MovementDog:FC = () => {
    return <Link to="/movement">
            <img className="w-6" src="/src/assets/movement_logo.svg" />
    </Link>;
};