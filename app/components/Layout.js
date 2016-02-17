import {Link, IndexLink} from 'react-router';

const SiteNav = () => (
  <nav>
    <ul>
      <li>
        <IndexLink to="/">Home</IndexLink>
      </li>
      <li>
        <Link to="/about">About</Link>
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
