

import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function AlbumView() {
    const [albumData, setAlbumData] = useState([])
    const {id} = useParams()
  return (
  <>
    <p>The Album ID is {id}</p>
  </>
  )
}