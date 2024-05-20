import React from 'react'
import { SVGType } from 'src/types'

interface ScrollableProps {
  n? : number,
  image : React.FC | SVGType
}

function Scrollable({ image} : ScrollableProps) {
  return (
    <>

          {/* <div className={"bg-primary h-96 mb-10 w-full flex justify-center items-center"} >this image {n}</div> */}

          <img src={image?.toString()} className={" h-96 mb-10 w-full flex justify-center items-center"} ></img>

    </>
  )
}

export default Scrollable

