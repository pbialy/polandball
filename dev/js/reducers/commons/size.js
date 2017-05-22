export default (state='BIG', action) => {
    switch(action.type) {
        case 'SET_SIZE':
            console.log('-- SET_SIZE --', action);
            return action.payload;
            break;
        default:
            return state;
    }
}