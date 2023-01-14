export interface ArticleProps {
    attributes: ArticleAtributesProps,
    id: string
}

interface ArticleAtributesProps {
    id: string;
    content : string
    createdAt : string
    publishedAt : string
    published_date : string
    tags: string
    title: string
    updatedAt: string
    user: {
        data: UserProps
    }
}

export interface UserProps {
    id: number
    about: string
    birth_location: string
    blocked: boolean
    confirmed: boolean
    createdAt: string
    date_of_birth: string
    email: string
    first_name: string
    last_name: string
    provider: string
    soc_facebook: null
    soc_flickr: null
    soc_instagram: null
    updatedAt: string
    username: string
    website: string
}


export interface StrapiResponseForArticle {
    data: ArticleProps[]
}