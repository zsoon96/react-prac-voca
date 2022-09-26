import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from "redux";
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import Reducer from './reducers'
import {CookiesProvider} from "react-cookie";

// 스토어는 기본적으로 객체(object) 타입만 받을 수 있기때문에 redux-thunk 미들웨어를 통해 function, redux-promise를 통해 promise 타입까지 받을 수 있도록 설정
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CookiesProvider>
            {/* 리덕스 적용 = 스토어 등록 */}
            <Provider store={createStoreWithMiddleware(Reducer,
                window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
            )}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>
        </CookiesProvider>
    </React.StrictMode>
);
