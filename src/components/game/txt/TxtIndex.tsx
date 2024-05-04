import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HomeButton } from "../../HomeButton";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import LiterogameLogo from "/src/assets/literogame_logo.svg";
import MovementLogo from "/src/assets/movement_logo.svg";

export const TxtIndexPage: FC = () => {


    const navigate = useNavigate();
    const goBackToIconPage = () => {
        navigate(`/game`);
    }

    return <div className="flex flex-col justify-between h-screen items-center">
        <div className="w-full">
            <GameDogAndSocialIconsHeader />
        </div>
        <div className="flex font-sobakaisti text-xl">
            <div>
                <Link to={`dnevnik`}>
                    <div className="items-center group align-center flex mr-10 flex-col w-44 h-44 max-[768px]:w-36 bg-contain  bg-[url('/src/assets/clouds/1/3.png')] bg-no-repeat">
                        <h4 className="bg-gradient-to-r mt-14 max-[768px]:mt-12 group-hover:text-red-500" >
                            DNEVNIK
                        </h4>
                    </div>
                </Link>
                <Link to={`cv`}>
                    <div className="items-center group flex mr-10 flex-col mb-4 w-48 h-48 max-[768px]:w-36 bg-contain bg-[url('/src/assets/clouds/3/3.png')] bg-no-repeat">
                        <h4 className="mt-16 max-[768px]:mt-12 group-hover:text-red-500" >
                            CV
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
                <Link to={`svastara`}>
                    <div className="items-center group flex ml-10 flex-col mb-4 w-44 h-44 max-[768px]:w-36 bg-contain  bg-[url('/src/assets/clouds/2/3.png')] bg-no-repeat">
                        <h4 className="mt-16 max-[768px]:mt-12 group-hover:text-red-500" >
                            SVAŠTARA
                        </h4>
                    </div>
                </Link>
                <Link to={`random`}>
                    <div className="items-center group flex ml-10 flex-col mb-4 w-44 h-44 max-[768px]:w-36 bg-contain bg-[url('/src/assets/clouds/4/3.png')] bg-no-repeat">
                        <h4 className="mt-16 max-[768px]:mt-12 group-hover:text-red-500" >
                            X = ?
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
        <div className="flex justify-center mb-4 opacity-70">
            <img className="w-4 transform -scale-x-100" src={MovementLogo} />
            <p className="pl-2 text-xs ">Sobakaisti &nbsp;©&nbsp; 2023</p>
        </div>
    </div>;
}