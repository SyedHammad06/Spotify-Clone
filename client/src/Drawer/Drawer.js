import { AiFillHome } from 'react-icons/ai';
import { ImDrawer, ImFeed } from 'react-icons/im';
import List from '../UI/ListItem/List';
import { NavLink } from 'react-router-dom';
import classes from './Drawer.module.css';

const Drawer = (props) => {
  const content = (
    <ul className={classes.BottomList}>
      {props.playlist.map((listItem) => (
        <List key={listItem} title={listItem} to='/' />
      ))}
    </ul>
  );

  return (
    <div className={classes.Drawer}>
      <nav className={classes.TopNav}>
        <ul className={classes.TopList}>
          <li className={classes.Active}>
            <AiFillHome size={28} />
            <a href='/'>Home</a>
          </li>
          <li>
            <ImDrawer size={28} />
            <a href='/'>Browse</a>
          </li>
          <li style={{ marginTop: 20 }}>
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
      {props.playlist ? content : null}
      <NavLink to='/login' style={{ color: 'white' }}>
        Login
      </NavLink>
    </div>
  );
};

export default Drawer;
