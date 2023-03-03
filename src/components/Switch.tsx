import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export function ThemeSwitch({ position }) {

  const [toggle, setToggle] = useState(true);
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia('prefers-color-scheme: dark').matches){
      setTheme("dark");
    }
    else{
      setTheme("ligth")
    }
  }, [])

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () =>{
    setTheme(theme === "dark" ? "ligth": "dark")
  }

  return (
    <div className={position}>
      <div className="flex flex-row justify-center items-center pt-5">
        <IoSunny className="h-6 w-6 mx-3 text-white" />
        <div className="">
          <div className={`w-16 h-8 flex items-center  rounded-full transform duration-500 p-1 cursor-pointer ${toggle ? 'bg-orange-500' : 'bg-green-500'}`}
            onClick={() => {
              setToggle(!toggle);
              handleThemeSwitch()
            }}
          >
            <div className={`bg-white w-6 h-6 rounded-full shadow-xs shadow-blue-500 transform duration-500 ease-in-out ${toggle ? null : 'transform translate-x-8'}`}
            ></div>
          </div>
        </div>
        <IoMoon className="h-6 w-6 mx-3 text-white" />
      </div>
    </div>
  );
}


export function LanguageSwitch({ position }) {

  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-8";

  return (
    <div className={position}>
      <div className="flex flex-row justify-center items-center pt-5">
        <IoSunny className="h-6 w-6 mx-3 text-white" />
        <div className="">
          <div
            className="w-16 h-8 flex items-center bg-blue-500 rounded-full p-1 cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <div
              className={
                "bg-white w-6 h-6 rounded-full shadow-xs shadow-blue-500 transform duration-500 ease-in-out" + (toggle ? null : toggleClass)
              }
            ></div>
          </div>
        </div>
        <IoMoon className="h-6 w-6 mx-3 text-white" />
      </div>
    </div>


  );
}

