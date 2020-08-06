import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Tabletop from 'tabletop'

import config from '../config'

import ListHeading from './ListHeading'
import ListRow from './ListRow'

import './Overview.css'

const PUBLIC_SHEET_URL = `https://docs.google.com/spreadsheets/d/${config.sheetKey}/pubhtml`

const Overview = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [sheetData, setSheetData] = useState()

  const initTableTop = useCallback(() => {
    Tabletop.init({
      key: PUBLIC_SHEET_URL,
      simpleSheet: true,
      callback: data => {
        setSheetData(data)
        setIsLoading(false)
      }
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    initTableTop()

    const timer = setInterval(initTableTop, 60000)

    return () => { clearInterval(timer) }
  }, [initTableTop])

  const headingItems = useMemo(() => {
    return (sheetData && sheetData[0] && Object.keys(sheetData[0])) || []
  }, [sheetData])

  const rows = useMemo(() => {
    if (!sheetData) {
      return (
        <div className="no-data">
          <p>
            No data loaded! Edit the sheet <a href={`https://docs.google.com/spreadsheets/d/${config.sheetKey}/edit#gid=0`} target="_blank" rel="noopener noreferrer">here</a>
          </p>
        </div>
      )
    }

    return (
      <div className="weekly-overview">
        <ul className="list">
          <ListHeading headingItems={headingItems} />
          {sheetData.map((row, i) => (
            <ListRow row={row} keys={headingItems} />
          ))}
        </ul>
      </div>
    )
  }, [sheetData, headingItems])

  return (
    <div className="Overview">
      <h1>{config.appName}</h1>
      { isLoading ? <p>Loading...</p> : rows }
    </div>
  )
}

export default Overview
