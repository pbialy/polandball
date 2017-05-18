export default (state=null, action) => {
    switch(action.type) {
        case 'FETCH_INITIAL_IMAGES_LIST':
            console.log('action ' + action.payload);
            return [{
                a: 10,
                b: 110
            }, {
                a: 20,
                b: 220
            }];
        default:
            return [{
                a: 1,
                b: 11
            }, {
                a: 2,
                b: 22
            }]
    }
}