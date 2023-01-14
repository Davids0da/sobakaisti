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
import {ManifestoIndexPage} from "./components/movement/manifesto/ManifestoIndexPage";
import {GamePage} from "./components/game/GameIndex";
import {ContatctPage} from "./components/movement/contact/ContactIndex";
import {ArtsIndexPage} from "./components/movement/arts/ArtsIndexPage";
import {LiteratureIndexPage} from "./components/movement/arts/LiteratureIndexPage";
import {AuthorsIndexPage} from "./components/movement/Author/AuthorsIndexPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<IndexPage />} />
                <Route path="/movement" >
                    <Route index element={<MovementPage />} />
                    <Route path="manifesto" element={<ManifestoIndexPage />} />
                    <Route path="contact" element={<ContatctPage />} />
                    <Route path="authors" element={<AuthorsIndexPage />} />
                    <Route path="arts"  >
                       <Route index element={<ArtsIndexPage />} />
                        <Route path="literature" element={<LiteratureIndexPage />} />
                    </Route>
                </Route>
                <Route path="/game">
                    <Route index element={<GamePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
