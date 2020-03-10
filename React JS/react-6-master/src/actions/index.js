export const addPost = (post) => ({ type: 'POST_ADD', payload: { post } });

export const removePost = (id) => ({ type: 'POST_REMOVE', payload: id });

export const addPostComment = (comment) => ({ type: 'POST_COMMENT_ADD', payload: { comment } });

export const removePostComment = (id) => ({ type: 'POST_COMMENT_REMOVE', payload: id });
