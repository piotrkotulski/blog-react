import initialState from './initialState';


//selectors

export const getAllPosts = state => state.posts;

// actions
//const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const postsReducer = (statePart = initialState, action) => {
    switch (action.type) {
        default:
            return statePart;
    }
};

export default postsReducer;