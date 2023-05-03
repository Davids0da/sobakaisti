import { FC } from "react";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import { GameFooter } from "../GameFooter";


export const NewGameIndexPage: FC = () => {

    return <div className="bg-white">
        <GameDogAndSocialIconsHeader />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="font-sobakaisti text-center text-3xl mb-16">Nova Igra</h1>
            <h1 className="font-sobakaisti text-red-500 text-center text-3xl mb-16">Uskoro!</h1>
        </div>
        <GameFooter />
    </div>
}