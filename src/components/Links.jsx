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
              className='my-[18px] flex cursor-pointer items-center px-8'
              key={index}
            >
              <span
                className={`${activeRoute(route.path) === true
                      ? 'font-bold text-blue-600 dark:text-yellow-400'
                      : 'font-medium text-gray-700 dark:text-gray-200'
                  }`}
              >
                {route.icon}
              </span>
              <p
                className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? 'font-bold text-blue-600 dark:text-yellow-400'
                      : 'font-medium text-gray-700 dark:text-gray-200'
                  }`}
              >
                {route.name}
              </p>
            </li>
            {activeRoute(route.path)
              ? (
                <div className='absolute right-0 top-px h-9 w-1 rounded-lg bg-blue-500 dark:bg-yellow-400' />
                )
              : null}
          </div>
        </Link>
      )
    })
  }
  // BRAND
  return createLinks(routes)
}

export default SidebarLinks
