const list = (props) => (
  <li>
    {props.icon ? <props.icon size={25} /> : null}
    <a href={props.to}>{props.title}</a>
  </li>
);

export default list;
