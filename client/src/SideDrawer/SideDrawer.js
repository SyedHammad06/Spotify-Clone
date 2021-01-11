import { AiFillHome } from 'react-icons/ai';
import { ImDrawer, ImFeed } from 'react-icons/im';
import List from '../UI/ListItem/List';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Menu}>
        <span className={classes.Dot1}></span>
        <span className={classes.Dot2}></span>
        <span className={classes.Dot3}></span>
      </div>
      <nav className={classes.TopNav}>
        <ul className={classes.TopList}>
          <li
            style={{ paddingLeft: 20, marginLeft: -24 }}
            className={classes.Active}
          >
            <AiFillHome size={28} />
            <a href='/'>Home</a>
          </li>
          <li style={{ marginLeft: -5 }}>
            <ImDrawer size={28} />
            <a href='/'>Browse</a>
          </li>
          <li
            style={{ marginTop: 20, paddingLeft: 20, marginLeft: -24 }}
            // className={classes.Active}
          >
            <ImFeed size={28} />
            <a href='/'>Radio</a>
          </li>
        </ul>
      </nav>
      <h2 className={classes.Title}>Your Library</h2>
      <ul className={classes.MidList}>
        <List title='Made for you' to='/' />
        <List title='Recently Played' to='/' />
        <List title='Liked Songs' to='/' />
        <List title='Albums' to='/' />
        <List title='Artists' to='/' />
        <List title='Podcasts' to='/' />
      </ul>
      <h2 className={classes.Title}>Playlists</h2>
      <ul className={classes.BottomList}>
        {props.playlist.map((listItem) => (
          <List key={listItem} title={listItem} to='/' />
        ))}
      </ul>
    </div>
  );
};

export default sideDrawer;
