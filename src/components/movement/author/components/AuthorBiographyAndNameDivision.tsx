import React, {FC} from "react";
import {UserProps} from "../../../../api/types";
import {Link} from "react-router-dom";

interface UserProps232 {
    user: UserProps;
}
export const AuthorBiographyAndNameDivision:FC<UserProps232> = ({user}) => {
    return <div className='mt-10 flex flex-col place-items-center'>
        <div className='rounded-xl flex justify-center w-80 h-16 bg-amber-100 place-items-center shadow-lg'>
            <h1 className="font-bold"> {user.first_name + ` ` + user.last_name} </h1>
        </div>
        <div className='rounded-xl mt-10 px-4 py-6 w-80 bg-amber-100 flex flex-col shadow-lg'>
            <p className=""> {user.about}
            </p>
            <a className='mt-3'>{user.email}</a>
            <p className=""> {user.birth_location}
            </p>
            <p className=""> {user.date_of_birth}
            </p>
            <p className="mt-3"> Društvene mreže:
            </p>
            <Link to={`www.instagram.com/${user.soc_instagram}`} className="mt-3"> {user.soc_instagram}
            </Link>
            <a>{user.soc_facebook}</a>
            <a>{user.soc_flickr}</a>
        </div>
    </div>
};