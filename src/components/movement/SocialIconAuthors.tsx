import React, { FC } from "react";

interface SocialIconProps {
    url: string
    image_src: string
}
export const SocialIconAuthors: FC<SocialIconProps> = ({ url, image_src }) => {
    return <a href={url}>
        <div className="hover:scale-110 duration-200 grid place-items-center h-8 w-8 rounded-full border-black border-solid border">
            <img className="h-4 w-4"
                src={image_src}
                alt="" />
        </div>
    </a>;
}