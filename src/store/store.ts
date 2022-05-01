import { configureStore } from '@reduxjs/toolkit';
import { reduceApp } from './slice'

export const store =  configureStore({
  reducer: {
    //TODO: Se supone que aquí irá el reducer 
    stateApp: reduceApp
  }
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch