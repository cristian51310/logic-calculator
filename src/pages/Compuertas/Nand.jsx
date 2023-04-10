/* eslint-disable no-unused-vars */
import { Table } from '@/components/Table'
import { RocketSwitch } from '@/components/RocketSwitch'
import bulbOn from '../../assets/bulb_on.jpg'
import bulbOff from '../../assets/bulb_off.jpg'
import { useState } from 'react'

export const Nand = () => {
  const numeros = [
    [0, 0, 1],
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
  ]
  const [isCheckedSwitch1, setIsCheckedSwitch1] = useState(false)
  const [isCheckedSwitch2, setIsCheckedSwitch2] = useState(false)

  const handleCheckBoxChange1 = e => {
    setIsCheckedSwitch1(e.target.checked)
  }

  const handleCheckBoxChange2 = e => {
    setIsCheckedSwitch2(e.target.checked)
  }

  const firstValue = isCheckedSwitch1 ? '1' : '0'
  const secondValue = isCheckedSwitch2 ? '1' : '0'

  let imagen = null

  if (firstValue === '1' && secondValue === '1') {
    imagen = <img src={bulbOff} />
  } else {
    imagen = <img src={bulbOn} />
  }

  return (
    <div className='flex gap-7'>
      <div className='ml-12 mt-5'>
        <Table
          numeros={numeros}
        />
      </div>

      <div className='flex mt-16 gap-7 ml-4'>
        <RocketSwitch
          checked={isCheckedSwitch1}
          onChange={handleCheckBoxChange1}
          value='1'
        />
        <RocketSwitch
          checked={isCheckedSwitch2}
          onChange={handleCheckBoxChange2}
          value='1'
        />
      </div>

      <div className='w-40 ml-[117px] mt-20'>
        {imagen}
      </div>
    </div>
  )
}
