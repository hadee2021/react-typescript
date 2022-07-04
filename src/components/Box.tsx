import React, { useEffect } from "react"
import { useState } from "react"

interface BoxProps {
  backgroundColor: string
  width: string
  height: string
}

const Box = ({ createBoxStyle } : any) => {
  const [style, setStyle] = useState({})

  useEffect(() => {
    console.log('박스 키우기')
    setStyle(createBoxStyle())
  }, [createBoxStyle])
  return (
    <div style={style}>

    </div>
  )
}

export default Box