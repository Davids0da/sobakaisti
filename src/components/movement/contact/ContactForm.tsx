import React, {FC, useState} from "react";

export const ContactForm: FC = () => {

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, subject, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <form className="w-1/2 pt-10" onSubmit={handleSubmit}>
            <div id="prima">
                <label htmlFor="prima" className="block text-sm font-medium text-gray-700">
                    Prima
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                        disabled
                        value="Bojan Dedic"
                        type="text"
                        name="name"
                        id="name"
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
                            type="text"
                            name="name"
                            id="name"
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
                            name="email"
                            id="email"
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
                        name="subject"
                        id="subject"
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
                        name="message"
                        id="message"
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
