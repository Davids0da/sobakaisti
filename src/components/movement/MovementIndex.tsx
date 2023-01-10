import React, { FC } from "react";
import {CircleLink} from "./CircleLink"
import {HomeButton} from "../HomeButton";


export const MovementPage: FC = () => {
    return <div className="flex flex-col justify-between h-screen items-center">
        <HomeButton url="/" />
        <div className="flex justify-between w-1/2 opacity-90">
            <CircleLink url="manifesto" label="MANIFEST" />
            <CircleLink url="arts" label="RADOVI"/>
            <CircleLink url="authors" label="AUTORI" />
            <CircleLink url="publications" label="IZDANJA"/>
            <CircleLink url="contact" label="KONTAKT"/>
        </div>
        <div className="flex mb-4 opacity-70">
            <img className="w-4 transform -scale-x-100" src="./src/assets/movement_logo.svg"/>
            <p className="pl-2 text-xs">Sobakaisti &nbsp;©&nbsp; 2022</p>
        </div>
    </div>;
};


