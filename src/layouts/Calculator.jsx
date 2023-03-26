import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import routes from '@/routes'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

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
          routes[i].layout + '/' + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name)
      }
    }
    return activeRoute
  }

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        )
      } else {
        return null
      }
    })
  }

  return (
    <div className='flex h-full w-full'>
      <Sidebar open />
      <div className='w-full '>
        <main className='px-[12px] h-full bg-white dark:bg-slate-800 flex-none transition-all pr-2 pl-[300px]'>
          <div className='h-full'>
            <Navbar brandText={currentRoute} />
            <div className='pt-8 mx-auto mb-auto h-full min-h-[84vh] p-2'>
              <Routes>
                {getRoutes(routes)}
                <Route path='/' element={<Navigate to='/admin/default' replace />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
