import {ImageType} from "../feed_redux/FeedActions";
import {Dispatch} from "react";

export const ADD_IMAGE_TO_FAVORITE = "ADD_IMAGE_TO_FAVORITE"
export const REMOVE_IMAGE_FROM_FAVORITE = "REMOVE_IMAGE_FROM_FAVORITE"

export interface AddImageToFavorite {
    type: typeof ADD_IMAGE_TO_FAVORITE,
    image: ImageType
}

export interface RemoveImageFromFavorite {
    type: typeof REMOVE_IMAGE_FROM_FAVORITE,
    image: ImageType
}

export type FavoriteDispatchTypes = AddImageToFavorite | RemoveImageFromFavorite

export const AddImageToFavoriteAction = (
    image: ImageType
) => (dispatch: Dispatch<FavoriteDispatchTypes>) => {
    dispatch({
        type: ADD_IMAGE_TO_FAVORITE,
        image: image,
    })
}

export const RemoveImageFromFavoriteAction = (
    image: ImageType
) => (dispatch: Dispatch<FavoriteDispatchTypes>) => {
    dispatch({
        type: REMOVE_IMAGE_FROM_FAVORITE,
        image: image
    })
}

