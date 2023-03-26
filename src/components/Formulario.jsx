import { NavLink } from 'react-router-dom'
import { PrimaryButton } from './Button'
import { ThemeSwitch, LanguageSwitch } from './Switch'
import { useTranslation } from 'react-i18next'

export default function Formulario ({ children, titulo, subtitulo }) {
  const { t } = useTranslation()
  return (
    <div className=' flex w-full'>
      <div className='relative overflow-hidden flex w-5/12 bg-gradient-to-tr from-blue-400 to-purple-300 dark:from-blue-900 dark:to-purple-800 justify-around items-center text-gray-800/90 dark:text-white transition duration-300'>
        <div>
          <h1 className=' font-bold text-4xl font-sans mt-4'>{t('lateral_section_title')}</h1>
          <p className=' text-lg mt-2 mb-10 text-center'>{t('lateral_section_subtitle')}</p>

          <NavLink to='/admin'>
            <PrimaryButton titulo={t('enter_as_guest')} />
          </NavLink>

          <ThemeSwitch position='absolute bottom-24 right-10' />
          <LanguageSwitch position='absolute bottom-7 right-10' />
        </div>

        <div className='border-blue-900 dark:border-blue-200 absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-40 border-t-8' />
        <div className='border-blue-900 dark:border-blue-200 absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8' />
        <div className='border-blue-900 dark:border-blue-200 absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8' />
        <div className='border-blue-900 dark:border-blue-200 absolute -top-24 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8' />
      </div>

      <div className='flex w-7/12 justify-center py-10 items-center bg-white dark:bg-slate-800 transition duration-100'>
        <div className='min-h-screen py-6 flex flex-col justify-center'>
          <div className='relative py-3 max-w-xl mx-auto'>

            <div className='absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-400 dark:to-blue-700 shadow-2xl transform -skew-y-8 -rotate-6 rounded-3xl' />

            <div className='relative px-20 py-10 bg-gray-200 dark:bg-slate-600 shadow-xl rounded-3xl text-gray-900 dark:text-gray-100'>
              <h1 className=' font-bold text-2xl mb-1'>{titulo}</h1>
              <p className='text-sm font-normal  mb-5'>{subtitulo}</p>

              <div className='py-3 text-base space-y-2 '>
                <form action='' className='grid gap-3'>
                  {children}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
