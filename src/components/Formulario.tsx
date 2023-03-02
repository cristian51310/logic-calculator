import React, { Children } from "react"
import { NavLink } from "react-router-dom"

export default function Formulario({ children }) {
  return (
    <React.Fragment>
      <form action="" className="grid gap-3">

        {children}

        <div className="relative">
          <p className="text-sm ml-2">
            <span>No tienes una cuenta? </span>
            <NavLink
              to={'/sign-up'}
            >
              <span className="font-bold cursor-pointer hover:text-blue-600 hover:underline">Registrate</span>
            </NavLink>
          </p>
        </div>
      </form>
    </React.Fragment>
  )
}