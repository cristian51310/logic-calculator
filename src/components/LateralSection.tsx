import React from "react"
import { NavLink } from "react-router-dom"
import { PrimaryButton } from "./Button"

export default function LateralSection() {
  return (
    <React.Fragment>
      <div
        className="relative overflow-hidden flex w-5/12 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans mt-4">Logic Calculator</h1>
          <p className="text-white mt-2 mb-10 text-center">La mejor calculadora preposicional</p>
          <NavLink
            to={'/'}
          >
            <PrimaryButton
              titulo={'Entrar como invitado'}
            />
          </NavLink>

        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-24 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
    </React.Fragment>
  )
}