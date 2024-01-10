import initialState from './initialState';

// Selektory
export const getAllPosts = (state) => state.posts;

// Akcje
const DELETE_POST_SUCCESS = 'app/posts/DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'app/posts/DELETE_POST_FAILURE';
const ADD_POST = 'app/posts/ADD_POST'; // Dodaj ten rodzaj akcji

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
    type: ADD_POST, // Dodaj akcję ADD_POST
    payload: post,
});

// Reducer
const postsReducer = (statePart = initialState, action) => {
    switch (action.type) {
        case DELETE_POST_SUCCESS: {
            const postId = action.payload;
            const updatedPosts = statePart.filter((post) => post.id !== postId); // Zaktualizuj stanPart jako tablicę
            return updatedPosts;
        }
        case DELETE_POST_FAILURE: {
            return statePart; // Brak zmian w stanie
        }
        case ADD_POST: { // Obsłuż akcję ADD_POST
            const newPost = action.payload;
            return [...statePart, newPost]; // Dodaj nowy post do tablicy
        }
        default:
            return statePart;
    }
};

export default postsReducer;