export default function Input({placeholder, name, icon}) {
  return (
    <div className="flex items-center border-4 py-2 px-3 rounded-xl border-blue-500">
      {icon}
      <input className="pl-4 outline-none" type="text" name={name} placeholder={placeholder} />
    </div>
  )
}
