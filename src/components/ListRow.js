import React, { useMemo } from 'react'

const ListRow = ({ row, keys }) => {
  const items = useMemo(() => {
    return keys.map(k => row[k])
  }, [row, keys])

  return (
    <li className="row">
      {items.map(item => (
        <div key={item} className="heading-item" style={{ width: `${100 / items.length}%` }}>
          { item || '-' }
        </div>
      ))}
    </li>
  )
}

export default ListRow
