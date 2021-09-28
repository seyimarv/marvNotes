import { createStore, applyMiddleware, compose } from "redux";

import rootReducer  from "./Rootreducer";

import logger from "redux-logger";

import {persistStore }from "redux-persist";

const enhancedMiddleware = applyMiddleware(logger)

const composedEnhancers = compose(enhancedMiddleware)

export const store = createStore(rootReducer, composedEnhancers )
export const persistor = persistStore(store)

