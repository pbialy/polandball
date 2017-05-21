export default (state='gallery', action) => {
    switch(action.type) {
        case 'GET_IMAGES_LIST':
            return 'gallery';
            break;
        case 'SHOW_SINGLE_IMAGE':
            return 'single';
            break;
        default:
            return state;
    }
}