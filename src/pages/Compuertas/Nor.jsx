/* eslint-disable no-unused-vars */
import { Table } from '@/components/Table'
import { RocketSwitch } from '@/components/RocketSwitch'
import bulbOn from '../../assets/bulb_on.jpg'
import bulbOff from '../../assets/bulb_off.jpg'

export const Nor = () => {
  const numeros = [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 0]
  ]

  return (
    <div className='flex gap-7'>
      <div className='ml-12 mt-5'>
        <Table
          numeros={numeros}
        />
      </div>

      <div className='flex mt-16 gap-7 ml-4'>
        <RocketSwitch />
        <RocketSwitch />
      </div>

      <div className='w-40 ml-[117px] mt-20'>
        <img src={bulbOff} alt='' id='bulbContainer' />
      </div>
    </div>
  )
}
