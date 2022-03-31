
export const IMAGES_FETCH_REQUEST = "IMAGES_FETCH_REQUEST"
export const IMAGES_FETCH_SUCCESS = "IMAGES_FETCH_SUCCESS"
export const IMAGE_FAVORITE_SET = "IMAGE_FAVORITE_SET"

export type ImageType = {
    id: string,
    url: string,
    width: number,
    height: number,
    is_favorite: boolean,
}

export interface ImagesFetchRequest {
    type: typeof IMAGES_FETCH_REQUEST
}

export interface ImagesFetchSuccess {
    type: typeof IMAGES_FETCH_SUCCESS,
    images: ImageType[]
}

export type ImagesDispatchTypes = ImagesFetchRequest | ImagesFetchSuccess

export const ImagesFetchRequestAction = (): ImagesDispatchTypes => {
    return {
        type: IMAGES_FETCH_REQUEST
    }
}

export const ImagesFetchSuccessAction = (images: ImageType[]): ImagesDispatchTypes => {
    return {
        type: IMAGES_FETCH_SUCCESS,
        images: images
    }
}
