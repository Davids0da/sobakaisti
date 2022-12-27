import React, { FC } from "react";
import MovementDog from "./../assets/movement_logo.svg";
import GameLogo from "./../assets/literogame_logo.svg";
import {DogWithZoom} from "./DogZoomWithText";
import {getArticles} from "../api/api";

export const IndexPage: FC = () => {
    async function pozovi() {
        const articles = await getArticles();
    }

    return <div className="grid place-items-center h-screen">
        <div className="flex">
            <DogWithZoom image_src={MovementDog} label="pokret"  url="movement"/>
            <div onClick={pozovi}>ona linija</div>
            <DogWithZoom image_src={GameLogo} label="litero-igra" url="igra"/>
        </div>
    </div>;
}; 