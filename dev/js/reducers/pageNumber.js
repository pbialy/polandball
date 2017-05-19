export default (state=null, action) => {
    switch(action.type) {
        case 'SET_PAGE_NUMBER':
            console.log('-- SET_PAGE_NUMBER --', action);
            return action.payload;
            break;
        default:
            return 1
    }
}