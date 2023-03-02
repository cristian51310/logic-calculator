import React from "react"
import Input from "../components/Input"
import LateralSection from "@/components/LateralSection"
import Formulario from "@/components/Formulario"
import FrameFormulario from "@/components/frameFormulario"
import { Button } from "@/components/Button"
import { NavLink } from "react-router-dom"
import { IoPeopleSharp, IoKey } from "react-icons/io5";

export const Login = () => {
  return (
    <React.Fragment>

      <div className="h-screen flex">

        <LateralSection />

        <FrameFormulario
          titulo='Iniciar Sesion'
          subtitulo='Bienvenido de nuevo'
        >
          <Formulario>
            <Input
              placeholder='Usuario'
              name='user'
              icon={<IoPeopleSharp className="w-6 h-6"/>}
            />
            <Input
              placeholder='Password'
              name='pass'
              icon={<IoKey className="w-6 h-6"/>}
            />

            <NavLink
              to={'/'}
            >
              <Button
                titulo='Iniciar Sesion'
              />
            </NavLink>


          </Formulario>
        </FrameFormulario>


      </div>
    </React.Fragment>
  )
}
