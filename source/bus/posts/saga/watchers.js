//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { viewPost, fetchPosts, viewComment } from './workers';

export function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchViewPost () {
    yield takeEvery(types.VIEW_POST_ASYNC, viewPost);
}
export function* watchViewComment () {
    yield takeEvery(types.VIEW_COMMENT_ASYNC, viewComment);
}

export function* watchPosts () {
    yield all([call(watchFetchPosts), call(watchViewPost), call(watchViewComment)]);
}
