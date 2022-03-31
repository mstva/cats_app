import axios from "axios";
import {API_KEY, API_URL} from "./constants";

export const axios_instance = axios.create ({
    baseURL : API_URL,
    headers: {
        "x-api-key": `${localStorage.getItem(API_KEY)}`
    }
})
