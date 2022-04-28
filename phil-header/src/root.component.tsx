import "./Header.css";

export default function Root(props) {
  return (
    <header>
      <div className="header">
        <a href="#default" className="logo">
          Component: {props.name}
        </a>
        <div className="header-right">
          {/* <Link className="active" to="/">
            Home
          </Link>
          <Link to="/dealing">Dealing</Link>
          <Link to="/survey">Survey</Link> */}
          <a href="#default" className="active">
            Link1
          </a>
        </div>
      </div>
    </header>
  );
}
