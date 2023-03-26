import Input from '../components/Input'
import Formulario from '@/components/Formulario'
import { Button } from '@/components/Button'
import { NavLink } from 'react-router-dom'
import { IoPeopleSharp, IoKey } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

export const Login = () => {
  const { t } = useTranslation()
  return (
    <div className='h-screen flex'>

      <Formulario titulo={t('log_in')} subtitulo={t('log_in_welcome')}>

        <Input
          placeholder={t('user_label')}
          name='user'
          icon={<IoPeopleSharp className='w-6 h-6' />}
        />

        <Input
          placeholder={t('password_label')}
          name='pass'
          icon={<IoKey className='w-6 h-6' />}
        />

        <NavLink to='/admin'>
          <Button titulo={t('log_in')} />
        </NavLink>

        <p className='text-sm ml-2'>
          <span>{t('you_not_have_an_account')}</span>
          <NavLink to='/auth/signup'>
            <span className='font-bold cursor-pointer hover:text-blue-600 hover:underline dark:hover:text-blue-300'>{t('sign_up')}</span>
          </NavLink>
        </p>

      </Formulario>

    </div>

  )
}
