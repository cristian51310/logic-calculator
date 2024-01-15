/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import routes from '@/routes'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AndBg from '../assets/dark/AND.png'
import NandBg from '../assets/dark/NAND.png'
import NorBg from '../assets/dark/NOR.png'
import NotBg from '../assets/dark/NOT.png'
import OrBg from '../assets/dark/OR.png'
import XorBg from '../assets/dark/XOR.png'

export default function Admin () {
  const location = useLocation()
  const [currentRoute, setCurrentRoute] = React.useState('And')

  React.useEffect(() => {
    getActiveRoute(routes)
  }, [location.pathname])

  const getActiveRoute = (routes) => {
    const activeRoute = 'And'
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name)
      }
    }
    return activeRoute
  }

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route path={`/${prop.path}`} element={prop.component} key={key} />
      )
    })
  }

  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <div className='w-full '>
        <main className='h-screen bg-slate-800 flex-none pl-[286px]'>
          <div
            className='px-3 h-full'
            style={
              currentRoute === 'And' ? { backgroundImage: `url(${AndBg})` }
            : currentRoute === 'Nand' ? { backgroundImage: `url(${NandBg})` }
            : currentRoute === 'Nor' ? { backgroundImage: `url(${NorBg})` }
            : currentRoute === 'Not' ? { backgroundImage: `url(${NotBg})` }
            : currentRoute === 'Or' ? { backgroundImage: `url(${OrBg})` }
            : currentRoute === 'Xor' ? { backgroundImage: `url(${XorBg})` }
            : { backgroundImage: `url(${XorBg})` }
            }
          >
            <Navbar brandText={currentRoute} />
            <div className='pt-8 mx-auto mb-auto p-2'>
              <Routes>
                {getRoutes(routes)}
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
