import { Routes, Route, Navigate } from 'react-router-dom'
import routes from '@/routes'

export default function Auth () {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/auth') {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        )
      } else {
        return null
      }
    })
  }

  return (
    <div>
      <div className='relative float-right h-full min-h-screen w-full !bg-green-100 dark:!bg-navy-900'>

        <main className='mx-auto min-h-screen'>
          <div className='relative flex'>
            <div className='mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0'>
              <div className='mb-auto flex flex-col lg:max-w-[48%] xl:max-w-full'>
                <Routes>
                  {getRoutes(routes)}
                  <Route
                    path='/'
                    element={<Navigate to='/auth/login' replace />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
