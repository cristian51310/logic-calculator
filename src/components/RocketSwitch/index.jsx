import './style.css'

// Esta duncion debe de estar dentro de un display flex
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
