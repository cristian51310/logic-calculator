import Links from './Links'
import routes from '../routes'

const Sidebar = () => {
  return (
    <div className='duration-175 linear fixed flex min-h-full flex-col bg-gradient-to-tr from-blue-400 to-purple-300 dark:from-blue-900 dark:to-purple-800 text-gray-800/90 dark:text-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800'>
      <div className='mx-[46px] mt-[50px] flex items-center'>
        <div className='mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold text-navy-700 dark:text-white'>
          Logic <span className='font-medium'>Calculator</span>
        </div>
      </div>
      <div className='mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30' />

      <ul className='mb-auto pt-1'>
        <Links routes={routes} />
      </ul>

    </div>
  )
}

export default Sidebar
