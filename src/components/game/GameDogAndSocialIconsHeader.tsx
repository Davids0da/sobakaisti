import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MovementDog } from "../movement/MovementDog";
import { SocialIcons } from "../movement/SocialIcons";
import { GameDog } from "./GameDog";
export const GameDogAndSocialIconsHeader: FC = () => {
    return <div>
        <div className={`flex flex-col items-center pt-2 -mt-11 hover:mt-0 transition-all max-[768px]:mt-0`}>
            <div className={`text-lg w-full flex justify-center mb-2.5 font-bold space-x-5 border-b-4 border-black font-sobakaisti`}>
                <Link to={`/game/litero-game`}><h4 className="mb-2 hover:text-red-500">LITERO-IGRA</h4> </Link>
                <Link to={`/game/txt`}> <h4 className="mb-2 hover:text-red-500">TXT</h4> </Link>
                <Link to={`/game/shop`}><h4 className="mb-2 hover:text-red-500">DUĆAN</h4> </Link>
                <Link to={`/game/contact`} className="mb-2 hover:text-red-500"> <h4>KONTAKT</h4> </Link>
            </div>
            <div className="-mt-2.5 mb-3 rotate-180 h-0 w-0 border-x-8 max-[768px]:border-b-0 border-x-transparent border-b-8 border-black"></div>
        </div>
        <div className="grid grid-cols-2 px-4">
            <GameDog />
            <div className="col-end-4">
                <SocialIcons />
            </div>
        </div>
    </div>
};