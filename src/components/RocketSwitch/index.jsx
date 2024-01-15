import './style.css'

export function RocketSwitch ({ checked, onChange, value }) {
  return (
    <label className='switch'>
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <div className='button'>
        <div className='light' />
        <div className='dots' />
        <div className='characters' />
        <div className='shine' />
        <div className='shadow' />
      </div>
    </label>
  )
}
