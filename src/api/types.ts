export interface ArticleProps {
    attributes: ArticleAtributesProps,
    id: string
}

interface ArticleAtributesProps {
    short_about: string;
    id: string;
    content: string
    createdAt: string
    publishedAt: string
    published_date: string
    title: string
    slug: string
    comments: CommentsProps;
    updatedAt: string
    article_image: ImagesProps;
    article_type: string
    views: number
    tags: {
        data: {
            attributes: {
                name: string;
            }
        }[];
    };
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
    image: ImagesProps;
    short_about: string;
    expiration_date: string;
    published_date: string;
    day: boolean;
    slug: string;
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
    image: ImagesProps;
    title: string;
    slug: string;
    markers: MarkersProps;
}

export interface MarkersProps {
    data: {
        id: number;
        attributes: {
            title: string;
            marker_type: string;
            marker_lat: number;
            marker_lang: number;
            about: string;
        }
    }[]
};


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
    image: ImageProps;
    tags: {
        data: {
            attributes: {
                name: string;
            }
        }[];
    }; 
}

export interface ImageProps {
    data: {
        attributes: {
            name: string;
            url: string;
        }
    };
}

export interface ImagesProps {
    data: {
        id: number;
        attributes: {
            name: string;
            url: string;
            createdAt: string;
        }
    }[]
}

// ne radi jos uvek proveriti
export interface SelectedMarkerProps {
    attributes: {};
    id: number;
}

export interface CommentsProps {
    data: CommentProps[]
}


export interface CommentProps {
    id?: number;
    attributes: {
        publishedAt: string;
        name: string;
        comment: string;
    }
}


export interface CvProps {
    content: string;
    attributes: {
        content: string;
    }
}


export interface ArticleImageCarouseleProps {
    images: {
        id: number;
        attributes: {
            createdAt: string;
            url: string;
        }
    }[]
}

export interface ArticleInCardProps {
    article: ArticleProps;
}