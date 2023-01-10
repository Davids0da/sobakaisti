import React, { FC } from "react";

import {CircleWithoutLink} from "../CircleWithoutLink";
import {ContactForm} from "./ContactForm";

export const ContatctPage: FC = () => {
    return <div className="flex flex-col h-screen items-center">
        <CircleWithoutLink label="KONTAKT"/>
        <ContactForm />
    </div>;
};