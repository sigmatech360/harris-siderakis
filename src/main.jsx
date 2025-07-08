import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <div className='loaderBox d-none'>
        <div className="custom-loader"></div>
        <div className="custom-loader-text text-light d-none">Please wait! Finding the best mathing results..</div>

    </div>
    </Provider>
  </StrictMode>,
)
