import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignInPage from './assets/Signin.jsx'
import Favorite from './Favorite.jsx'
import {Provider} from "react-redux"
import Store from './store/Store.jsx'
import WatchLater from './WatchLater.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignInPage/>}/>
      <Route path='/movie' element={<App/>}/>
      <Route path='/favourites' element={<Favorite/>}/>
      <Route path='/watchLater' element={<WatchLater/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
