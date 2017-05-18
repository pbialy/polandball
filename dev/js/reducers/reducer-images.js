export default (state=null, action) => {
    switch(action.type) {
        case 'FETCH_INITIAL_IMAGES_LIST':
            return action.payload;
            break;
        default:
            return null
    }
}