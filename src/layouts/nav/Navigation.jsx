import {NavLink} from 'react-router-dom'

const Navigation = () =>{
    return(
      <nav className="mb-6 p-4 bg-gray-50 rounded-md">
        <div className="space-x-2 flex ">
          <NavLink 
            to='/profile' 
            className={({ isActive }) => isActive ? 'bg-blue-100 text-blue-900' : 'px-3 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded'}
          >
            个人信息
          </NavLink>
          <NavLink 
            to='/friendList' 
            className={({ isActive }) => isActive ? 'bg-blue-100 text-blue-900' : 'px-3 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded'}
          >
            好友列表
          </NavLink>
          <NavLink 
            to='/chatPage' 
            className={({ isActive }) => isActive ? 'bg-blue-100 text-blue-900' : 'px-3 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded'}
          >
            聊天界面
          </NavLink>
        </div>
      </nav>
    )
}
export default Navigation
