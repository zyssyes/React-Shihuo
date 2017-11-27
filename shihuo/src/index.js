import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Detail from './Detail';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Detail />, document.getElementById('root'));
registerServiceWorker();
