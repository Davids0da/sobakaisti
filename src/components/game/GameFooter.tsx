import { FC } from "react";
import { Link } from "react-router-dom";
import { SocialIcons } from "../movement/SocialIcons";
import LiteroGameLogo from "/src/assets/literogame_logo.svg"

export const GameFooter: FC = () => {

    const currentYear: number = new Date().getFullYear();

    return <footer className="p-4 md:mt-16 sm:mt-2 bg-white sm:p-6">
        <div className="md:flex md:justify-between">
            <div className="mb-10 md:mb-0 sm:hidden">
                <a href="/game" className="flex items-center">
                    <img src={LiteroGameLogo} className="h-24 mr-3" alt="Sobakaisti Logo" />
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-xl font-semibold font-sobakaisti text-gray-900 uppercase">Litero-igra</h2>
                    <ul className="text-gray-600">
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/game/litero-game/campaign`}>Pohod</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/game/litero-game/game-zone`}>Igrarnik</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/game/litero-game/vocabulary`}>Rečnik</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-xl font-semibold font-sobakaisti text-gray-900 uppercase">Txt</h2>
                    <ul className="text-gray-600">
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/game/txt/dnevnik`}>Dnevnik</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/game/txt/svastara`}>Svaštara</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/game/txt/cv`}>CV</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/game/txt/random`}>X = ?</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-xl font-semibold font-sobakaisti text-gray-900 uppercase">Kontakt</h2>
                    <ul className="text-gray-600 ">
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/game/contact`}>Kontakt forma</Link>
                        </li>
                        {/* <li>
                            <a href="mailto:sobaka.stefan@gmail.com" className="hover:underline">sobaka.stefan@gmail.com</a>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="mb-6 md:mb-0">
                <a href="/game" className="flex max-[768px]:hidden items-center">
                    <img src={LiteroGameLogo} className="h-24 mr-3" alt="Sobakaisti Logo" />
                </a>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">© {currentYear} <a href="/movement"
                className="hover:underline">Sobakaisti</a>. All Rights Reserved.
            </span>
            <span className="max-[768px]:hidden">
                <SocialIcons />
            </span>
        </div>
    </footer>
};