import {combineReducers} from 'redux';
import ImagesListReducer from '~/js/reducers/imagesList.js';
import PageNumberReducer from '~/js/reducers/pageNumber.js';

const allReducers = combineReducers({
    images: ImagesListReducer,
    pageNumber: PageNumberReducer
});

export default allReducers