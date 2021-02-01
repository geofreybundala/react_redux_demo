import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';
import {Provider} from 'react-redux'
import {creatStore} from 'redux'
import reducers from './reducers/'


ReactDOM.render(
    <provider store={creatStore(reducers)}>
        <App/>
        </provider>
    
    ,
    document.querySelector('#root')
)