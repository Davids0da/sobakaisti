import { FC } from "react";
import { CircleWithoutLink } from "../../movement/CircleWithoutLink";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import { GameFooter } from "../GameFooter";
import { GameContactForm } from "./GameContactForm";

export const GameContactIndex: FC = () => {

    const selectedId = null;

    return <div className="h-screen">
        <GameDogAndSocialIconsHeader />
        <div className="flex flex-col items-center mb-12">
            <h1 className="font-sobakaisti text-center text-3xl mt-16">KONTAKT</h1>
            <GameContactForm selectedUserId={selectedId} />
        </div>
        <GameFooter />
    </div>
};