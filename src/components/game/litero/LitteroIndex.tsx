import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import LiterogameLogo from "/src/assets/literogame_logo.svg";
import MovementLogo from "/src/assets/movement_logo.svg";

export const LitteroIndex: FC = () => {

    const navigate = useNavigate();
    const goBackToIconPage = () => {
        navigate(`/game`);
    }

    const currentYear: number = new Date().getFullYear();

    return <div className="flex flex-col justify-between h-screen items-center w-full">
        <div className="w-full">
            <GameDogAndSocialIconsHeader />
        </div>
        <div className="flex font-sobakaisti text-xl">
            <div>
                <Link to={`new-game`}>
                    <div className="items-center align-center group flex mr-10 flex-col w-44 h-28 max-[768px]:w-36 mb-10 bg-contain  bg-[url('/src/assets/clouds/1/4.png')] bg-no-repeat">
                        <h4 className="bg-gradient-to-r mt-8 max-[768px]:mt-6 group-hover:text-red-500">
                            NOVA IGRA
                        </h4>
                    </div>
                </Link>
                <Link to={`game-zone`}>
                    <div className="items-center flex mr-10 flex-col group mb-4 w-44 h-28 max-[768px]:w-36 bg-contain bg-[url('/src/assets/clouds/3/4.png')] bg-no-repeat">
                        <h4 className="mt-8 max-[768px]:mt-6 group-hover:text-red-500" >
                            IGRARNIK
                        </h4>
                    </div>
                </Link>
            </div>
            <div className="items-center flex">
                <button onClick={goBackToIconPage}>
                    <img className="w-20" src={LiterogameLogo} />
                </button>
            </div>
            <div>
                <Link to={`campaign`}>
                    <div className="items-center group flex ml-10 flex-col mb-4 w-44 h-28 mb-8 mt-2 max-[768px]:w-36 bg-contain  bg-[url('/src/assets/clouds/2/4.png')] bg-no-repeat">
                        <h4 className="mt-6 max-[768px]:mt-4 group-hover:text-red-500">
                            POHOD
                        </h4>
                    </div>
                </Link>
                <Link to={`vocabulary`}>
                    <div className="items-center group flex ml-10 flex-col mb-4 w-44 h-28 bg-contain max-[768px]:w-36 bg-[url('/src/assets/clouds/4/4.png')] bg-no-repeat">
                        <h4 className="mt-10 max-[768px]:mt-6 group-hover:text-red-500">
                            REČNIK
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
        <div className="flex justify-center mb-4 opacity-70">
            <img className="w-4 transform -scale-x-100" src={MovementLogo} />
            <p className="pl-2 text-xs ">Sobakaisti &nbsp;©&nbsp; {currentYear}</p>
        </div>
    </div>;
}