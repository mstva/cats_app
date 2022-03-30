import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import * as constants from "../utils/constants";
import {AuthScreen} from "../ui/auth/AuthScreen";
import {FeedScreen} from "../ui/feed/FeedScreen";


export const AppRouter = () => {

    const apiKey = localStorage.getItem(constants.API_KEY)

    return (
        <BrowserRouter>
            <Routes>
                <Route path={constants.FEED_PATH} element={
                    apiKey === null
                        ? <Navigate to={constants.AUTH_PATH} replace/>
                        : <FeedScreen/>
                }/>
                <Route path={constants.AUTH_PATH} element={
                    apiKey !== null
                        ? <Navigate to={constants.FEED_PATH} replace/>
                        : <AuthScreen/>
                }/>
            </Routes>
        </BrowserRouter>
    )
}
