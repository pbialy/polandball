export default (state='', action) => {
    switch(action.type) {
        case 'CHANGE_TEMP_ADDITIONAL_QUERY':
            console.log('-- CHANGE_TEMP_ADDITIONAL_QUERY --', action);
            return action.payload;
            break;
        default:
            return state
    }
}