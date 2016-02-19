import {Link, IndexLink} from 'react-router';

const SiteNav = () => (
  <nav>
    <ul>
      <li>
        <Link activeStyle={{color: 'red'}} to="/">Home</Link>
      </li>
      <li>
        <Link activeStyle={{color: 'red'}} to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default function Layout({children}) {
  return (
    <div>
      <SiteNav />
      {children}
    </div>
  );
}
