import React from 'react'

const ListHeading = ({ headingItems }) => {
  return (
    <li className="heading">
      {headingItems.map(item => (
        <div key={item} className="heading-item" style={{ width: `${100 / headingItems.length}%` }}>
          { item || '-' }
        </div>
      ))}
    </li>
  )
}

export default ListHeading
