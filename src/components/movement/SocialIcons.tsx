import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "./SocialIcon";

export const SocialIcons: FC = () => {

    const [switcher, setSwitcher] = useState(false);

    const switchForSocial = () => {
        setSwitcher(true);
        setTimeout(() => {
            setSwitcher(false);
        }, 5000);
    }

    return <div className="flex space-x-2">
        {!switcher && <button onClick={() => switchForSocial()}>
            <div className="hover:scale-110 duration-200 grid place-items-center h-8 w-8 rounded-full ring-2 ring-white border-black border-solid border">
                <img className="h-4 w-4"
                    src="/src/assets/social.svg"
                    alt="" />
            </div>
        </button>}
        {switcher && <SocialIcon image_src="/src/assets/facebook-mono.svg" url="https://www.facebook.com/sobakaisti/" />}
        {switcher && <SocialIcon image_src="/src/assets/instagram-mono.svg" url="https://www.instagram.com/sobakaisti/" />}
        {switcher && <SocialIcon image_src="/src/assets/youtube-play-mono.svg" url="https://www.youtube.com/channel/UCU-ETcRIXF029UZXLeo7aNQ" />}
        {switcher && <SocialIcon image_src="/src/assets/twitter-mono.svg" url="https://mobile.twitter.com/sobakaisti" />}
        {switcher && <SocialIcon image_src="/src/assets/buymecfe.svg" url="https://www.buymeacoffee.com/sobakaisti" />}
    </div>
};







