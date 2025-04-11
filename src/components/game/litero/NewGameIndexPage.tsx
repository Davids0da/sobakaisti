import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import { GameFooter } from "../GameFooter";
import { getGameArticlesFetcher } from "../../../api/api";

export const NewGameIndexPage: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const type = "igrarnik";
    const { data } = useSWR(
        `/game-articles?filters[type][$eq]=${type}&populate=*&sort=createdAt:desc`,
        getGameArticlesFetcher
    );
    const articleListNames = data?.map((data) => data?.attributes.title);

    const handleButtonClick = () => {
        console.log("Button clicked!"); // Debugging line to see if the button click is triggered

        const trimmedInput = inputValue.trim();

        if (trimmedInput && articleListNames?.includes(trimmedInput)) {
            window.location.href = `/game/litero-game/game-zone/${trimmedInput}`;
        } else {
            console.log("Šifra ne postoji ili je prazna.");
        }
    };

    useEffect(() => {
        // Adding event listener for mobile touchstart events
        const button = document.getElementById("navigateButton");

        if (button) {
            button.addEventListener("touchstart", handleButtonClick); // Handling touch event
        }

        // Cleanup the event listener when the component is unmounted
        return () => {
            if (button) {
                button.removeEventListener("touchstart", handleButtonClick);
            }
        };
    }, []);

    if (!data) {
        return <div>Loading...</div>; // Loading state while data is being fetched
    }

    return (
        <div className="bg-white">
            <GameDogAndSocialIconsHeader />
            <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="font-sobakaisti text-center text-3xl mb-16">Unesi šifru</h1>

                <input
                    type="text"
                    className="font-sobakaisti text-orange-600 focus:outline-offset-2 text-2xl border-2 text-center border-black"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Unesi šifru"
                />

                <div className="flex justify-center">
                    <button
                        id="navigateButton"
                        className="mt-8 font-sobakaisti border-2 p-2 border-black"
                        onClick={handleButtonClick}
                    >
                        Pronađi skrivenu stranicu
                    </button>
                </div>
            </div>
            <GameFooter />
        </div>
    );
};
