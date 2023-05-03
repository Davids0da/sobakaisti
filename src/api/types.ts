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
    title: string
    slug: string
    updatedAt: string
    article_image: string
    article_type: string
    views: number
    user: {
        data: {
            attributes: UserProps
            id: number
        }
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
    slug: string
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

export interface ShopProductProps {
    attributes: ShopProductAttributesProps;
    id: string;
 }

 export interface ShopProductAttributesProps { 
    title: string;
    about: string; 
    price: number;
    night: boolean;
    image: string;
    short_about: string;
 }

 export interface MapProps { 
    attributes: MapAttributesProps;
    id: string;
 }

 export interface MapAttributesProps { 
    content: string;
    map_lang: number;
    map_lat: number;
    zoom: number;
    short_about: string;
    image: string;
 }

 export interface TagProps {
    attributes: TagAttributsProps;
    id: string;
 }

 export interface TagAttributsProps {
    name: string;
    about: string;
    slug: string;
 }

 export interface GameArticleProps { 
    attributes: GameArticleAttributeProps;
    id: string;
 }

 export interface GameArticleAttributeProps { 
    title: string;
    about: string;
    slug: string; 
    type: string;
    short_about: string;
    image: {
        data: {
            attributes: {
                name: string;
                url: string;
            }
        }
    };
 }