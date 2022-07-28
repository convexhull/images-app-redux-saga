import { combineReducers } from 'redux';

import loadingReduceer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
    isLoading: loadingReduceer,
    images: imagesReducer,
    error: errorReducer,
});

export default rootReducer;
