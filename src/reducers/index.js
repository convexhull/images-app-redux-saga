import { combineReducers } from 'redux';

import loadingReduceer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
    isLoading: loadingReduceer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
});

export default rootReducer;
