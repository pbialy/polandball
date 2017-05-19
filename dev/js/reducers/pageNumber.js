export default (state=1, action) => {
    switch(action.type) {
        case 'SET_PAGE_NUMBER':
            return action.payload;
            break;
        default:
            return state
    }
}