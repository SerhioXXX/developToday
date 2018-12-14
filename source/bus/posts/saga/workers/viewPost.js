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
        const post = yield response.json();
        const comments = yield post.comments;
        const body = yield post.body;
        const title = yield post.title;
        const commentText = yield comments.map((comment) => {
            return comment.body
            ;
        });

        //console.log('++++++++++++++>>>response viewPost post.comments', comments);
        //console.log('++++++++++++++>>>comments viewPost', commentText);
        yield apply(localStorage, localStorage.setItem, [`${id}`, `${commentText}`]);

        if (response.status !== 200) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        yield put(replace(book.viewPost));
        console.log('$$$$$$$$$$$$$$$$$$>>>massiv post posle redirecta i pered zapuskom viewPost action', post);
        yield put(postsActions.viewPost(post));

        //yield put(postsActions.viewComment(comments));

    } catch (error) {
        yield put(uiActions.emitError(error, '-> viewPost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
