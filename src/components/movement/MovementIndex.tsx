import React, { FC } from "react";
import {CircleLink} from "./CircleLink";


export const MovementPage: FC = () => {
    return <div className="flex flex-col justify-between h-screen items-center">
        <button>home</button>
        <div className="flex justify-between w-1/2 ">
            <CircleLink url="manifesto" label="Manifest" />
            <CircleLink url="arts" label="Radovi"/>
            <CircleLink url="authors" label="Autori" />
            <CircleLink url="publications" label="Izdanja"/>
            <CircleLink url="contact" label="Kontakt"/>
        </div>
        <div className="flex justify-center">Sobakaisti</div>
    </div>;
};