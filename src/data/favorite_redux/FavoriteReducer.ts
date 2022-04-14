import {ImageType} from "../feed_redux/FeedActions";
import {ADD_IMAGE_TO_FAVORITE, FavoriteDispatchTypes, REMOVE_IMAGE_FROM_FAVORITE} from "./FavoriteActions";
import {addImageToFavorite, removeImageFromFavorite} from "./FavoriteHelpers";

interface FavoriteState {
    images: ImageType[]
}

const defaultState: FavoriteState = {
    images: []
}

export const FavoriteReducer = (
    state: FavoriteState = defaultState, action: FavoriteDispatchTypes
): FavoriteState => {
    switch (action.type) {
        case ADD_IMAGE_TO_FAVORITE:
            return {
                ...state,
                images: addImageToFavorite(state.images, action.image)
            }
        case REMOVE_IMAGE_FROM_FAVORITE:
            return {
                ...state,
                images: removeImageFromFavorite(state.images, action.image)
            }
        default:
            return state
    }
}
