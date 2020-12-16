import { reducers } from "../Reducers";
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'


const middleware = [];
if (process.env.NODE_ENV !== 'production') middleware.push(createLogger())

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)))