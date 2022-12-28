import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import "./main.css";
import {IndexPage} from "./components/IndexPage";
import {MovementPage} from "./components/movement/MovementIndex";
import {Manifesto} from "./components/movement/manifesto/Manifesto";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<IndexPage />} />
                <Route path="/movement" >
                    <Route index element={<MovementPage />} />
                    <Route path="manifesto" element={<Manifesto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
