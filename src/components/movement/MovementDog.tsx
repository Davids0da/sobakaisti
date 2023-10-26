import React,{FC} from "react";
import {Link} from "react-router-dom";
import MovementLogo from "/src/assets/movement_logo.svg";

export const MovementDog:FC = () => {
    return <Link to="/movement">
            <img className="w-6" src={MovementLogo} />
    </Link>;
};