import { Button } from '@/components/Button'
import Formulario from '@/components/Form'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoPeopleSharp, IoKey, IoIdCard } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_USUARIO } from '@/graphql/usuarios'

export default function Signup () {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    user: '',
    password: ''
  })

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const [createUsuario, { error1 }] = useMutation(CREATE_USUARIO)

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      console.log(user)
      const { data } = await createUsuario({
        variables: {
          name: user.name,
          user: user.user,
          password: user.password
        }
      })
      console.log('mutation' + data)
      navigate('/auth/login')
    } catch (error) {
      console.log('error' + error1)
    }
  }

  return (

    <div className='h-screen flex'>

      <Formulario
        titulo={t('sign_up')}
        subtitulo={t('sign_up_welcome')}
      >
        <form className='grid gap-3' action='' method='POST' onSubmit={handleSubmit}>

          <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
            <IoIdCard className='w-6 h-6' />
            <input onChange={handleChange} value={user.name} type='text' name='name' placeholder={t('name_label')} className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' />
          </div>

          <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
            <IoPeopleSharp className='w-6 h-6' />
            <input onChange={handleChange} value={user.user} type='text' name='user' placeholder={t('user_label')} className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' />
          </div>

          <div className='flex items-center border-4 py-2 px-3 rounded-xl border-blue-500'>
            <IoKey className='w-6 h-6' />
            <input onChange={handleChange} value={user.password} type='password' name='password' placeholder={t('password_label')} className='pl-4 bg-gray-200 dark:bg-slate-600 outline-none' />
          </div>

          <Button
            type='submit'
            titulo={t('sign_up')}
          />
        </form>

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
