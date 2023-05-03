import {UserProps} from "./api/types";

export function generateFullName(user: null | UserProps) {
    if(!user) return "";
    return user.first_name + " " + user.last_name;
}

export function generateInitials(user: null | UserProps) {
    if(!user) return "";
    return user.first_name.split("")[0] + "." + user.last_name.split("")[0] + ".";
}
