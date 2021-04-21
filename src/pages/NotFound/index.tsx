import React from 'react'
import './index.scss'
import constants from '../../constants'

export const NotFound = () => {
  return (
    <main>
      <img src="https://btscorporate.net.au/images/404.png" alt={constants.pageNotFound}/>
    </main>
  )
}
