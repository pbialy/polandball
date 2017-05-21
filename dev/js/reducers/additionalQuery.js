export default (state='', action) => {
    switch(action.type) {
        case 'RUN_ADDITIONAL_QUERY':
            console.log('-- RUN_ADDITIONAL_QUERY --', action);
            return action.payload;
            break;
        default:
            return state
    }
}