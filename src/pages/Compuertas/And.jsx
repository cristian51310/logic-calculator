/* eslint-disable no-unused-vars */
import { Table } from '@/components/Table'
import { RocketSwitch } from '@/components/RocketSwitch'
import bulbOn from '../../assets/bulb_on.jpg'
import bulbOff from '../../assets/bulb_off.jpg'
import { changeLanguage } from 'i18next'

export const And = () => {
  const numeros = [
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 1]
  ]

  return (
    <div className='flex gap-7'>
      <Table
        numeros={numeros}
      />

      <RocketSwitch />
      <RocketSwitch />

      <div className='w-40'>
        <img src={bulbOff} alt='' id='bulbContainer' />
      </div>

    </div>
  )
}
