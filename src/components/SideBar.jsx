import Links from './Links'
import routes from '../routes'

const Sidebar = () => {
  return (
    <div className='fixed min-h-full bg-gradient-to-tr from-blue-900 to-purple-800 text-white pb-10'>
      <div className='mx-[49px]'>
        <div className='mt-9 ml-1 h-2.5 font-poppins text-[26px] font-bold text-navy-700 text-white'>
          Logic Calculator
        </div>
      </div>
      <div className='mt-[58px] mb-7 h-px bg-white/70' />

      <ul>
        <Links routes={routes} />
      </ul>
    </div>
  )
}

export default Sidebar
