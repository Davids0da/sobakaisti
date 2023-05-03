import { FC } from "react";
import { ArticleProps } from "../../../../../api/types";
import { AuthorCircleForArticleCard } from "./AuthorCircleForArticleCard";
import { formatDistance } from "date-fns";
import { srLatn } from "date-fns/locale";
import { Link } from "react-router-dom";

interface ArticleInCardProps {
    article: ArticleProps
}
export const ArticleCard: FC<ArticleInCardProps> = ({ article }) => {

    const publishedDate = formatDistance(new Date(article.attributes.publishedAt), new Date(), { addSuffix: true, locale: srLatn })
    const ApiUrl = "http://localhost:1337";

    return <div className="flex h-48 lg:w-1/2 sm:w-full mb-6 border border-gray-200 shadow-md lighy:border-gray-700 bg-white">
        <Link className="w-2/5 flex" to={`/movement/articles/${article.attributes.slug}`}>
            <img className={`w-full object-cover`} src={ApiUrl + article.attributes.article_image.data[0].attributes.url} />
        </Link>
        <div className="p-4 w-3/5 flex flex-col">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900"><Link to={`/movement/articles/${article.attributes.slug}`}>{article.attributes.title}</Link></h3>
            <p className="mb-5 text-sm font-light dark:text-gray-400  truncate ...">{article.attributes.short_about}</p>
            <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center">
                    <AuthorCircleForArticleCard user={article.attributes.user.data.attributes} />
                    <div>
                        <h6 className="text-sm text-cyan-600">
                            <Link to={`/movement/authors/${article.attributes.user.data.attributes.slug}`}> {article.attributes.user.data.attributes.first_name + " " + article.attributes.user.data.attributes.last_name} </Link>
                        </h6>
                        <h6 className="text-sm">
                            {publishedDate}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
};