import React from "react";
import {API_KEY, AUTH_PATH} from "../../utils/constants";
import {Navigate} from "react-router-dom";


export const CheckAuthContainer = (props: any) => {

    const apiKey = localStorage.getItem(API_KEY)

    return (
        <>
            {apiKey === null
                ? <Navigate to={AUTH_PATH} replace/>
                : props.children
            }
        </>
    )
}
