import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import {rootReducer} from './root-reducer'
import { client } from '../api';

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(client)), // теперь клиента будем получать как параметр 
        // кроме клиента можно передавать и другие параметры, тогда формируем объект {client, ...}
    )
)
