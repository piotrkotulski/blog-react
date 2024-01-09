import initialState from './initialState';

// Selektory
export const getAllPosts = state => state.posts;

// Akcje
const DELETE_POST_SUCCESS = 'app/posts/DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'app/posts/DELETE_POST_FAILURE';

// Akcje kreatorów
export const deletePostSuccess = (postId) => ({
    type: DELETE_POST_SUCCESS,
    payload: postId,
});

export const deletePostFailure = (error) => ({
    type: DELETE_POST_FAILURE,
    payload: error,
});

// Reducer
const postsReducer = (statePart = initialState, action) => {
    switch (action.type) {
        case DELETE_POST_SUCCESS: {
            const postId = action.payload;
            const updatedPosts = statePart.filter(post => post.id !== postId);
            return updatedPosts;
        }
        case DELETE_POST_FAILURE: {
            // Obsłuż błąd usuwania posta (jeśli potrzebne)
            return statePart;
        }
        default:
            return statePart;
    }
};

export default postsReducer;