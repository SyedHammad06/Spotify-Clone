import { useState, useEffect } from 'react';
import Drawer from './Drawer/Drawer';
import Search from './Search bar/Search';
import Player from './Player/Player';
import './App.css';

const App = () => {
  const [apiText, setApiText] = useState('');



  const playlistArr = ['Coding Focus', 'Justin Beiber', 'Lady Gaga'];

  console.log(apiText);

  callAPI(){
    fetch("http://localhost:8080/api")
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
  }

  return (
    <div className='App'>
      <Search />
      <Drawer playlist={playlistArr} />
      <button onCLick="" >get</button>
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
