//Core
import { put, apply } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

//Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { book } from '../../../../navigation/book';

export function* viewComment (id) {
    try {
        yield put(uiActions.startFetching());

        //console.log('++++++++++++++>>>comment viewComment ', id);
        const comment = yield apply(localStorage, localStorage.getItem, [`${id}`]);

        yield put(postsActions.viewComment(comment));

    } catch (error) {
        yield put(uiActions.emitError(error, '-> viewComment worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
