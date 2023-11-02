import Navigation from '../Navbar/Navigation';

const Layout = ({ children }) => (
  <>
    <Navigation />

    <div className="container m-auto p-4">{children}</div>
  </>
);

export default Layout;
