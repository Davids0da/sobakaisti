import React, {FC} from "react";
import {HomeButton} from "../../HomeButton";
import {CircleLink} from "../CircleLink";
export const ArtsIndexPage:FC = () => {
    return <div className="flex flex-col justify-between h-screen items-center">
        <HomeButton url="/" />
        <div className="flex justify-between w-1/2 opacity-90">
            <CircleLink url="music" label="MUZIKA" />
            <CircleLink url="photo" label="FOTO"/>
            <CircleLink url="video" label="VIDEO" />
            <CircleLink url="literature" label="LITERO"/>
            <CircleLink url="paintings" label="PAINT"/>
        </div>
        <div className="flex mb-4 opacity-70">
            <img className="w-4 transform -scale-x-100" src="/src/assets/movement_logo.svg"/>
            <p className="pl-2 text-xs">Sobakaisti &nbsp;©&nbsp; 2022</p>
        </div>
    </div>;
};