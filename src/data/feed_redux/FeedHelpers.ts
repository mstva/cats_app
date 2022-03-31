import {Dispatch} from "react";
import {ImagesDispatchTypes, ImagesFetchRequestAction, ImagesFetchSuccessAction, ImageType} from "./FeedActions";
import {AxiosResponse} from "axios";
import {axios_instance} from "../../utils/axios_config";
import {IMAGE_SEARCH} from "../../utils/constants";

export const FetchImagesAction = (
    page: number, limit: number
) => async (dispatch: Dispatch<ImagesDispatchTypes>) => {

    dispatch(ImagesFetchRequestAction())

    try {
        const url = `${IMAGE_SEARCH}?page=${page}&limit=${limit}`
        const response: AxiosResponse<ImageType[]> = await axios_instance.get(url)
        dispatch(ImagesFetchSuccessAction(response.data))
    } catch (error) {
        console.log(error)
    }

}
