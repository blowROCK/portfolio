import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import * as serviceWorker from './serviceWorker';
import './thirdParty/tailwind.css'
import Layout from './pages/Layout';

ReactDOM.render(<Layout />, document.getElementById('root'));
serviceWorker.unregister();
