import React from 'react'
import { SVGType } from 'src/types'

interface ScrollableProps {
  n?: number,
  image: React.FC | SVGType | string;
}

function Scrollable({ image }: ScrollableProps) {
  return (
    <>

      {/* <div className={"bg-primary h-96 mb-10 w-full flex justify-center items-center"} >this image {n}</div> */}
      <div className='h-72 flex flex-row items-start md:items-center'>
        <img src={image?.toString()} className={"w-full flex justify-center items-center shadow-md md:rounded-lg"} ></img>
      </div>

    </>
  )
}

export default Scrollable

