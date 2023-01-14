import React, { FC } from "react";
import {MovementDogAndSocialIconsHeader} from "../MovementDogAndSocialIconsHeader";
import useSWR from "swr";
import {getUsersFetcher} from "../../../api/api";
import {AuthorCircleForContactPage} from "../contact/components/AuthorCircleForContactPage";
import {CircleWithoutLink} from "../CircleWithoutLink";
export const AuthorsIndexPage:FC = () => {

    const { data } = useSWR("/users" , getUsersFetcher);
    if (!data) {
        return null;
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
                    <CircleWithoutLink label="AUTORI"/>
                </div>
                <div className="flex w-full">
                    {secondHalf?.map(user => <AuthorCircleForContactPage user={user} key={user.id}  />)}
                </div>
            </div>
        </div>
        <div className='mt-14 flex flex-col place-items-center'>
            <div className='flex justify-center w-80 h-16 bg-amber-50 place-items-center shadow-lg'>
                <h1 className="font-bold"> Andrea Kane </h1>
            </div>
            <div className='mt-10 px-4 py-6 w-80 bg-amber-100 flex flex-col shadow-lg bg-amber-50'>
                <p className=""> Nekrunisani princ Studenjaka, rokenrol novinar, putopisac, pesnik i strastveni varilac. Objavljivao muzičku kritiku i eseje na sajtovima Pobuna umetnosti, HellyCherry, Hemp Humans, Rockomotiva, Muzički Džep, Liman Crew, a od 2015-te urednik i autor na sajtu „Šta slušam, a šta mi se dešava“.
                </p>
                <a className='mt-3'>kanespiridon@gmail.com</a>
                <p className=""> Dezio, Italia
                </p>
                <p className=""> 10. Oct 1989.
                </p>
                <p className="mt-3"> Društvene mreže:
                </p>
                <p className="mt-3"> Instagram: kane_spiridon
                </p>
                <a>Kane Spinorlino</a>
                <a>Kane Spinorlino</a>
                <a>Kane Andrea</a>
            </div>
        </div>
    </div>;
};