import initialState from './initialState';

// Selektory
const DELETE_POST_SUCCESS = 'app/posts/DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'app/posts/DELETE_POST_FAILURE';
const ADD_POST = 'app/posts/ADD_POST';
const EDIT_POST = 'app/posts/EDIT_POST';

// Akcje
export const getAllPosts = (state) => state.posts;

export const editPost = (post) => {
    console.log('editPost action payload:', post);
    return {
        type: EDIT_POST,
        payload: post,
    };
};

// Akcje kreatorów
export const deletePostSuccess = (postId) => ({
    type: DELETE_POST_SUCCESS,
    payload: postId,
});

export const deletePostFailure = (error) => ({
    type: DELETE_POST_FAILURE,
    payload: error,
});

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post,
});

// Reducer
const postsReducer = (statePart = initialState, action) => {
    switch (action.type) {
        case DELETE_POST_SUCCESS: {
            const postId = action.payload;
            const updatedPosts = statePart.filter((post) => post.id !== postId);
            return updatedPosts;
        }
        case DELETE_POST_FAILURE: {
            return statePart;
        }
        case ADD_POST: {
            const newPost = action.payload;
            return [...statePart, newPost];
        }
        case EDIT_POST: {
            console.log('Post ID type:', typeof statePart[0].id);
            console.log('Payload ID type:', typeof action.payload.id);
            return statePart.map(post => post.id === action.payload.id ? {...post, ...action.payload} : post);
        }

        default:
            return statePart;
    }
};

export default postsReducer;