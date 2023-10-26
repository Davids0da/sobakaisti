import React, { FC, useState } from "react";
import { SocialIcon } from "./SocialIcon";
import BuyMeCoffee from "/src/assets/buymecfe.svg";
import TwitterIcon from "/src/assets/twitter-mono.svg";
import YoutubeIcon from "/src/assets/youtube-play-mono.svg";
import InstagramIcon from "/src/assets/instagram-mono.svg";
import FacebookMono from "/src/assets/facebook-mono.svg";
import SocialIconSVG from "/src/assets/social.svg";


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
                    src={SocialIconSVG}
                    alt="" />
            </div>
        </button>}
        {switcher && <SocialIcon image_src={FacebookMono} url="https://www.facebook.com/sobakaisti/" />}
        {switcher && <SocialIcon image_src={InstagramIcon} url="https://www.instagram.com/sobakaisti/" />}
        {switcher && <SocialIcon image_src={YoutubeIcon} url="https://www.youtube.com/channel/UCU-ETcRIXF029UZXLeo7aNQ" />}
        {switcher && <SocialIcon image_src={TwitterIcon} url="https://mobile.twitter.com/sobakaisti" />}
        {switcher && <SocialIcon image_src={BuyMeCoffee} url="https://www.buymeacoffee.com/sobakaisti" />}
    </div>
};







