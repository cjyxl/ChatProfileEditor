import {Outlet} from 'react-router-dom'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import Header from './components/Header'
import UserSection from './layouts/section/UserSection'
import Navigation from './layouts/nav/Navigation'

const App = ()=>{
  const [animationParent] = useAutoAnimate()
  return (
  <div className="min-h-screen bg-gray-100 font-sans">
    <Header />
    <main className='max-w-screen-lg mx-auto mt-6 bg-blue-200 p-6 shadow-md rounded-lg'>
      <UserSection />
      <Navigation />
      <div ref={animationParent}>
        <Outlet/>
      </div>
    </main>
  </div>
  )
}

export default App
