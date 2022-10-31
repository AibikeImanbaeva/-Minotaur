import React from 'react'
import { useBaskets } from '../../contexts/BasketsContextProvider'
import BasketsCard from './BasketsCard'

const MacaronsCount = () => {
    const { count, getCount } = useBaskets()
  return (
    <div>
<BasketsCard onClick={getCount} />
<h2>{count}</h2>
    </div>
  )
}

export default MacaronsCount