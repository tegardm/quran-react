import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import './app.css'
import Index from './pages/index.jsx'
import Quran from './pages/quran.jsx'
import QuranDetail from './pages/quranDetail.jsx'

import Doa from './pages/doa.jsx'
import Jadwal from './pages/jadwal.jsx'
import Navbar from './layouts/Navbar.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const router = createBrowserRouter([
  {
    path :'/',
    element : <Index/>,
    errorElement : <p>Error Page</p>
  },
  {
    path :'/quran',
    element: <Quran/>
  },
  {
    path: '/quran/:number',
    element : <QuranDetail/>
  },
  {
    path : '/author',
    element: <Jadwal/>
  },
  {
    path:'/doa',
    element:<Doa/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Navbar/>
    <div className=' bg-base-300 min-h-screen'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </Provider>
  </React.StrictMode>,
)
