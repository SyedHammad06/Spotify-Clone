import { useState, useEffect, Component } from 'react';
import Drawer from './Drawer/Drawer';
import Search from './Search bar/Search';
import Player from './Player/Player';
import Api from './api';
import './App.css';

const App = () => {
  const [apiText, setApiText] = useState('');

  const playlistArr = ['Coding Focus', 'Justin Beiber', 'Lady Gaga'];

  console.log(apiText);

  return (
    <div className='App'>
      <Search />
      <Drawer playlist={playlistArr} />
      <Player />
      <Api/>
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
