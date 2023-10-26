import React, { FC } from "react";
import { Link } from "react-router-dom";
import LiteroGameLogo from "/src/assets/literogame_logo.svg";

export const GameDog: FC = () => {
    return <Link to="/game">
        <img className="w-6" src={LiteroGameLogo} />
    </Link>;
};