import { FC, useState } from "react";
import { CircleWithoutLink } from "../CircleWithoutLink";
import { ContactForm } from "./components/ContactForm";
import { MovementDogAndSocialIconsHeader } from "../MovementDogAndSocialIconsHeader";
import { AuthorCircleForContactPage } from "./components/AuthorCircleForContactPage";
import useSWR from "swr";
import { getUsersFetcher } from "../../../api/api";
import { MovementFooter } from "../MovementFooter";

export const ContactIndexPage: FC = () => {
    const [selectedId, setSelectedId] = useState<1 | number>(parseInt(import.meta.env.VITE_DEFAULT_CONTACT_ID));
    const { data } = useSWR("/users?sort=first_name:asc", getUsersFetcher);
    if (!data) {
        return null;
    }

    const half = Math.ceil(data?.length / 2);
    const firstHalf = data?.slice(0, half);
    const secondHalf = data?.slice(half);

    return <div className="h-screen">
        <MovementDogAndSocialIconsHeader />
        <div className="flex flex-col items-center pt-10">
            <div className="flex items-center w-full">
                <div className="flex justify-end w-full">
                    {firstHalf?.map(user => <AuthorCircleForContactPage setSelectedUserId={setSelectedId} user={user} key={user.id} selectedId={selectedId} />)}
                </div>
                <div className="mx-6 flex justify-center">
                    <CircleWithoutLink article_or_user={true} label="KONTAKT" />
                </div>
                <div className="flex w-full">
                    {secondHalf?.map(user => <AuthorCircleForContactPage setSelectedUserId={setSelectedId} user={user} key={user.id} selectedId={selectedId} />)}
                </div>
            </div>
            <ContactForm selectedUserId={selectedId} />
        </div>
        <MovementFooter />
    </div>;
};