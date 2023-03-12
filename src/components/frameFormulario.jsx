import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function FrameFormulario ({ children, titulo, subtitulo }) {
  const { t } = useTranslation()
  return (
    <>
      <div className='flex w-7/12 justify-center py-10 items-center bg-white dark:bg-slate-800 transition duration-100'>
        <div className='min-h-screen py-6 flex flex-col justify-center'>
          <div className='relative py-3 max-w-xl mx-auto'>

            <div
              className='absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-400 dark:to-blue-700 shadow-2xl transform -skew-y-8 -rotate-6 rounded-3xl'
            />

            <div className='relative px-20 py-10 bg-gray-200 dark:bg-slate-600 shadow-xl rounded-3xl text-gray-900 dark:text-gray-100'>
              <h1 className=' font-bold text-2xl mb-1'>{titulo}</h1>
              <p className='text-sm font-normal  mb-5'>{subtitulo}</p>

              <div className='py-3 text-base space-y-2 '>
                <form action='' className='grid gap-3'>

                  {children}

                  <div className='relative'>
                    <p className='text-sm ml-2'>
                      <span>{t('you_have_an_account')}</span>
                      <NavLink to='/sign-up'>
                        <span className='font-bold cursor-pointer hover:text-blue-600 hover:underline dark:hover:text-blue-300'>{t('sign_up')}</span>
                      </NavLink>
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
