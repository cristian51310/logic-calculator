import { Button } from "@/components/Button"
import Formulario from "@/components/Formulario"
import FrameFormulario from "@/components/frameFormulario"
import LateralSection from "@/components/LateralSection"
import React from "react"
import { NavLink } from "react-router-dom"
import Input from "../components/Input"
import { IoPeopleSharp, IoKey, IoIdCard, IoAtCircle } from "react-icons/io5";

export default function Signup() {

  return (
    <React.Fragment>

      <div className="h-screen flex">

        <LateralSection />

        <FrameFormulario
          titulo='Registrarse'
          subtitulo='Crear una nueva cuenta'
        >
          <Formulario>
            <Input
              placeholder='Nombre'
              name='user'
              icon={<IoIdCard className="w-6 h-6"/>}
            />
            <Input
              placeholder='Usuario'
              name='user'
              icon={<IoPeopleSharp className="w-6 h-6"/>}
            />
            <Input
              placeholder='Email'
              name='email'
              icon={<IoAtCircle className="w-6 h-6"/>}
            />
            <Input
              placeholder='Password'
              name='pass'
              icon={<IoKey className="w-6 h-6"/>}
            />
            

            <NavLink
              to={'/login'}
            >
              <Button
                titulo='Registrarme'
              />
            </NavLink>

          </Formulario>
        </FrameFormulario>


      </div>
    </React.Fragment>
  )
}

