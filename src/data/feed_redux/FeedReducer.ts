import {IMAGES_FETCH_REQUEST, IMAGES_FETCH_SUCCESS, ImagesDispatchTypes, ImageType} from "./FeedActions";

export interface ImagesState {
    is_images_fetch_loading: boolean,
    images: ImageType[],
}

const defaultState: ImagesState = {
    is_images_fetch_loading: false,
    images: [],
}

export const ImagesReducer = (
    state: ImagesState = defaultState, action: ImagesDispatchTypes
): ImagesState => {
    switch (action.type) {
        case IMAGES_FETCH_REQUEST:
            return {
                ...state,
                is_images_fetch_loading: true,
            }
        case IMAGES_FETCH_SUCCESS:
            return {
                ...state,
                is_images_fetch_loading: false,
                images: [...state.images, ...action.images],
            }
        default:
            return state
    }
}
