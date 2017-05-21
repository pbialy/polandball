const updateImagesList = (imagesList) => {
    return {
        type: "GET_IMAGES_LIST",
        payload: imagesList
    }
};

const setPageNumber = (n) => {
    return {
        type: "SET_PAGE_NUMBER",
        payload: n
    }
};

const runAdditionalQuery = (query) => {
    return {
        type: "RUN_ADDITIONAL_QUERY",
        payload: query
    }
};

const changeTempAdditionalQuery = (query) => {
    // changes the temporary additional query string (the one displayed in input)
    return {
        type: "CHANGE_TEMP_ADDITIONAL_QUERY",
        payload: query
    }
};

const resetStore = () => {
    return {
        type: "RESET_STORE"
    }
};

export {
    updateImagesList,
    setPageNumber,
    runAdditionalQuery,
    changeTempAdditionalQuery,
    resetStore
}