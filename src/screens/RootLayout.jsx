import { Link, Outlet } from "react-router-dom";

export default function RootLayout(){
  return (
    <>
    <header>
      <Link to="/" className="logo">REACT STOCK</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
      </nav>
    </header>
    <div>
      <Outlet />
    </div>
    <footer>
      Built with React and React Router! ;^D
    </footer>
    </>
  )
}