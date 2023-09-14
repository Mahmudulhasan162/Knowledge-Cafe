
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] =useState([]);
  const handleBookmarks = blog =>{
    const newBookMarks= [...bookmarks, blog];
    setBookmarks(newBookMarks);
  }
  return (
    <>
     
      <Header></Header>
      <div className='flex max-w-5xl mx-auto'>
      <Blogs handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      
    </>
  )
}

export default App
