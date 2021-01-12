import { useState, useEffect } from 'react';
import SideDrawer from './SideDrawer/SideDrawer';
import Search from './Search bar/Search';
import Player from './Player/Player';
import './App.css';

const App = () => {
  const [apiText, setApiText] = useState('');

  const apiReq = () => {
    fetch('http://localhost:8080/api')
      .then((res) => res.text())
      .then((res) => setApiText(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    apiReq();
  }, []);

  const playlistArr = ['Coding Focus', 'Justin Beiber', 'Lady Gaga'];

  console.log(apiText);

  return (
    <div className='App'>
      <Search />
      <SideDrawer playlist={playlistArr} />
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
