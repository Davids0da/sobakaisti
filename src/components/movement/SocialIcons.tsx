import React,{FC} from "react";
import {Link} from "react-router-dom";
import {SocialIcon} from "./SocialIcon";

export const SocialIcons:FC = () => {
    return <div className="flex space-x-2">
        <SocialIcon image_src="/src/assets/facebook-mono.svg" url="https://www.facebook.com/sobakaisti/"/>
        <SocialIcon image_src="/src/assets/instagram-mono.svg" url="https://www.instagram.com/sobakaisti/"/>
        <SocialIcon image_src="/src/assets/youtube-play-mono.svg" url="https://www.youtube.com/channel/UCU-ETcRIXF029UZXLeo7aNQ"/>
        <SocialIcon image_src="/src/assets/twitter-mono.svg" url="https://mobile.twitter.com/sobakaisti"/>
    </div>
};






