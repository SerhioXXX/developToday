//Core
import { fromJS, List, Map } from 'immutable';

//Instruments
import { types } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS:
            return fromJS(action.payload);

        case types.VIEW_POST:
            //return state.filter((post) => post.get('id') === action.payload);
            return fromJS(action.payload);
            //return action.payload;

        case types.VIEW_COMMENT:
            return fromJS(action.payload);

        default:
            return state;
    }
};
