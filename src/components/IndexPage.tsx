import React, { FC, useState } from "react";
import MovementDog from "./../assets/movement_logo.svg";
import GameLogo from "./../assets/literogame_logo.svg";
import { DogWithZoom } from "./DogZoomWithText";

export const IndexPage: FC = () => {

    const [visible, setVisible] = useState(false);

    const handleChange = () => {
        if (event?.target.value === 'sobakaisti123') {
            setVisible(true);
        }
    }

    return <div className="grid place-items-center h-screen">
        <div className="flex w-full">
            {!visible && <input
                type="text"
                className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm"
                placeholder="Unesite lozinku za ulaz."
                onChange={handleChange}
            />
            }
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