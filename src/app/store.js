import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';
import createSagaMiddleware from 'redux-saga';
import postSaga from '../features/post/postSaga';

const saga = createSagaMiddleware();

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, saga),
});

saga.run(postSaga);

export default store;
