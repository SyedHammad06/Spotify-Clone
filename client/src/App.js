import { useState, useEffect } from 'react';
import Drawer from './Drawer/Drawer';
import Search from './Search bar/Search';
import Player from './Player/Player';
import './App.css';

const App = () => {
  const [apiText, setApiText] = useState('');



  const playlistArr = ['Coding Focus', 'Justin Beiber', 'Lady Gaga'];

  console.log(apiText);

  return (
    <div className='App'>
      <Search />
      <Drawer playlist={playlistArr} />
    <a
        href='http://localhost:3000/'
        className="app-link"
        onClick={()=>
          fetch('http://localhost:8080/cookie',{
            method:"GET",
            headers: {
              "access-control-allow-origin" : "*",
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(res=>{console.log(res)})
          .withCredentials()
          .catch(err=>console.log(err))
        }
      >Get Cookie</a>
      <Player />
    </div>
  );
};
export default App;

/**
 * MdDevices
 * MdQueue
 * ImFeed
 * HiVolumeUp
 * ImShuffle
 * MdLoop
 * BiSkipPrevious
 * BiSkipNext
 * ImDrawer
 * AiFillHome
 * FaPlayCircle
 * FaRegUserCircle
 * FaExpandAlt
 * FaChevronLeft
 * FaChevronRight
 * FaSearch
 */
