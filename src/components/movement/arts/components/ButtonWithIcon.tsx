import React, { FC } from "react";
import { Link } from "react-router-dom";
import literature from "/src/assets/arts/literature.svg";
import music from "/src/assets/arts/music.svg";
import paintings from "/src/assets/arts/paintings.svg";
import photography from "/src/assets/arts/photography.svg";
import publications from "/src/assets/arts/publications.svg";
import video from "/src/assets/arts/video.svg";

interface ButtonWithIconProps {
    type: string;
}

const types = [music, paintings, literature ,photography, publications, video];

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({ type }) => {
    const buttonImg = types.find(xd => xd.toString() === `/src/assets/arts/${type}.svg`);
    return <Link to={type}><div className="hover:scale-[1.2] duration-200 grid place-items-center h-14 w-14 rounded-full ring-2 ring-white border-black border-solid border">
        <img className="h-8 w-8"
            src={buttonImg}
            alt="" />
    </div>
    </Link>
};