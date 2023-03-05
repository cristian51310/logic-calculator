import React from 'react'
import { NavLink } from 'react-router-dom'
import { DangerButton } from './Button'

function SideBarItem ({ to, title }) {
  return (
    <React.Fragment>
      <li>
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? 'odd:text-green-600 first:font-bold' : 'odd:text-black')}
        >
          <div className='w-full bg-white mb-5 h-16 rounded-lg grid place-items-center'>{title}</div>
        </NavLink>
      </li>
    </React.Fragment>
  )
}

function NavBar () {
  return (
    <React.Fragment>
      <nav className="flex h-screen">

        <div className="p-5 h-10/12 w-52 bg-gradient-to-tr from-blue-800 to-purple-700 justify-beetwen items-center">

          <ul>
            <SideBarItem
              to={'/not'}
              title='NOT'
            />
            <SideBarItem
              to={'/and'}
              title='AND'
            />
            <SideBarItem
              to={'/nand'}
              title='NAND'
            />
            <SideBarItem
              to={'/or'}
              title='OR'
            />
            <SideBarItem
              to={'/nor'}
              title='NOR'
            />
            <SideBarItem
              to={'/xor'}
              title='XOR'
            />
          </ul>

          <div className="flex align-bottom mt-32 w-full">
            <NavLink
              to='/login'
              className={'w-full'}
            >
              <DangerButton
                titulo={'Cerrar Sesion'}
              />
            </NavLink>

          </div>

        </div>

      </nav>

    </React.Fragment>
  )
}

export default NavBar
