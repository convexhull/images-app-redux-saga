import { combineReducers } from 'redux';

import loadingReduceer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReduceer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer,
});

export default rootReducer;
