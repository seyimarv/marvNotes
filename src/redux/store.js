import { createStore, applyMiddleware, compose } from "redux";

import rootReducer  from "./Rootreducer";

import logger from "redux-logger";

import persistStore from "redux-persist/es/persistStore";

const enhancedMiddleware = applyMiddleware(logger)

const composedEnhancers = compose(enhancedMiddleware)

const store = createStore(rootReducer, undefined,  composedEnhancers )

export default store