import { NavLink } from 'react-router-dom'
import { PrimaryButton } from './Button'
import { SwitchBeta, LanguageSwitch } from './Switch'
import { useTranslation } from 'react-i18next'

export default function LateralSection () {
  const { t } = useTranslation()
  return (
    <>
      <div className='relative overflow-hidden flex w-5/12 bg-gradient-to-tr from-blue-400 to-purple-300 dark:from-blue-900 dark:to-purple-800 justify-around items-center text-gray-800/90 dark:text-white transition duration-300'>

        <div>
          <h1 className=' font-bold text-4xl font-sans mt-4'>{t('lateral_section_title')}</h1>
          <p className=' text-lg mt-2 mb-10 text-center'>{t('lateral_section_subtitle')}</p>

          <NavLink
            to='/'
          >
            <PrimaryButton
              titulo={t('enter_as_guest')}
            />
          </NavLink>

          <SwitchBeta position='absolute bottom-24 right-10' />
          <LanguageSwitch position='absolute bottom-7 right-10' />
        </div>

        <div className='border-blue-900 dark:border-blue-200 absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-40 border-t-8' />
        <div className='border-blue-900 dark:border-blue-200 absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8' />
        <div className='border-blue-900 dark:border-blue-200 absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8' />
        <div className='border-blue-900 dark:border-blue-200 absolute -top-24 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8' />
      </div>
    </>
  )
}
