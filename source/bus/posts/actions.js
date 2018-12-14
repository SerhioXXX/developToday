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
    viewPost: (post) => {
        return {
            type:    types.VIEW_POST,
            payload: post,
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
    viewCommentAsync: (id) => {
        return {
            type:    types.VIEW_COMMENT_ASYNC,
            payload: id,
        };
    },
};
