export const fetchImagesList = (imagesList) => {
    return {
        type: "FETCH_INITIAL_IMAGES_LIST",
        payload: imagesList
    }
}