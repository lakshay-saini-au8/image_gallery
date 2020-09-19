import { IMAGES } from '../actionTyps';

const initialState = {
    loading: false,
};

const loadingReducer = (state = initialState, { type }) => {
    switch (type) {
        case IMAGES.LOAD:
            return { ...state, loading: true };
        case IMAGES.LOAD_SUCCESS:
            return { ...state, loading: false };
        case IMAGES.LOAD_FAIL:
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default loadingReducer;
