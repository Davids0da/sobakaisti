import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SocialIcons } from "./SocialIcons";
import MovementLogo from "/src/assets/movement_logo.svg";

export const MovementFooter: FC = () => {
    return <footer className="p-4 mt-16 bg-white sm:p-6">
        <div className="md:flex md:justify-between">
            <div className="mb-10 md:mb-0">
                <a href="/movement" className="flex items-center">
                    <img src={MovementLogo} className="h-24 mr-3" alt="Sobakaisti Logo" />
                </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Radovi</h2>
                    <ul className="text-gray-600">
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/movement/arts/music`}>Muzika</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/movement/arts/photography`}>Fotografija</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/movement/arts/literature`}>Literatura</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/movement/arts/video`}>Video</Link>
                        </li>
                        <li>
                            <Link className="hover:underline" to={`/movement/arts/music`}>Music</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Posetite</h2>
                    <ul className="text-gray-600">
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/movement/manifesto`}>Manifest</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/movement/authors`}>Autori</Link>
                        </li>
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/movement/publications`}>Izdanja</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Kontakt</h2>
                    <ul className="text-gray-600 ">
                        <li className="mb-4">
                            <Link className="hover:underline" to={`/movement/contact`}>Kontakt forma</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">© 2025 <a href="/movement"
                className="hover:underline">Sobakaisti</a>. All Rights Reserved.
            </span>
            <span className="max-[768px]:hidden">
            <SocialIcons />
            </span>
        </div>
    </footer>
};