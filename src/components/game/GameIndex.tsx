import { FC } from "react";
import { HomeButton } from "../HomeButton";
import { Link, useNavigate } from "react-router-dom";

export const GamePage: FC = () => {


    return <div className="flex flex-col justify-between h-screen items-center">
        <HomeButton url="/" />
        <div className="flex font-sobakaisti text-xl">
            <div>
                <Link to={`litero-game`}>
                    <div className="items-center group align-center flex mr-10 flex-col w-44 h-44 max-[768px]:w-36 max-[768px]:h-36  bg-contain bg-[url('/src/assets/clouds/1/2.png')] bg-no-repeat">
                        <h3 className="bg-gradient-to-r mt-12 mr-2 group-hover:text-red-500 max-[768px]:mt-10">
                            LITERO-IGRA
                        </h3>
                    </div>
                </Link>
                <Link  to={`shop`}>
                    <div className="items-center group flex mr-10 flex-col mb-4 w-44 h-44 max-[768px]:w-36 max-[768px]:h-36 bg-contain bg-[url('/src/assets/clouds/3/2.png')] bg-no-repeat">
                        <h3 className="mt-14 group-hover:text-red-500">
                            DUĆAN
                        </h3>
                    </div>
                </Link>
            </div>
            <div className="items-center flex">
                <img className="w-20 xs:w-12" src="/src/assets/literogame_logo.svg" />
            </div>
            <div>
                <Link to={`txt`}>
                    <div className="items-center group flex ml-10 flex-col mb-4 w-44 h-44 max-[768px]:w-36 max-[768px]:h-36 bg-contain  bg-[url('/src/assets/clouds/2/2.png')] bg-no-repeat">
                        <h3 className="m-auto group-hover:text-red-500" >
                            TXT
                        </h3>
                    </div>
                </Link>
                <Link to={`contact`}>
                    <div className="items-center group flex ml-10 flex-col mb-4 w-44 h-44 max-[768px]:w-36 max-[768px]:h-36 bg-contain bg-[url('/src/assets/clouds/4/2.png')] bg-no-repeat">
                        <h3 className="m-auto group-hover:text-red-500" >
                            KONTAKT
                        </h3>
                    </div>
                </Link>
            </div>
        </div>
        <div className="flex justify-center mb-4 opacity-70">
            <img className="w-4 transform -scale-x-100" src="./src/assets/movement_logo.svg" />
            <p className="pl-2 text-xs ">Sobakaisti &nbsp;©&nbsp; 2023</p>
        </div>
    </div>;
}