import { combineReducers } from 'redux';
import errorReducer from './reducers/errorReducer';
import imageReducer from './reducers/imageReducer';
import loadingReducer from './reducers/loadingReducer';
import pageReducer from './reducers/pageReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducer,
    nextPage: pageReducer,
});

export default rootReducer;
