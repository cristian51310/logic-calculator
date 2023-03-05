/* eslint-disable import/no-absolute-path */

import { useEffect, useState } from 'react'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import '/node_modules/flag-icons/css/flag-icons.min.css'

export const SwitchBeta = ({ position }) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'system'
  )
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const options = [
    {
      icon: <IoSunny />,
      text: 'ligth'
    },
    {
      icon: <IoMoon />,
      text: 'dark'
    }
  ]

  function onWindowMatch () {
    if (window.localStorage.theme === 'dark' || (!('theme' in window.localStorage) && darkQuery.matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark')
        window.localStorage.setItem('theme', 'dark')
        break
      case 'ligth':
        document.documentElement.classList.remove('dark')
        window.localStorage.setItem('theme', 'ligth')
        break
      default:
        window.localStorage.removeItem('theme')
        break
    }
  }, [theme])

  return (
    <div className={position}>
      <div className='flex flex-row justify-center items-center w-36 h-14 bg-blue-500 dark:bg-yellow-500 rounded-md text-gray-100 shadow-lg shadow-blue-500/80 dark:shadow-yellow-400/60 transition duration-300 cursor-pointer'>
        {
          options?.map(({ icon, text }) => (
            <div
              key={text}
              onClick={() => setTheme(text)}
              className={`w-14 h-10 leading-9 text-2xl rounded-md m-1 grid place-items-center transition duration-300 ${theme === text && 'text-yellow-400 dark:text-blue-600 bg-blue-600 dark:bg-yellow-600'}`}
            >
              {icon}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export const LanguageSwitch = ({ position }) => {
  const { i18n } = useTranslation()

  const [language, setLanguage] = useState(
    window.localStorage.getItem('lang')
  )

  const LANGUAGES = [
    {
      icon: <span class='fi fi-mx' />,
      text: 'spanish',
      code: 'es'
    },
    {
      icon: <span class='fi fi-us' />,
      text: 'english',
      code: 'en'
    }
  ]

  useEffect(() => {
    if (language === 'spanish') {
      window.localStorage.setItem('lang', 'spanish')
      i18n.changeLanguage('es')
    } else if (language === 'english') {
      window.localStorage.setItem('lang', 'english')
      i18n.changeLanguage('en')
    }
  }, [language])

  return (
    <div className={position}>
      <div className='flex flex-row justify-center items-center w-36 h-14 bg-blue-500 rounded-md text-gray-100 shadow-lg shadow-blue-500/80 transition duration-300 cursor-pointer'>
        {
          LANGUAGES?.map(({ icon, text, code }) => (
            <div
              key={code}
              onClick={() => {
                setLanguage(text)
              }}
              className={`w-14 h-10 transition duration-300 leading-9 text-2xl rounded-md m-1 grid place-items-center ${language === text && 'text-yellow-400 bg-blue-600 '}`}
            >
              {icon}
            </div>
          ))
        }
      </div>
    </div>
  )
}
