import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './App.css';
import SideDrawer from './SideDrawer/SideDrawer';

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
      <SideDrawer playlist={playlistArr} />
      <NavLink to='/login'>Login</NavLink>
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
