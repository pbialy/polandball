export default (state=null, action) => {
    switch(action.type) {
        case 'GET_INITIAL_IMAGES_LIST':
            console.log('-- GET_INITIAL_IMAGES_LIST --', action);
            return action.payload;
            break;
        default:
            return state;
    }
}