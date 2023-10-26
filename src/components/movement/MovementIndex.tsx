import { FC } from "react";
import { CircleLink } from "./CircleLink"
import { HomeButton } from "../HomeButton";
import MovementDog from "/src/assets/movement_logo.svg";


export const MovementPage: FC = () => {

    return <div className="flex flex-col justify-between h-screen items-center overflow-y-hidden">
        <HomeButton url="/" />
        <div className={`flex flex-col items-center`}>
            <div id="arts-button-1" className={`flex -mt-16 mb-16 justify-center`}>
                <CircleLink url="manifesto" label="MANIFEST" />
            </div>
            <div className="flex items-center space-x-16">
                <div id={`arts-button-2`}>
                    <CircleLink url="arts" label="RADOVI" />
                </div>
                <div>
                    <img className="w-20" src={MovementDog} />
                </div>
                <div id={`arts-button-3`}>
                    <CircleLink url="authors" label="AUTORI" />
                </div>
            </div>
            <div className={`flex mt-16 justify-center space-x-20`}>
                <div id={`arts-button-4`}>
                    <CircleLink url="publications" label="IZDANJA" />
                </div>
                <div id={`arts-button-5`}>
                    <CircleLink url="contact" label="KONTAKT" />
                </div>
            </div>
        </div>
        <div className="flex mb-4 opacity-100">
            <img className="w-4 transform -scale-x-[1]" src={MovementDog} />
            <p className="pl-2 text-xs">Sobakaisti &nbsp;©&nbsp; 2023</p>
        </div>
    </div>;
};


