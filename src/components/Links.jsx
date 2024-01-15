/* eslint-disable array-callback-return */
import { Link, useLocation } from 'react-router-dom'

export function SidebarLinks (props) {
  const location = useLocation()
  const { routes } = props

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName)
  }

  const createLinks = (routes) => {
    return routes.map((route, index) => {
      return (
        <Link key={index} to={route.path}>
          <div className='relative mb-3 flex hover:cursor-pointer'>
            <li
              className='my-[18px] cursor-pointer px-8'
              key={index}
            >
              <p
                className={`ml-4 ${activeRoute(route.path) ? ' text-yellow-400' : ' text-gray-200'}`}
              >
                {route.name}
              </p>
            </li>
            {activeRoute(route.path) && (
              <div className='absolute right-0 h-9 w-1 bg-yellow-400' />
            )}
          </div>
        </Link>
      )
    })
  }

  return createLinks(routes)
}

export default SidebarLinks
