import { IMAGES } from '../actionTyps';

const initialState = {
    imageData: [],
};

const imageReducer = (state = initialState, { type, images }) => {
    switch (type) {
        case IMAGES.LOAD_SUCCESS:
            return { ...state, imageData: [...state.imageData, images] };

        default:
            return state;
    }
};
export default imageReducer;
