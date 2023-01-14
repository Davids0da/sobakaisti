import React,{FC} from "react";

interface SocialIconProps {
    url: string
    image_src: string
}
export const SocialIcon:FC<SocialIconProps> = ({url, image_src}) => {
    return <a href={url}>
        <div className="grid place-items-center h-8 w-8 rounded-full ring-2 ring-white border-black border-solid border">
        <img className="h-4 w-4"
             src={image_src}
             alt="" />
        </div>
    </a>;
}