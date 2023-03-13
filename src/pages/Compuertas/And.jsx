/* eslint-disable no-unused-vars */
import { Table } from '@/components/Table'
import { RocketSwitch } from '@/components/RocketSwitch'
import bulbOn from '../../components/LigthBulb/bulb_on.jpg'
import bulbOff from '../../components/LigthBulb/bulb_off.jpg'
import { changeLanguage } from 'i18next'

export const And = () => {
  const numeros = [
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 1]
  ]

  return (
    <div>
      <Table
        numeros={numeros}
      />

      <div className='flex mt-5 mb-5 gap-7'>
        <RocketSwitch />
        <RocketSwitch />
      </div>

      <div className='w-40'>
        <img src={bulbOff} alt='' id='bulbContainer' />
      </div>

    </div>
  )
}
