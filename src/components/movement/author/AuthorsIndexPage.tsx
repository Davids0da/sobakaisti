import React, { FC, useState } from "react";
import { MovementDogAndSocialIconsHeader } from "../MovementDogAndSocialIconsHeader";
import useSWR from "swr";
import { getUsersFetcher } from "../../../api/api";
import { AuthorCircleForContactPage } from "../contact/components/AuthorCircleForContactPage";
import { CircleWithoutLink } from "../CircleWithoutLink";
import { MovementFooter } from "../MovementFooter";
import { AuthorBiographyAndNameDivision } from "./components/AuthorBiographyAndNameDivision";
import { UserProps } from "../../../api/types";
import { AboutAuthors } from "./components/AboutAuthors";
import { useParams } from "react-router-dom";
import { AuthorCircleForAUthorsPage } from "./components/AuthorCircleForAuthorsPage";
export const AuthorsIndexPage: FC = () => {

    const [selectedId, setSelectedId] = useState(0);
    const params = useParams();

    const { data } = useSWR("/users", getUsersFetcher);
    if (!data) {
        return null;
    }
    const half = Math.ceil(data?.length / 2);
    const firstHalf = data?.slice(0, half);
    const secondHalf = data?.slice(half);

    const selectedUser = data.find(user => user.slug === params.slug);

    if(!selectedUser) {
        return null;
    }

    const circleLabel = "AUTORI";

    const getInitialsWithDots = (user: UserProps) => {
        return user.first_name[0].toUpperCase() + "." + user.last_name[0].toUpperCase() + ".";
    };

    return <div className="h-screen">
        <MovementDogAndSocialIconsHeader />
        <div className="flex flex-col items-center pt-10">
            <div className="flex items-center w-full">
                <div className="flex justify-end w-full">
                    {firstHalf?.map(user => <AuthorCircleForAUthorsPage setSelectedUserId={setSelectedId} user={user} key={user.id} selectedId={selectedId} />)}
                </div>
                <div className="mx-6 flex justify-center">
                    {params.slug === undefined && <CircleWithoutLink article_or_user={true} label={circleLabel} />}
                    {params.slug !== undefined && <CircleWithoutLink article_or_user={false} label={getInitialsWithDots(selectedUser)} />}
                </div>
                <div className="flex w-full">
                    {secondHalf?.map(user => <AuthorCircleForAUthorsPage setSelectedUserId={setSelectedId} user={user} key={user.id} selectedId={selectedId} />)}
                </div>
            </div>
        </div>
        <div className="w-full">
            {params.slug !== undefined && <AuthorBiographyAndNameDivision user={selectedUser} />}
            {params.slug === undefined && <AboutAuthors />}
        </div>
        <MovementFooter />
    </div>;
};