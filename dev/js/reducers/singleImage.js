export default (state=null, action) => {
    switch(action.type) {
        case 'SHOW_SINGLE_IMAGE':
            console.log('-- SHOW_SINGLE_IMAGE --', action);
            return action.payload;
            break;
        default:
            return state;
    }
}