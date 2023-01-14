import React,{FC} from "react";
import {MovementDog} from "./MovementDog";
import {SocialIcons} from "./SocialIcons";
export const MovementDogAndSocialIconsHeader:FC = () => {
    return <div className="grid grid-cols-2">
        <MovementDog />
        <div className="col-end-4">
        <SocialIcons />
        </div>
    </div>;
};