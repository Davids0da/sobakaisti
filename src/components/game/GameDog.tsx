import React, { FC } from "react";
import { Link } from "react-router-dom";

export const GameDog: FC = () => {
    return <Link to="/game">
        <img className="w-6" src="/src/assets/literogame_logo.svg" />
    </Link>;
};