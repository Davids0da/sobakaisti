import axios from "axios";
import { ArticleProps, GameArticleProps, MapProps, ShopProductProps, TagProps, UserProps } from "./types";

const token = "89f83e45519593f702b56784b16de327d36d5238418bc76b723471d4d97f6e8bca5332d0d95983d1898b3ce53bc76339bd28ae65105018ef4951647edacd0d1ac0db53e47d071f95a83bde78848af6fb934bd65b53a92d24eecdf7205b58ac2225525e404d650b53bae1c49958eaa74a66dd680a01d659fb4124077b10d12d7b";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + '/api',
    timeout: 1000,
    headers: { "Authorization": `Bearer ${token}` }
});


export const getArticlesFetcher = (entity: string): Promise<ArticleProps[]> => {
    return instance.get(entity).then(data => data.data.data);
};

export const getArticleFetcher = (entity: string): Promise<ArticleProps> => {
    return instance.get(entity).then(data => data.data.data);
};

export const getProductsFetcher = (entity: string): Promise<ShopProductProps[]> => {
    return instance.get(entity).then(data => data.data.data);
};

export const getProductFetcher = (entity: string): Promise<ShopProductProps> => {
    return instance.get(entity).then(data => data.data.data);
};

export const getMapsFetcher = (entity: string): Promise<MapProps[]> => {
    return instance.get(entity).then(data => data.data.data);
};

export const getMapFetcher = (entity: string): Promise<MapProps> => {
    return instance.get(entity).then(data => data.data.data);
};

export const getUsersFetcher = (entity: string): Promise<UserProps[]> => {
    return instance.get(entity).then(data => data.data);
};

export const getTagsFetcher = (entity: string): Promise<TagProps[]> => {
    return instance.get(entity).then(data => data.data.data)
}

export const getGameArticlesFetcher = (entity: string): Promise<GameArticleProps[]> => {
    return instance.get(entity).then(data => data.data.data)
}

export const getGameArticleFetcher = (entity: string): Promise<GameArticleProps> => {
    return instance.get(entity).then(data => data.data.data)
}

export const getCvFetcher = (entity: string): Promise<CvProps> => {
    return instance.get(entity).then(data => data.data.data)
}

export interface CvProps {
    content: string;
}

export interface FormProps {
    name: string
    email: string
    subject: string
    message: string
    message_to: string
}

export interface CommentProps {
    message: string;
}

export const sendForm = async (formProps: FormProps) => {
    return instance.post("messages", { data: formProps }).then(data => data.data);
};

export const sendComment = async (comment: CommentProps) => {
    return instance.post("comments", { data: comment }).then(data => data.data)
}

export const fechSortedArticles = async () => {
    return instance.get("articles?sort=createdAt:desc").then(data => data.data);
}
