import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements,Navigate} from 'react-router-dom'
import {ChakraProvider} from "@chakra-ui/react"
import App from './App'
import Profile from "./pages/profile/Profile.jsx"
import FriendList from "./pages/friendList/Friendlist.jsx"
import ChatInterface from "./pages/chatPage/ChatInterface.jsx"
import SelectUser from "./pages/chatPage/selectUser.jsx"
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/profile" element={<Profile />} />,
      <Route path="/friendList" element={<FriendList />} />,
      <Route path="/chatPage" element={<ChatInterface />} >
        <Route path="/chatPage/selectUser" element={<SelectUser />} />
      </Route>,
      <Route path="/" element={<Navigate to='/profile' />} />,
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
