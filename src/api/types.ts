interface ArticleProps {
    content : string
    createdAt : string
    publishedAt : string
    published_date : string
    tags: string
    title: string
    updatedAt: string
}

export interface StrapiResponseForArticle {
    data: ArticleProps[]
}