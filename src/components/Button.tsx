import { IoExit } from "react-icons/io5"

export function PrimaryButton({titulo}){
  return(
    <button
      type="button"
      className={`flex justify-center bg-green-400 dark:bg-green-600 text-blue-900 dark:text-white py-2 px-3 rounded-lg font-semibold hover:scale-110 transition-all duration-200 w-full shadow-lg dark:shadow-green-600/80 shadow-green-500 hover:shadow-green-600/80 my-3 text-md`}>
        <IoExit className="w-6 h-6 mr-3"/>
      {titulo}
    </button>
  )
}

export function DangerButton({titulo}){
  return(
    <button
      type="button"
      className={`block bg-red-600 hover:text-gray-200 text-white py-2 px-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 w-full shadow-lg shadow-red-500/80 hover:shadow-red-600/80 my-3 text-md`}>
      {titulo}
    </button>
  )
}

export function Button ({titulo}){
  return(
    <button
      type="button"
      className={`block bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 text-white py-2 px-3 rounded-lg font-semibold hover:scale-105 transition-all duration-200 w-full shadow-md shadow-indigo-300 dark:shadow-indigo-500 my-3 text-lg`}>
      {titulo}
    </button>
  )
}

