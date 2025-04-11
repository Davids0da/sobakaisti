import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import { GameFooter } from "../GameFooter";
import { getGameArticlesFetcher } from "../../../api/api";

export const NewGameIndexPage: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    const params = useParams();

    const type = "igrarnik";
    const { data } = useSWR(`/game-articles?filters[type][$eq]=${type}&populate=*&sort=createdAt:desc`, getGameArticlesFetcher);
    const articleListNames = data?.map( data => data?.attributes.title);
    console.log(articleListNames)

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            // Trim the input value and check if it's not blank
            const trimmedInput = inputValue.trim();
            
            // If the input is not empty, navigate to the page
            if (trimmedInput !== "" && articleListNames?.includes(trimmedInput)) {
                navigate(`/game/litero-game/game-zone/${trimmedInput}`);
            } else {
                // Optionally, show some feedback to the user that the input is empty
                console.log("Input cannot be empty or false!");
            }
        }
    };

    return (
        <div className="bg-white">
            <GameDogAndSocialIconsHeader />
            <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="font-sobakaisti text-center text-3xl mb-16">Unesi šifru</h1>
                <input
                    className="font-sobakaisti text-orange-600 focus:outline-offset-2 text-2xl border-2 text-center border-black"
                    name="myInput"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Unesi šifru i pritisni Enter"
                />
            </div>
            <GameFooter />
        </div>
    );
};
