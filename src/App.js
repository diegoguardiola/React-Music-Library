import './App.css';
import { useState, useEffect, useRef } from 'react'
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery/Gallery';

import { DataContext } from './context/DataContext';
import { SearchContext } from './context/SearchContext';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AlbumView from './components/AlbumView';
import ArtistView from './components/ArtistView';

function App() {
 let [search, setSearch] = useState('')
 let [data, setData] = useState([])
 let [message, setMessage] = useState('')

 let searchInput = useRef('')


 //API isn't working so going to apply what the assignment is using
 
useEffect(() => {
  if(search){

}
}, [search])


  const handleInput = (e, term)=>{
    e.preventDefault()

    const fetchData = async () => {
      const response = await fetch(`https://itunes.apple.com/search?term=${term}`)
      // temporat literal `$results
      // `https://itunes.apple.com/search?term=${searc
      const resData = await response.json()
     if (resData.results.length >0){
      setData(resData.results)
     } else {
      setMessage('Not Found')
     }
    }
  
    fetchData()

    setSearch(term)
  }
 return (
 <>
  <Router>
    <Routes>
      <Route path='/' element={
        <>
          <SearchContext.Provider value={{
            input: searchInput,
            handleInput: handleInput
          }}>
            <SearchBar></SearchBar>
          </SearchContext.Provider>
          <DataContext.Provider value={data}>
            <Gallery/>
          </DataContext.Provider>
          
        </>
      } />
      <Route path ='/album/:id' element={<AlbumView />}/>
      <Route path ='/artist/:id' element={<ArtistView/>} />
    </Routes>
  </Router>
 </>
)}

export default App;