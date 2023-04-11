/* eslint-disable no-unused-vars */
import { SimpleTable } from '@/components/Table'
import { RocketSwitch } from '@/components/RocketSwitch'
import bulbOn from '../../assets/bulb_on.jpg'
import bulbOff from '../../assets/bulb_off.jpg'
import { useState } from 'react'

export const Not = () => {
  const numeros = [
    [0, 1],
    [1, 0]
  ]

  const [isCheckedSwitch1, setIsCheckedSwitch1] = useState(false)

  const handleCheckBoxChange1 = e => {
    setIsCheckedSwitch1(e.target.checked)
  }

  const firstValue = isCheckedSwitch1 ? '1' : '0'

  let imagen = null

  if (firstValue === '0') {
    imagen = <img src={bulbOn} />
  } else {
    imagen = <img src={bulbOff} />
  }

  return (
    <div className='flex gap-7'>
      <div className='ml-20 mt-24'>
        <SimpleTable
          numeros={numeros}
        />
      </div>

      <div className='flex mt-24 gap-7 ml-[65px]'>
        <RocketSwitch
          checked={isCheckedSwitch1}
          onChange={handleCheckBoxChange1}
          value='1'
        />
      </div>

      <div className='w-40 ml-[206px] mt-20'>
        {imagen}
      </div>
    </div>
  )
}
