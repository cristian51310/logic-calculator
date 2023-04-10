import Formulario from '@/components/Form'
import { Button } from '@/components/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoPeopleSharp, IoKey } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const Login = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    user: '',
    password: ''
  })

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/admin/and')
  }

  return (
    <div className='h-screen flex'>

      <Formulario
        handleSubmit={handleSubmit}
        titulo={t('log_in')}
        subtitulo={t('log_in_welcome')}
      >

        <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
          <IoPeopleSharp className='w-6 h-6' />
          <input onChange={handleChange} type='text' name='user' placeholder={t('user_label')} className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' />
        </div>

        <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
          <IoKey className='w-6 h-6' />
          <input onChange={handleChange} type='password' name='password' placeholder={t('password_label')} className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' />
        </div>

        <Button
          type='submit'
          titulo={t('log_in')}
        />

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
