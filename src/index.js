import React from 'react';
// ReactDOM vs. React Native, for example 
// React is now several libraries 
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

let render = () => { 
    ReactDOM.render(<App />, rootEl)
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
