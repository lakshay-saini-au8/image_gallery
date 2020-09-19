import { IMAGES } from '../actionTyps';

const initialState = {
    imageError: null,
};

const errorReducer = (state = initialState, { type, error }) => {
    switch (type) {
        case IMAGES.LOAD_FAIL:
            return { ...state, imageError: error };
        case IMAGES.LOAD:
        case IMAGES.LOAD_SUCCESS:
            return { ...state, imageError: null };

        default:
            return state;
    }
};

export default errorReducer;
