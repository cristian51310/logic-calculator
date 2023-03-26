/* eslint-disable react/no-children-prop */
import { Link } from 'react-router-dom'
import avatar from '../assets/avatar4.png'
import Dropdown from './Dropdown'
import { ThemeSwitch, LanguageSwitch } from './Switch'
import { useTranslation } from 'react-i18next'

const Navbar = (props) => {
  const { brandText } = props
  const { t } = useTranslation()

  return (
    <nav className='sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-gradient-to-r from-blue-400 to-purple-300 dark:from-blue-900 dark:to-purple-800 text-gray-800/90 dark:text-white p-2 backdrop-blur-xl'>
      <div className='ml-[32px]'>
        <p className='shrink text-[33px] capitalize text-navy-700'>
          <Link
            to='#'
            className='font-bold capitalize hover:text-navy-700 '
          >
            {brandText}
          </Link>
        </p>
      </div>

      <div className='relative flex h-[68px] flex-grow-0 items-center justify-around rounded-xl bg-white dark:bg-slate-600 px-1 py-1 gap-2'>
        <div className='flex h-full items-center rounded-full bg-lightPrimary text-navy-700' />
        <ThemeSwitch />
        <LanguageSwitch />
        <Dropdown
          button={
            <img
              className='h-14 w-14 rounded-xl shadow-lg shadow-blue-500/80 mr-1'
              src={avatar}
            />
          }
          children={
            <div className='flex h-24 w-56 flex-col justify-start rounded-[20px] bg-gray-200 shadow-xl shadow-shadow-500'>

              <div className='mt-3 ml-6 flex flex-col'>
                <p className='text-md font-bold mb-1 dark:text-gray-800'>
                  👋 {t('hello_label')}, Adela
                </p>
                <Link to='/auth/login'>
                  <p className='mt-3 text-md font-medium text-red-500 hover:text-red-600'>
                    {t('logout_label')}
                  </p>
                </Link>

              </div>
            </div>
          }
          classNames='py-2 top-8 -left-[180px] w-max'
        />
      </div>
    </nav>
  )
}

export default Navbar
