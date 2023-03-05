import React from 'react'
import Input from '../components/Input'
import LateralSection from '@/components/LateralSection'
import Formulario from '@/components/Formulario'
import FrameFormulario from '@/components/frameFormulario'
import { Button } from '@/components/Button'
import { NavLink } from 'react-router-dom'
import { IoPeopleSharp, IoKey } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

export const Login = () => {
  const { t } = useTranslation()
  return (
    <React.Fragment>

      <div className="h-screen flex">

        <LateralSection />

        <FrameFormulario
          titulo={t('log_in')}
          subtitulo={t('log_in_welcome')}
        >
          <Formulario>
            <Input
              placeholder={t('user_label')}
              name='user'
              icon={<IoPeopleSharp className="w-6 h-6"/>}
            />
            <Input
              placeholder={t('password_label')}
              name='pass'
              icon={<IoKey className="w-6 h-6"/>}
            />

            <NavLink
              to={'/'}
            >
              <Button
                titulo={t('log_in')}
              />
            </NavLink>

          </Formulario>
        </FrameFormulario>

      </div>
    </React.Fragment>
  )
}
