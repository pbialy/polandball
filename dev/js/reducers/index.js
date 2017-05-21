import {combineReducers} from 'redux';
import ImagesListReducer from '~/js/reducers/imagesList.js';
import PageNumberReducer from '~/js/reducers/pageNumber.js';
import AdditionalQueryReducer from '~/js/reducers/additionalQuery.js';
import TempAdditionalQueryReducer from '~/js/reducers/tempAdditionalQuery.js';
import DisplayModeReducer from '~/js/reducers/displayMode.js';
import SingleImageReducer from '~/js/reducers/singleImage.js';

const allReducers = combineReducers({
    imagesList: ImagesListReducer,
    pageNumber: PageNumberReducer,
    additionalQuery: AdditionalQueryReducer,
    tempAdditionalQuery: TempAdditionalQueryReducer,
    displayMode: DisplayModeReducer,
    singleImage: SingleImageReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STORE') {
        state = undefined
    }
    return allReducers(state, action)
};

export default rootReducer