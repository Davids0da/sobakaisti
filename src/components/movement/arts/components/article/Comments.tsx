import React, { FC } from "react";
import { formatDistance } from "date-fns";
import { srLatn } from "date-fns/locale";

interface CommentsProps {
    comment: {}
}
export const Comments: FC<CommentsProps> = ({ comment }) => {
    const publishedDate = formatDistance(new Date(comment.publishedAt), new Date(), { addSuffix: true, locale: srLatn })

    return <div className="antialiased w-full mt-4">
        <div className="space-y-4">

            <div className="flex">
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>{comment.name}</strong> <span className="text-xs text-gray-400">Postavljeno {publishedDate}.</span>
                    <p className="text-sm">
                        {comment.comment}
                    </p>
                </div>
            </div>
        </div>
    </div>
}