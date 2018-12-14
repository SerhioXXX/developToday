//Core
import { put, apply } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

//Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { book } from '../../../../navigation/book';

export function* viewPost ({ payload: id }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.readPost, [id]);
        const { comments } = yield response.json();

        console.log('++++++++++++++>>>response viewPost post.comments', comments);
        //console.log('++++++++++++++>>>comments viewPost', comments);

        if (response.status !== 200) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(postsActions.viewPost(id));
        yield put(postsActions.viewComment(comments));
        //yield put(replace(book.viewPost));

    } catch (error) {
        yield put(uiActions.emitError(error, '-> viewPost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
