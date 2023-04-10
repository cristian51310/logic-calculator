/* eslint-disable multiline-ternary */
/* eslint-disable indent */
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import routes from '@/routes'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

import AndBg from '../assets/dark/AND.png'
import NandBg from '../assets/dark/NAND.png'
import NorBg from '../assets/dark/NOR.png'
import NotBg from '../assets/dark/NOT.png'
import OrBg from '../assets/dark/OR.png'
import XorBg from '../assets/dark/XOR.png'

import AndBgL from '../assets/light/AND.png'
import NandBgL from '../assets/light/NAND.png'
import NorBgL from '../assets/light/NOR.png'
import NotBgL from '../assets/light/NOT.png'
import OrBgL from '../assets/light/OR.png'
import XorBgL from '../assets/light/XOR.png'

export default function Admin () {
  const location = useLocation()
  const [currentRoute, setCurrentRoute] = React.useState('Main Dashboard')

  React.useEffect(() => {
    getActiveRoute(routes)
  }, [location.pathname])

  const getActiveRoute = (routes) => {
    const activeRoute = 'Main Dashboard'
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
        <main className='h-screen bg-white dark:bg-slate-800 flex-none transition-all pl-[286px]'>
          <div
            id='bg' className='px-3 h-full'
            style={
              window.localStorage.theme === 'dark' && currentRoute === 'And' ? { backgroundImage: `url(${AndBg})` }
            : window.localStorage.theme === 'ligth' && currentRoute === 'And' ? { backgroundImage: `url(${AndBgL})` }

            : window.localStorage.theme === 'dark' && currentRoute === 'Nand' ? { backgroundImage: `url(${NandBg})` }
            : window.localStorage.theme === 'ligth' && currentRoute === 'Nand' ? { backgroundImage: `url(${NandBgL})` }

            : window.localStorage.theme === 'dark' && currentRoute === 'Nor' ? { backgroundImage: `url(${NorBg})` }
            : window.localStorage.theme === 'ligth' && currentRoute === 'Nor' ? { backgroundImage: `url(${NorBgL})` }

            : window.localStorage.theme === 'dark' && currentRoute === 'Not' ? { backgroundImage: `url(${NotBg})` }
            : window.localStorage.theme === 'ligth' && currentRoute === 'Not' ? { backgroundImage: `url(${NotBgL})` }

            : window.localStorage.theme === 'dark' && currentRoute === 'Or' ? { backgroundImage: `url(${OrBg})` }
            : window.localStorage.theme === 'ligth' && currentRoute === 'Or' ? { backgroundImage: `url(${OrBgL})` }

            : window.localStorage.theme === 'dark' && currentRoute === 'Xor' ? { backgroundImage: `url(${XorBg})` }
            : window.localStorage.theme === 'ligth' && currentRoute === 'Xor' ? { backgroundImage: `url(${XorBgL})` }

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
