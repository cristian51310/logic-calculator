import { useEffect, useState } from "react";
import { IoMoon, IoSunny, } from "react-icons/io5";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export const SwitchBeta = ({position}) => {

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  )
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const options = [
    {
      icon: <IoSunny/>,
      text: "ligth"
    },
    {
      icon: <IoMoon />,
      text: "dark"
    },
  ]

  function onWindowMatch(){
    if(localStorage.theme == "dark" || (!("theme" in localStorage) && darkQuery.matches)){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
  }
  onWindowMatch()

  useEffect(() => {
    switch(theme){
      case 'dark':
        document.documentElement.classList.add('dark')
        window.localStorage.setItem("theme", "dark")
        break
      case 'ligth':
        document.documentElement.classList.remove('dark')
        window.localStorage.setItem("theme", "ligth")
        break
      default:
        localStorage.removeItem("theme")
        break
    }
  }, [theme])

  return (
    <div className={position}>
      <div className="flex flex-row justify-center items-center w-36 h-14 bg-blue-500 dark:bg-yellow-500 rounded-md text-gray-100 shadow-lg shadow-blue-500/80 dark:shadow-yellow-400/60 transition duration-300 cursor-pointer">
        {
          options?.map((opt) => (
            <div
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-14 h-10 leading-9 text-2xl rounded-md m-1 grid place-items-center ${theme == opt.text && "text-yellow-400 dark:text-blue-600 bg-blue-600 dark:bg-yellow-600"}`}>
              {opt.icon}
            </div>
          ))
        }
      </div>
    </div>
  )
}


export const LanguageSwitch = ({position}) => {

  const [language, setLanguage] = useState('ligth')

  const options = [
    {
      icon: <span class="fi fi-mx"></span>,
      text: "ligth"
    },
    {
      icon: <span class="fi fi-us"></span>,
      text: "dark"
    },
  ]

  return(
    <div className={position}>
      <div className="flex flex-row justify-center items-center w-36 h-14 bg-blue-500 dark:bg-yellow-500 rounded-md text-gray-100 shadow-lg shadow-blue-500/80 dark:shadow-yellow-400/60 transition duration-300">
        {
          options?.map((opt) => (
            <div
              key={opt.text}
              onClick={() => setLanguage(opt.text)}
              className={`w-14 h-10 leading-9 text-2xl rounded-md m-1 grid place-items-center ${language == opt.text && "text-yellow-400 dark:text-blue-600 bg-blue-600 dark:bg-yellow-600"}`}>
              {opt.icon}
            </div>
          ))
        }
      </div>
    </div>
  )
}