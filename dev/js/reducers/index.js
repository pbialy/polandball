import {combineReducers} from 'redux';
import ImagesListReducer from '~/js/reducers/imagesList.js';
import PageNumberReducer from '~/js/reducers/pageNumber.js';
import AdditionalQueryReducer from '~/js/reducers/additionalQuery.js';
import TempAdditionalQueryReducer from '~/js/reducers/tempAdditionalQuery.js';

const allReducers = combineReducers({
    images: ImagesListReducer,
    pageNumber: PageNumberReducer,
    additionalQuery: AdditionalQueryReducer,
    tempAdditionalQuery: TempAdditionalQueryReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_STORE') {
        state = undefined
    }

    return allReducers(state, action)
};

export default rootReducer