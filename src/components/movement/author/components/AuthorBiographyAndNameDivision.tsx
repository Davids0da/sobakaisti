import React, { FC } from "react";
import { UserProps } from "../../../../api/types";
import { Link } from "react-router-dom";
import InstagramIcon from "/src/assets/instagram.svg";
import { SocialIconAuthors } from "../../SocialIconAuthors";
import FacebookIcon from "/src/assets/facebook.svg"



interface UserProps232 {
    user: UserProps;
}


export const AuthorBiographyAndNameDivision: FC<UserProps232> = ({ user }) => {
    console.log(user);
    const ApiUrl = import.meta.env.VITE_BASE_URL;

    function createMarkup() {
        const htmlContent = { __html: user?.about };
        const re = /<img src="/gm
        const newStr = htmlContent.__html?.replace(re, `<img src="${ApiUrl}`) || "";
        const htmlContentRender = { __html: newStr };
        return htmlContentRender
    }

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('de-DE'); // German format: DD.MM.YYYY
    };

    return <div className='mt-10 flex flex-col place-items-center'>
        <div className='rounded-xl flex justify-center w-80 h-16 bg-amber-100 place-items-center shadow-lg'>
            <h4 className="font-bold"> {user.first_name + ` ` + user.last_name} </h4>
        </div>
        <div className='rounded-xl mt-10 px-4 py-6 w-80 bg-amber-100 flex flex-col shadow-lg'>
            <p dangerouslySetInnerHTML={createMarkup()} />
            <br></br>
            <p className=""> {user.birth_location}
            </p>
            <br></br>
            <p className=""> {formatDate(user.date_of_birth) + '.'}
            </p>
            <div className="flex space-x-2 mt-4">
                {user.soc_instagram != null && (
                    <SocialIconAuthors image_src={InstagramIcon} url={`https://instagram.com/${user.soc_instagram}`} />
                )}
                {user.soc_facebook != null && (
                    <SocialIconAuthors image_src={FacebookIcon} url={`https://facebook.com/${user.soc_facebook}`} />
                )}
            </div>
        </div>
    </div>
};