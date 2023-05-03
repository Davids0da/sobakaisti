import { FC } from "react";
import { Link } from "react-router-dom";

interface GameListItemsProps {
    image_url: string,
    title: string,
    short_about: string,
    slug: string
}

export const GameListItem: FC<GameListItemsProps> = ({ image_url, title, short_about, slug }) => {

    const ApiUrl = "http://localhost:1337";

    return <Link to={slug}><div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src={ApiUrl + image_url} alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-lg font-sobakaisti">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{short_about}</p>
            </div>
        </div>
    </div>
    </Link>
}