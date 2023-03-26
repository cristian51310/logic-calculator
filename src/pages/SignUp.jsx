import { Button } from '@/components/Button'
import Formulario from '@/components/Formulario'
import { NavLink } from 'react-router-dom'
import Input from '../components/Input'
import { IoPeopleSharp, IoKey, IoIdCard, IoAtCircle } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

export default function Signup () {
  const { t } = useTranslation()

  return (

    <div className='h-screen flex'>

      <Formulario
        titulo={t('sign_up')}
        subtitulo={t('sign_up_welcome')}
      >

        <Input
          placeholder={t('name_label')}
          name='name'
          icon={<IoIdCard className='w-6 h-6' />}
        />
        <Input
          placeholder={t('user_label')}
          name='user'
          icon={<IoPeopleSharp className='w-6 h-6' />}
        />
        <Input
          placeholder={t('email_label')}
          name='email'
          icon={<IoAtCircle className='w-6 h-6' />}
        />
        <Input
          placeholder={t('password_label')}
          name='pass'
          icon={<IoKey className='w-6 h-6' />}
        />

        <NavLink to='/auth/login'>
          <Button
            titulo={t('sign_up')}
          />
        </NavLink>

        <p className='text-sm ml-2'>
          <span>{t('you_have_an_account')}</span>
          <NavLink to='/auth/login'>
            <span className='font-bold cursor-pointer hover:text-blue-600 hover:underline dark:hover:text-blue-300'>{t('log_in')}</span>
          </NavLink>
        </p>

      </Formulario>
    </div>

  )
}
