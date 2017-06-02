export const updateImagesList = (imagesList) => {
    return {
        type: "GET_IMAGES_LIST",
        payload: imagesList
    }
};

export const setPageNumber = (n) => {
    return {
        type: "SET_PAGE_NUMBER",
        payload: n
    }
};

export const runAdditionalQuery = (query) => {
    return {
        type: "RUN_ADDITIONAL_QUERY",
        payload: query
    }
};

export const changeTempAdditionalQuery = (query) => {
    // changes the temporary additional query string (the one displayed in input)
    return {
        type: "CHANGE_TEMP_ADDITIONAL_QUERY",
        payload: query
    }
};

export const resetStore = () => {
    return {
        type: "RESET_STORE"
    }
};

export const showSingleImg = (image) => {
    return {
        type: "SHOW_SINGLE_IMAGE",
        payload: image
    }
};

export const setComments = (comments) => {
    return {
        type: "SET_COMMENTS",
        payload: comments
    }
};

export const setSize = (size) => {
    return {
        type: "SET_SIZE",
        payload: size
    }
};
