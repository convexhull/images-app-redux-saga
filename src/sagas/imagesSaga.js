import { IMAGES } from '../constants';
import { takeEvery, select, call, put, take } from 'redux-saga/effects';
import { setImages, setError } from '../actions';
import { fetchImages } from '../api';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
