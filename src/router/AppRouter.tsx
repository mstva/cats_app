import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as constants from "../utils/constants";
import {AuthScreen} from "../ui/auth/AuthScreen";
import {FeedScreen} from "../ui/feed/FeedScreen";
import {FavoriteScreen} from "../ui/favorite/FavoriteScreen";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={constants.FEED_PATH} element={<FeedScreen/>}/>
                <Route path={constants.AUTH_PATH} element={<AuthScreen/>}/>
                <Route path={constants.FAVORITE_PATH} element={<FavoriteScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}
