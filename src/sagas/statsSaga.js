import { IMAGES, STATS } from '../constants';
import { fork, take, call, put } from 'redux-saga/effects';
import { fetchImageStats } from '../api';
import {
    loadImagesStats,
    setImagesStats,
    setImagesStatsError,
} from '../actions';

function* handleStatsRequest(imageId) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImagesStats(imageId));
            const res = yield call(fetchImageStats, imageId);
            yield put(setImagesStats(imageId, res.downloads.total));
            return true;
        } catch (e) {}
    }
    yield put(setImagesStatsError(imageId));
}

function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}

export default watchStatsRequest;
