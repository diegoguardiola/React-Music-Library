
import React from 'react'
import GalleryItem  from './GalleryItem'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import {v4 as uuidv4} from 'uuid'

export default function Gallery() {
  //{data} instead of props refactored so Gallery doesn't take props 
  const data = useContext(DataContext)

  const display = data.map((item, index)=>{
    return(
      <GalleryItem item={item} key ={index}/>
    )
  })
  return (
    <div>
      {display}
    </div>
    // Commented out the uuid version as the assignment wants an id from the map
    // <div>
    //   <GalleryItem key={uuidv4()} data={data}/>
    // </div>
  )
}