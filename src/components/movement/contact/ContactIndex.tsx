import React, { FC } from "react";

import {CircleWithoutLink} from "../CircleWithoutLink";
import {ContactForm} from "./ContactForm";
import {MovementDog} from "../MovementDog";
import {SocialIcons} from "../SocialIcons";
import {MovementDogAndSocialIconsHeader} from "../MovementDogAndSocialIconsHeader";
import {AuthorCircleForContactPage} from "./AuthorCircleForContactPage";
import useSWR from "swr";
import {getUsersFetcher} from "../../../api/api";
import {ArticleCard} from "../arts/ArticleCard";
import {UserProps} from "../../../api/types";

export const ContatctPage: FC = () => {

    const { data } = useSWR("/users" , getUsersFetcher);
    if (!data) {
        return null
    }
    const half = Math.ceil( data?.length / 2);
    const firstHalf = data?.slice(0, half);
    const secondHalf = data?.slice(half);

    return <div className="h-screen container px-72 pt-4">
        <MovementDogAndSocialIconsHeader />
        <div className="flex flex-col items-center pt-10">
            <div className="flex items-center w-full">
                <div className="flex justify-end w-full">
                    {firstHalf?.map(user => <AuthorCircleForContactPage user={user} key={user.id} />)}
                </div>
                <div className="mx-6 flex justify-center">
                    <CircleWithoutLink label="KONTAKT"/>
                </div>
                <div className="flex w-full">
                    {secondHalf?.map(user => <AuthorCircleForContactPage user={user} key={user.id}  />)}
                </div>
            </div>
        <ContactForm />
    </div>
    </div>
};