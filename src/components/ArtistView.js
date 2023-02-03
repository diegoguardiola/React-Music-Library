
import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

export default function ArtistView() {
    const [artistData, setArtistData] = useState([])
    const {id} = useParams()
  return (
    <div>
        <p>The Artist ID is {id}</p>
    </div>
  )
}