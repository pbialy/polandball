const updateImagesList = (imagesList) => {
    return {
        type: "GET_INITIAL_IMAGES_LIST", //TODO without INITIAL
        payload: imagesList
    }
};

const setPageNumber = (n) => {
    return {
        type: "SET_PAGE_NUMBER",
        payload: n
    }
};

export {
    updateImagesList,
    setPageNumber
}