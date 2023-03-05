import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

export default function Formulario ({ children }) {
  const { t } = useTranslation()
  return (
    <>
      <form action='' className='grid gap-3'>

        {children}

        <div className='relative'>
          <p className='text-sm ml-2'>
            <span>{t('you_have_an_account')}</span>
            <NavLink
              to='/sign-up'
            >
              <span className='font-bold cursor-pointer hover:text-blue-600 hover:underline dark:hover:text-blue-300'>{t('sign_up')}</span>
            </NavLink>
          </p>
        </div>
      </form>
    </>
  )
}
