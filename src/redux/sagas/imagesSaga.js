import { select, takeEvery, call, put } from 'redux-saga/effects';
import { setError, setImages } from '../action/imageAction';
import { IMAGES } from '../actionTyps';

const getPage = state => state.nextPage.count;
const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const fetchImages = async page => {
    const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${key}&per_page=3&page=${page}`,
    );
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        // dispatch error
        yield put(setError(error.toSting()));
    }
}
function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;
