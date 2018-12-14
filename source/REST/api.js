//Instruments
import { MAIN_URL } from './config';

export const api = {
    posts: {
        listPosts () {
            return fetch(`${MAIN_URL}/posts`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
        readPost (id) {
            return fetch(`${MAIN_URL}/posts/${id}?_embed=comments`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
    },
};
