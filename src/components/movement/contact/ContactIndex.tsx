import React, {FC, useState} from "react";

import {CircleWithoutLink} from "../CircleWithoutLink";
import {ContactForm} from "./components/ContactForm";
import {MovementDogAndSocialIconsHeader} from "../MovementDogAndSocialIconsHeader";
import {AuthorCircleForContactPage} from "./components/AuthorCircleForContactPage";
import useSWR from "swr";
import {getUsersFetcher} from "../../../api/api";

export const ContactIndexPage: FC = () => {
    const [selectedId, setSelectedId] = useState<null | number>(parseInt(import.meta.env.VITE_DEFAULT_CONTACT_ID));
    const { data } = useSWR("/users" , getUsersFetcher);
    if (!data) {
        return null;

    }

    const half = Math.ceil( data?.length / 2);
    const firstHalf = data?.slice(0, half);
    const secondHalf = data?.slice(half);


    return <div className="h-screen pt-4">
        <MovementDogAndSocialIconsHeader />
        <div className="flex flex-col items-center pt-10">
            <div className="flex items-center w-full">
                <div className="flex justify-end w-full">
                    {firstHalf?.map(user => <AuthorCircleForContactPage setSelectedUserId={setSelectedId} user={user} key={user.id} />)}
                </div>
                <div className="mx-6 flex justify-center">
                    <CircleWithoutLink label="KONTAKT"/>
                </div>
                <div className="flex w-full">
                    {secondHalf?.map(user => <AuthorCircleForContactPage setSelectedUserId={setSelectedId} user={user} key={user.id}  />)}
                </div>
            </div>
            <ContactForm selectedUserId={selectedId} />
        </div>
    </div>;
};