import React, { FC } from "react";


export const AboutAuthors: FC = () => {

    return <div>
        <div className={`flex max-[768px]:hidden justify-center pt-12 pb-6`}>
            <div className="absolute left-1/2 w-0.5 h-3/5 bg-gray-200"></div>
            <div id={`left`} className={`mr-20`}>
                <div className='rounded-xl flex justify-center w-80 bg-amber-100 place-items-center shadow-lg'>
                    <p className="p-4">“ Mi smo Sobakaisti. Nismo se udružili iz političkih razloga, nije nas nikakva propaganda spojila, ne drže nas nacionalne ni verske stege, ništa tako jeftino kao krv nas ne spaja, novcu se ne klanjamo.</p>
                </div>
                <div className='mt-12 rounded-xl flex justify-center w-80  bg-amber-100 place-items-center shadow-lg'>
                    <p className="p-4">“ Nismo se okupili oko jedne zastave, niti nas je ista zvezda vodila do ovog mesta.</p>
                </div>
                <div className='mt-12 rounded-xl flex justify-center w-80  bg-amber-100 place-items-center shadow-lg'>
                    <p className="p-4">“ Mi smo psi što besno grizu za umetnost, mi smo čuvari bogate riznice svetske kulturne tradicije, mi smo vodiči onima što ne znaju za ovaj put.</p>
                </div>
            </div>
            <div id={`right`}>
                <div className='mt-16 rounded-xl flex justify-center w-80  bg-amber-100 place-items-center shadow-lg'>
                    <p className="p-4">“ Mi smo svi davljenici u moru banalne svakodnevice, a ovaj kružok je naše ostrvo, naša mala ada, naša luka u koju pristajemo da se odmorimo, jer život je prokleto dug, a more je retko mirno.</p>
                </div>

                <div className='mt-12 rounded-xl flex justify-center w-80  bg-amber-100 place-items-center shadow-lg'>
                    <p className="p-4">“  Svaki od nas je svoj njuh pratio da bi došao dovde.</p>
                </div>
                <div className='mt-12 rounded-xl flex justify-center w-80  bg-amber-100 border-2 place-items-center shadow-lg'>
                    <p className="p-4">“ lajemo na one što srljaju u trivijalnost postojanja, lajemo na debele mešine što nisu gladne umetnosti.</p>
                </div>
            </div>
        </div>
        <div className={`flex flex-col sm:hidden items-center `}>
            <div className=' rounded-xl mt-12 flex justify-center w-80 bg-amber-100 place-items-center shadow-lg'>
                <p className="p-4">“ Mi smo Sobakaisti. Nismo se udružili iz političkih razloga, nije nas nikakva propaganda spojila, ne drže nas nacionalne ni verske stege, ništa tako jeftino kao krv nas ne spaja, novcu se ne klanjamo.</p>
            </div>
            <div className='mt-12 rounded-xl flex justify-center w-80  bg-amber-100 place-items-center shadow-lg'>
                <p className="p-4">“ Nismo se okupili oko jedne zastave, niti nas je ista zvezda vodila do ovog mesta.</p>
            </div>
            <div className='mt-12 rounded-xl flex justify-center w-80  bg-amber-100 place-items-center shadow-lg'>
                <p className="p-4">“ Mi smo psi što besno grizu za umetnost, mi smo čuvari bogate riznice svetske kulturne tradicije, mi smo vodiči onima što ne znaju za ovaj put.</p>
            </div>
            <div className='mt-12 rounded-xl flex justify-center w-80  bg-amber-100 place-items-center shadow-lg'>
                <p className="p-4">“ Mi smo svi davljenici u moru banalne svakodnevice, a ovaj kružok je naše ostrvo, naša mala ada, naša luka u koju pristajemo da se odmorimo, jer život je prokleto dug, a more je retko mirno.</p>
            </div>

            <div className='mt-12 rounded-xl flex justify-center w-80  bg-amber-100 place-items-center shadow-lg'>
                <p className="p-4">“  Svaki od nas je svoj njuh pratio da bi došao dovde.</p>
            </div>
            <div className='mt-12 rounded-xl flex justify-center w-80  bg-amber-100 place-items-center shadow-lg'>
                <p className="p-4">“ lajemo na one što srljaju u trivijalnost postojanja, lajemo na debele mešine što nisu gladne umetnosti.</p>
            </div>
        </div>
    </div>
};