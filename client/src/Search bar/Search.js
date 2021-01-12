import { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegUserCircle,
  FaChevronDown,
} from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import SideDrawer from '../SideDrawer/SideDrawer';
import classes from './Search.module.css';

const Search = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const combinedClass1 = [classes.Icons, classes.Svg1];
  const combinedClass2 = [classes.Icons, classes.Svg2];
  const combinedClass3 = [classes.Icons, classes.Svg3];

  return (
    <div className={classes.Search}>
      <div
        className={classes.Menu}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <div className={classes.Dot1}></div>
        <div className={classes.Dot2}></div>
        <div className={classes.Dot3}></div>
      </div>
      {showSidebar ? <SideDrawer playlist={[]} /> : null}
      <div className={classes.Left}>
        <FaChevronLeft
          size={25}
          className={combinedClass1.join(' ')}
          color='white'
          style={{ marginRight: 10 }}
          onClick={props.history.goBack}
        />
        <FaChevronRight
          size={25}
          className={combinedClass2.join(' ')}
          color='white'
          onClick={props.history.goForward}
        />
        <input type='text' placeholder='search' />
      </div>
      <div className={classes.Right}>
        <a href='/' className={classes.Btn}>
          Upgrade
        </a>
        <span>
          <FaRegUserCircle className={classes.Icon} size={24} color='white' />
          <span className={classes.Text}>Star</span>
        </span>
        <FaChevronDown
          className={combinedClass3.join(' ')}
          size={24}
          color='white'
        />
      </div>
    </div>
  );
};

export default withRouter(Search);
