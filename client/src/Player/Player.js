import { useState } from 'react';
import { ImShuffle } from 'react-icons/im';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { FaPlayCircle, FaExpandAlt } from 'react-icons/fa';
import { MdLoop, MdQueue, MdDevices } from 'react-icons/md';
import { HiVolumeUp } from 'react-icons/hi';
import classes from './Player.module.css';

const Player = (props) => {
  const [val, setVal] = useState(100);
  return (
    <div className={classes.Player}>
      <div className={classes.Image}>
        {props.img ? <img src={props.img} alt='profile' /> : null}
      </div>
      <div className={classes.Mid}>
        <div className={classes.Icons}>
          <ImShuffle size={25} className={classes.Svg1} />
          <BiSkipPrevious
            size={30}
            className={classes.Svg2}
            style={{ transform: 'translateY(4px)' }}
          />
          <FaPlayCircle
            size={45}
            className={classes.Svg3}
            style={{ transform: 'translateY(9px)' }}
          />
          <BiSkipNext
            size={30}
            className={classes.Svg2}
            style={{ transform: 'translateY(4px)' }}
          />
          <MdLoop
            size={25}
            className={classes.Svg1}
            style={{ transform: 'translateY(2px)' }}
          />
        </div>
        <input type='progress' className={classes.Process} />
      </div>
      <div className={classes.End}>
        <MdQueue size={20} />
        <MdDevices size={20} />
        <HiVolumeUp size={20} />
        <input
          type='range'
          value={val}
          step='10'
          onChange={(e) => setVal(e.target.value)}
        />
        <FaExpandAlt size={17} />
      </div>
    </div>
  );
};

export default Player;
