//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fetchPosts () {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.listPosts);
        const posts = yield response.json();

        //console.log('=======================>posts fetchPosts array', posts);

        if (response.status !== 200) {
            throw new Error();
        }

        yield put(postsActions.fetchPosts(posts));

    } catch (error) {
        yield put(uiActions.emitError(error, '-> fetchPosts worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
