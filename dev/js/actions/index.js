export const fetchImagesList = (imagesList) => {
    console.log('--clicked--');
    return {
        type: "FETCH_INITIAL_IMAGES_LIST",
        payload: imagesList
    }
}