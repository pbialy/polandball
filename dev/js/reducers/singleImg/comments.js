export default (state=null, action) => {
    switch(action.type) {
        case 'SET_COMMENTS':
            console.log('-- SET_COMMENTS --', action);
            return action.payload;
            break;
        default:
            return state;
    }
}