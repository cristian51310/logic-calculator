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

        <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
          <IoPeopleSharp className='w-6 h-6' />
          <input className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' type='text' name='user' placeholder={t('user_label')} />
        </div>

        <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
          <IoKey className='w-6 h-6' />
          <input className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' type='text' name='user' placeholder={t('password_label')} />
        </div>

        <NavLink to='/admin/and'>
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
