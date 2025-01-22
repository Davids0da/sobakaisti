import React, { FC, useState } from 'react';
import ShareSVG from "/src/assets/share.svg";

export const ArticleShareButton: FC = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyUrl = () => {
        const currentUrl = window.location.href;  // Get the current page URL
        navigator.clipboard.writeText(currentUrl)  // Copy the URL to clipboard
            .then(() => {
                setIsCopied(true);  // Show the message box
                setTimeout(() => setIsCopied(false), 2000);  // Hide after 2 seconds
            })
            .catch(err => {
                alert('Failed to copy URL: ');  // Error handling
            });
    };

    return (
        <div className="relative mt-6">

            {isCopied && (
                <div className="absolute w-48 text-center bottom-full mb-4  p-2 bg-black text-white text-sm rounded-md shadow-lg left-1/2 transform -translate-x-1/2">
                    URL copied to clipboard!
                </div>
            )}


            <a onClick={handleCopyUrl} href="javascript:void(0)">
                <div className="hover:scale-110 duration-200 grid place-items-center h-10 w-10 mb-6 rounded-full ring-2 ring-white border-black border-solid border">
                    <img className="h-4 w-4" src={ShareSVG} alt="Share" />
                </div>
            </a>
        </div>
    );
};
