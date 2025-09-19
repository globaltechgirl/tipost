import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";

/* Type definition for a Post */
export interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

/* State structure for posts slice */
interface PostsState {
  posts: Post[];
}

/* Initial state for the posts slice */
const initialState: PostsState = {
  posts: [],
};

/**
 * postsSlice
 *
 * Manages posts data: fetch, create, update, delete.
 */

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    /* Set all posts (e.g., after fetching from API) */
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },

    /* Add a new post at the beginning of the array */
    addPost(state, action: PayloadAction<Post>) {
      state.posts.unshift(action.payload);
    },

    /* Update an existing post by ID */
    updatePost(state, action: PayloadAction<Post>) {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },

    /* Delete a post by ID */
    deletePost(state, action: PayloadAction<string | number>) {
      state.posts = state.posts.filter((p) => p.id !== action.payload);
    },
  },
});

// Export actions for dispatching
export const { setPosts, addPost, updatePost, deletePost } = postsSlice.actions;

/* Selector: Get all posts */
export const selectPosts = (state: RootState) => state.posts.posts;

/* Selector: Get a single post by ID */
export const selectPostById =
  (id: string | number) =>
  (state: RootState) =>
    state.posts.posts.find((p) => p.id === id);

// Export reducer for store configuration
export default postsSlice.reducer;
