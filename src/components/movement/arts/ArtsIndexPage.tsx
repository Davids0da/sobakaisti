import React, { FC } from "react";
import { HomeButton } from "../../HomeButton";
import { CircleLink } from "../CircleLink";
import { CircleWithoutLink } from "../CircleWithoutLink";
import { ButtonWithIcon } from "./components/ButtonWithIcon";
import { MovementFooter } from "../MovementFooter";
export const ArtsIndexPage: FC = () => {
    return <div className="flex flex-col justify-between h-screen items-center">
        <HomeButton url="/" />
        <div className={`flex flex-col items-center`}>
            <div id="arts-button-1" className={`flex -mt-16 mb-16 justify-center`}>
                <ButtonWithIcon type={`literature`} />
            </div>
            <div className="flex items-center space-x-16">
                <div id={`arts-button-2`}>
                    <ButtonWithIcon type={`music`} />
                </div>
                <div>
                    <CircleWithoutLink label="RADOVI" />
                </div>
                <div id={`arts-button-3`}>
                    <ButtonWithIcon type={`paintings`} />
                </div>
            </div>
            <div className={`flex mt-16 justify-center space-x-20`}>
                <div id={`arts-button-4`}>
                    <ButtonWithIcon type={`photography`} />
                </div>
                <div id={`arts-button-5`}>
                    <ButtonWithIcon type={`video`} />
                </div>
            </div>
        </div>
        <div className="flex mb-4 opacity-70">
            <img className="w-4 transform -scale-x-100" src="/src/assets/movement_logo.svg" />
            <p className="pl-2 text-xs">Sobakaisti &nbsp;©&nbsp; 2023</p>
        </div>
    </div>;
};