import React, {FC, useState} from "react";
import {generateFullName} from "../../../../utilties";
import useSWR from "swr";
import {getUsersFetcher} from "../../../../api/api";
import {useForm} from "react-hook-form";


interface ContactFormProps {
    selectedUserId: null | number
}

export const ContactForm: FC<ContactFormProps> = ({ selectedUserId }) => {
    const [status, setStatus] = useState("Submit");
    const { data } = useSWR("/users" , getUsersFetcher);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    console.log(selectedUserId, data);
    const selectedUser = data?.find(u => u.id === selectedUserId) || null;
    console.log(selectedUser);

    function onSubmit(data: any) {
        console.log(data);
    }

    return (
        <form className="w-1/2 pt-10" onSubmit={handleSubmit(onSubmit)}>
            <div id="prima">
                <label htmlFor="prima" className="block text-sm font-medium text-gray-700">
                    Prima
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                        disabled
                        value={generateFullName(selectedUser)}
                        type="text"
                        name="name"
                        className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder=""
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
                <div id="name">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Ime
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                            {...register("name", { required: true, maxLength: 20, minLength: 3 })}
                            type="text"
                            className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Unesite vaše ime"
                        />
                    </div>
                </div>
                <div id="naslov">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <input
                            type="email"
                            {...register("email")}
                            className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Unesite vaš email"
                        />
                    </div>
                </div>
            </div>
            <div id="naslov" className="mt-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Naslov
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                        type="text"
                        {...register("subject")}
                        className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Unesite naslov poruke"
                    />
                </div>
            </div>
            <div id="tekst-poruke" className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Tekst Poruke
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                        type="text"
                        {...register("message")}
                        className="block w-full rounded-md border-gray-300 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Unesite vašu poruku"
                    />
                </div>
            </div>
            <button type="submit" className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                {status}
            </button>
        </form>
    );
};
