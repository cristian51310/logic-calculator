import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import routes from '@/routes'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function Admin (props) {
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
      {/* Navbar & Main Content */}
      <div className='h-full w-full bg-lightPrimary dark:!bg-navy-900'>
        {/* Main Content */}
        <main className='px-[12px] h-screen bg-white dark:bg-slate-800 flex-none transition-all md:pr-2 xl:pl-[298px]'>
          {/* Routes */}
          <div className='h-full'>
            <Navbar
              brandText={currentRoute}
            />
            <div className='pt-8 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2'>
              <Routes>
                {getRoutes(routes)}
                <Route
                  path='/'
                  element={<Navigate to='/admin/default' replace />}
                />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
