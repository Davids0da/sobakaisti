import React, { useState, FC } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface GameTagsProps {
    tag: string;
}


export const GameTagsComponent: FC<GameTagsProps> = ({ tag }) => {
    return <Link className={`pr-1 text-cyan-600 hover:text-cyan-500`} to={`/game/litero-game/hashtags/tags/${tag}`}>  {'#' + tag}</Link>
}