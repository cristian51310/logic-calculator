import { Table } from '@/components/Table'

export const Or = () => {
  const numeros = [
    [0, 0, 0],
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ]

  return (
    <>
      <div>
        <h1>Or</h1>
        <Table
          numeros={numeros}
        />
      </div>
    </>
  )
}
