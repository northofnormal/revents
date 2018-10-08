import React from 'react';
// ReactDOM vs. React Native, for example 
// React is now several libraries 
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './app/Store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop'

const store = configureStore();

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </BrowserRouter>
        </Provider>,
        rootEl);
}

// hot module replacement
// mostly works most of the time 
if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
}

render();
registerServiceWorker();
