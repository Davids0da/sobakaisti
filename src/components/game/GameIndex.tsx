import React,{FC} from "react";
import {HomeButton} from "../HomeButton";
import {CircleLink} from "../movement/CircleLink";

export const GamePage: FC = () => {
    return <div className="flex flex-col justify-between h-screen items-center">
        <HomeButton url="/" />
        <div className="flex justify-center mb-4 opacity-70">
            <img className="w-4 transform -scale-x-100" src="./src/assets/movement_logo.svg"/>
            <p className="pl-2 text-xs ">Sobakaisti &nbsp;©&nbsp; 2022</p>
        </div>
    </div>;
}