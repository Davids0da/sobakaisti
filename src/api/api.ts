import axios, {AxiosResponse} from "axios";
import {ArticleProps, StrapiResponseForArticle, UserProps} from "./types";

const token = "89f83e45519593f702b56784b16de327d36d5238418bc76b723471d4d97f6e8bca5332d0d95983d1898b3ce53bc76339bd28ae65105018ef4951647edacd0d1ac0db53e47d071f95a83bde78848af6fb934bd65b53a92d24eecdf7205b58ac2225525e404d650b53bae1c49958eaa74a66dd680a01d659fb4124077b10d12d7b";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000,
    headers: {"Authorization": `Bearer ${token}`}
});


export const getArticlesFetcher = (entity: string): Promise<ArticleProps[]> => {
    return instance.get(entity).then(data => data.data.data);
};

export const getUsersFetcher = (entity: string): Promise<UserProps[]> => {
    return instance.get(entity).then(data => data.data);
};

export interface FormProps {
    name: string
    email: string
    subject: string
    message: string
    emailTo: string
}

export const sendForm = async (formProps: FormProps) => {
    return instance.post("mail", formProps).then(data => data.data);
};