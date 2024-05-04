import { FC } from "react";
import { MovementDog } from "./MovementDog";
import { SocialIcons } from "./SocialIcons";
import { Link } from "react-router-dom";

export const MovementDogAndSocialIconsHeader: FC = () => {
    return <div>
        <div className={`flex flex-col items-center pt-2 -mt-9 hover:mt-0 transition-all max-[768px]:mt-0`}>
            <div className={`text-sm w-full flex justify-center mb-2.5 font-bold space-x-5 max-[768px]:space-x-4 border-b-4 border-black`}>
                <Link to={`/movement/manifesto`}><h5 className="mb-2 hover:text-cyan-600">MANIFEST</h5> </Link>
                <Link to={`/movement/arts`}> <h5 className="mb-2 hover:text-cyan-600">RADOVI</h5> </Link>
                <Link to={`/movement/authors`}><h5 className="mb-2 hover:text-cyan-600">AUTORI</h5> </Link>
                <Link to={`/movement/publications`} className="mb-2 hover:text-cyan-600"> <h5>IZDANJA</h5> </Link>
                <Link to={`/movement/contact`}><h5 className="mb-2 hover:text-cyan-600">KONTAKT</h5> </Link>
            </div>
            <div className="-mt-2.5 mb-3 rotate-180 h-0 w-0 border-x-8 max-[768px]:border-b-0 border-x-transparent border-b-8 border-black"></div>
        </div>
        <div className="grid grid-cols-2 px-4">
            <MovementDog />
            <div className="col-end-4">
                <SocialIcons />
            </div>
        </div>
    </div>
};