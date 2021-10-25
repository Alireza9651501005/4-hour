import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './rootReducer';
import createTransform from "redux-persist/es/createTransform";



const middleWare = [thunk];
if (__DEV__) {
    const { createLogger } = require('redux-logger');
    middleWare.push(createLogger());
}

const replacer = (key, value) => value instanceof Date ? value.toISOString() : value

const reviver = (key, value) =>
    (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/))
        ? new Date(value)
        : value

export const encode = toDeshydrate => JSON.stringify(toDeshydrate, replacer)

export const decode = toRehydrate => JSON.parse(toRehydrate, reviver)

const persistConfig = {
    key: 'rootPersist',
    transforms: [createTransform(encode, decode)],
    storage: AsyncStorage,
    timeout: null,
    whitelist: ['globalReducer'],
};


const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer, compose(applyMiddleware(...middleWare)));
export const persistor = persistStore(store);

