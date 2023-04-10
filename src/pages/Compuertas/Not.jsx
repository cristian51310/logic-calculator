/* eslint-disable no-unused-vars */
import { SimpleTable } from '@/components/Table'
import { RocketSwitch } from '@/components/RocketSwitch'
import bulbOn from '../../assets/bulb_on.jpg'
import bulbOff from '../../assets/bulb_off.jpg'

export const Not = () => {
  const numeros = [
    [0, 1],
    [1, 0]
  ]

  return (
    <div className='flex gap-7'>
      <div className='ml-20 mt-24'>
        <SimpleTable
          numeros={numeros}
        />
      </div>

      <div className='flex mt-24 gap-7 ml-[65px]'>
        <RocketSwitch />
      </div>

      <div className='w-40 ml-[206px] mt-20'>
        <img src={bulbOff} alt='' id='bulbContainer' />
      </div>
    </div>
  )
}
