import React, { FC, useState } from "react";
import MovementDog from "./../assets/movement_logo.svg";
import GameLogo from "./../assets/literogame_logo.svg";
import { DogWithZoom } from "./DogZoomWithText";

export const IndexPage: FC = () => {

    const [visible, setVisible] = useState(true);

    return <div className="grid place-items-center h-screen">
        <div className="flex w-full">
            <div id="movement-dog-icon" className="w-1/2">
                {visible && <DogWithZoom image_src={MovementDog} label="POKRET" url="movement" />}
            </div>
            {visible && <div id="game-dog-div" className="w-1/2">
                <div id="game-dog-icon">
                    {visible && <DogWithZoom image_src={GameLogo} label="LITERO-IGRA" url="game" />}
                </div>
            </div>
            }</div>
    </div >;
}; 