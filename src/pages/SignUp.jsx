import { Button } from '@/components/Button'
import Formulario from '@/components/Formulario'
import { NavLink } from 'react-router-dom'
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

        <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
          <IoIdCard className='w-6 h-6' />
          <input className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' type='text' name='name' placeholder={t('name_label')} />
        </div>

        <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
          <IoPeopleSharp className='w-6 h-6' />
          <input className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' type='text' name='user' placeholder={t('user_label')} />
        </div>

        <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
          <IoAtCircle className='w-6 h-6' />
          <input className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' type='text' name='email' placeholder={t('email_label')} />
        </div>

        <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
          <IoKey className='w-6 h-6' />
          <input className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' type='text' name='password' placeholder={t('password_label')} />
        </div>

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
