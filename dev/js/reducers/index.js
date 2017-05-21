import {combineReducers} from 'redux';
import ImagesListReducer from '~/js/reducers/gallery/imagesList.js';
import PageNumberReducer from '~/js/reducers/gallery/pageNumber.js';
import AdditionalQueryReducer from '~/js/reducers/gallery/additionalQuery.js';
import TempAdditionalQueryReducer from '~/js/reducers/gallery/tempAdditionalQuery.js';
import DisplayModeReducer from '~/js/reducers/commons/displayMode.js';
import SingleImageReducer from '~/js/reducers/singleImg/singleImage.js';
import CommentsReducer from '~/js/reducers/singleImg/comments.js';

const allReducers = combineReducers({
    imagesList: ImagesListReducer,
    pageNumber: PageNumberReducer,
    additionalQuery: AdditionalQueryReducer,
    tempAdditionalQuery: TempAdditionalQueryReducer,
    displayMode: DisplayModeReducer,
    singleImage: SingleImageReducer,
    comments: CommentsReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STORE') {
        state = undefined
    }
    return allReducers(state, action)
};

export default rootReducer