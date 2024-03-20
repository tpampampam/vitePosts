import ReactDOM from 'react-dom/client'
import BaseLayout from './layouts/baseLayout.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'


import store from './appStore.ts';
import '../shared/index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
        <Provider store={store}>
            <BaseLayout/>
        </Provider>
    </Router> 
)