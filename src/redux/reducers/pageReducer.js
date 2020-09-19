import { IMAGES } from '../actionTyps';

const initialState = {
    count: 1,
};

export default (state = initialState, { type }) => {
    switch (type) {
        case IMAGES.LOAD_SUCCESS:
            return { ...state, count: state.count + 1 };

        default:
            return state;
    }
};
