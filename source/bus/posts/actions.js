//Types
import { types } from './types';

//Instruments

export const postsActions = {
    //Sync
    fetchPosts: (posts) => {
        return {
            type:    types.FETCH_POSTS,
            payload: posts,
        };
    },
    viewPost: (id) => {
        return {
            type:    types.VIEW_POST,
            payload: id,
        };
    },
    viewComment: (comment) => {
        return {
            type:    types.VIEW_COMMENT,
            payload: comment,
        };
    },
    //Async
    fetchPostsAsync: (posts) => {
        return {
            type:    types.FETCH_POSTS_ASYNC,
            payload: posts,
        };
    },
    viewPostAsync: (id) => {
        return {
            type:    types.VIEW_POST_ASYNC,
            payload: id,
        };
    },
};
