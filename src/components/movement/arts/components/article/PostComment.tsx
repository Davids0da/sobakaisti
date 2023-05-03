import { FC, useState } from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { getArticleFetcher, sendComment } from "../../../../../api/api";
import { useParams } from "react-router-dom";

export const PostComment: FC = () => {
    const [status, setStatus] = useState("Postavi komentar");
    const { register, reset, setValue, handleSubmit, watch, formState: { errors } } = useForm();

    const params = useParams();
    const { data, mutate } = useSWR(`/articles/${params.slug}?populate=*`, getArticleFetcher);
    const articleId = data?.id;

    async function onSubmit(data: any) {
        data.published_date = new Date();
        data.article = { id: articleId };
        data.approved = false;
        await sendComment(data);
        mutate()
        setStatus("Komentar je postavljen!")
        reset()
        setTimeout(function () {
            setStatus("Postavi novi komentar")
        }, 3000);
    }

    return <div className={`w-full flex flex-col items-center`}>
        <div className="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900"
                                        id="modal-title">Poruka poslata</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">Naš junak će se ubrzo javiti Vama. Hvala vam!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div id="ime" className="mt-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Ime
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input required
                        type="text"
                        {...register("name")}
                        className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm"
                        placeholder="Unesite vaše ime"
                    />
                </div>
            </div>
            <div id="tekst-poruke" className="mt-4">
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                    Tekst Komentara
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <textarea required
                        type="text"
                        {...register("comment")}
                        className="text-area block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-green-600 focus:ring-green-600 sm:text-sm"
                        placeholder="Unesite vaš komentar"
                    />
                </div>
            </div>
            <button disabled={status === `Komentar je postavljen!`} type="submit" className="bg-cyan-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-4">
                {status}
            </button>
        </form>
    </div>
};
