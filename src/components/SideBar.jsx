
import { HiX } from 'react-icons/hi'
import Links from './Links'
import routes from '../routes'

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-gradient-to-tr from-blue-400 to-purple-300 dark:from-blue-900 dark:to-purple-800 text-gray-800/90 dark:text-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96'
      }`}
    >
      <span
        className='absolute top-4 right-4 block cursor-pointer xl:hidden'
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className='mx-[46px] mt-[50px] flex items-center'>
        <div className='mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold text-navy-700 dark:text-white'>
          Logic <span className='font-medium'>Calculator</span>
        </div>
      </div>
      <div className='mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30' />

      {/* Nav items */}
      <ul className='mb-auto pt-1'>
        <Links routes={routes} />
      </ul>
      {/* Nav items end */}

    </div>
  )
}

export default Sidebar
