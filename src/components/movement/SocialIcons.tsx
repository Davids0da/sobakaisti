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
        {switcher && <SocialIcon image_src={BuyMeCoffee} url="https://ko-fi.com/sobakaisti" />}
        {switcher && <SocialIcon image_src={InstagramIcon} url="https://patreon.com/Sobakaisti" />}
        {switcher && <SocialIcon image_src={TwitterIcon} url="https://discord.gg/24ZAUr7Q" />}
        {switcher && <SocialIcon image_src={FacebookMono} url="https://linktr.ee/sobakaisti" />}
     
    </div>
};







