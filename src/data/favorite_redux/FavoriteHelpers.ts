import {ImageType} from "../feed_redux/FeedActions";

export const addImageToFavorite = (
    images: ImageType[], newImage: ImageType
) : ImageType[] => {
    images.push(newImage)
    return images
}

export const removeImageFromFavorite = (
    images: ImageType[], removedImage: ImageType
) : ImageType[] => {
    const newImages: ImageType[] = images.filter(image => image.id !== removedImage.id)
    images = [...newImages]
    return images
}
