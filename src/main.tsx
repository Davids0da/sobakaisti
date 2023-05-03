import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import "./main.css";
import { IndexPage } from "./components/IndexPage";
import { MovementPage } from "./components/movement/MovementIndex";
import { ManifestoIndexPage } from "./components/movement/manifesto/ManifestoIndexPage";
import { GamePage } from "./components/game/GameIndex";
import { ContactIndexPage } from "./components/movement/contact/ContactIndex";
import { ArtsIndexPage } from "./components/movement/arts/ArtsIndexPage";
import { ArtTypeIndexPage } from "./components/movement/arts/ArtTypeIndexPage";
import { AuthorsIndexPage } from "./components/movement/author/AuthorsIndexPage";
import { ArticleIndexPage } from "./components/movement/arts/components/article/ArticleIndex";
import { LitteroIndex } from "./components/game/litero/LitteroIndex";
import { TxtIndexPage } from "./components/game/txt/TxtIndex";
import { ShopIndexPage } from "./components/game/shop/ShopIndex";
import { ProductIndexPage } from "./components/game/shop/ProductIndexPage";
import { GameContactIndex } from "./components/game/contact/GameContactIndex";
import { CampaignIndexPage } from "./components/game/litero/Campaign";
import { LitteroMapPost } from "./components/game/litero/LitteroMapPost";
import { VocabularyIndexPage } from "./components/game/litero/vocabulary/VocabularyIndexPage";
import { PlayZoneIndexPage } from "./components/game/litero/play/PlayZoneIndex";
import { GameArticleIndexPage } from "./components/game/GameArticleIndexPage";
import { CvIndexPage } from "./components/game/txt/CvIndex";
import { RandomIndexPage } from "./components/game/txt/RandomIndex";
import { NewGameIndexPage } from "./components/game/litero/NewGameIndexPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<IndexPage />} />
                    <Route path="/movement" >
                        <Route index element={<MovementPage />} />
                        <Route path="manifesto" element={<ManifestoIndexPage />} />
                        <Route path="contact" element={<ContactIndexPage />} />
                        <Route path="authors" >
                            <Route index element={<AuthorsIndexPage />} />
                            <Route path=":slug" element={<AuthorsIndexPage />} />
                        </Route>
                        <Route path="arts" >
                            <Route index element={<ArtsIndexPage />} />
                            <Route path="literature" >
                                <Route index element={<ArtTypeIndexPage type={`literature`} />} />
                                <Route path=":slug" element={<ArtTypeIndexPage type={`literature`} />} />
                            </Route>
                            <Route path="music" >
                                <Route index element={<ArtTypeIndexPage type={`music`} />} />
                                <Route path=":slug" element={<ArtTypeIndexPage type={`music`} />} />
                            </Route>
                            <Route path="paintings" >
                                <Route index element={<ArtTypeIndexPage type={`paintings`} />} />
                                <Route path=":slug" element={<ArtTypeIndexPage type={`paintings`} />} />
                            </Route>
                            <Route path="video" >
                                <Route index element={<ArtTypeIndexPage type={`video`} />} />
                                <Route path=":slug" element={<ArtTypeIndexPage type={`video`} />} />
                            </Route>
                            <Route path="photography" >
                                <Route index element={<ArtTypeIndexPage type={`photography`} />} />
                                <Route path=":slug" element={<ArtTypeIndexPage type={`photography`} />} />
                            </Route>
                        </Route>
                        <Route path="publications" element={<ArtTypeIndexPage type={`publications`} />} />
                        <Route path='articles/:slug'>
                            <Route index element={<ArticleIndexPage />} />
                        </Route>
                        <Route path="articles">
                            <Route path={`tags/:slug`} element={<ArtTypeIndexPage type={'tags'} />} />
                        </Route>
                    </Route>
                    <Route path="/game">
                        <Route index element={<GamePage />} />
                        <Route path="txt">
                            <Route index element={<TxtIndexPage />} />
                            <Route path="dnevnik">
                                <Route index element={<PlayZoneIndexPage type="dnevnik" />} />
                                <Route path=":slug" element={<GameArticleIndexPage />} />
                            </Route>
                            <Route path="svastara">
                                <Route index element={<PlayZoneIndexPage type="svastara" />} />
                                <Route path=":slug" element={<GameArticleIndexPage />} />
                            </Route>
                            <Route path="cv" element={<CvIndexPage />} />
                            <Route path="random" element={<RandomIndexPage />} />
                        </Route>
                        <Route path="litero-game">
                            <Route index element={<LitteroIndex />} />
                            <Route path="vocabulary" element={<VocabularyIndexPage />} />
                            <Route path="new-game" element={<NewGameIndexPage />} />
                            <Route path="game-zone">
                                <Route index element={<PlayZoneIndexPage type="igrarnik" />} />
                                <Route path=":slug" element={<GameArticleIndexPage />} />
                            </Route>
                            <Route path="campaign">
                                <Route index element={<CampaignIndexPage />} />
                                <Route path=":slug" element={<LitteroMapPost />} />
                            </Route>
                        </Route>
                        <Route path="shop">
                            <Route index element={<ShopIndexPage />} />
                            <Route path=":slug" element={<ProductIndexPage />} />
                        </Route>
                        <Route path="contact" element={<GameContactIndex />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
);

