import {combineReducers} from 'redux';
import ImagesReducer from '~/js/reducers/reducer-images.js'

const allReducers = combineReducers({
    images: ImagesReducer
});

export default allReducers