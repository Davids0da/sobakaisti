import React, { useState, FC } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface TagsProps {
    tag: string;
}
export const TagsComponent: FC<TagsProps> = ({ tag }) => {
    return <Link className={`pr-1 text-cyan-600 hover:text-cyan-500`} to={`/movement/articles/tags/${tag}`}>  {`#` + tag}</Link>
}
