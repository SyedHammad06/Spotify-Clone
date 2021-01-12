import {
  FaChevronLeft,
  FaChevronRight,
  FaRegUserCircle,
  FaChevronDown,
} from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import classes from './Search.module.css';

const search = (props) => {
  return (
    <div className={classes.Search}>
      <div className={classes.Left}>
        <FaChevronLeft
          size={25}
          className={classes.Icons}
          color='white'
          style={{ marginRight: 10 }}
          onClick={props.history.goBack}
        />
        <FaChevronRight
          size={25}
          className={classes.Icons}
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
        <FaChevronDown className={classes.Icon} size={24} color='white' />
      </div>
    </div>
  );
};

export default withRouter(search);
