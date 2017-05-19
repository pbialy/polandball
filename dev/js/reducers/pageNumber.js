export default (state=1, action) => {
    switch(action.type) {
        case 'SET_PAGE_NUMBER':
            console.log('-- SET_PAGE_NUMBER --', action);
            return action.payload;
            break;
        default:
            return state
    }
}