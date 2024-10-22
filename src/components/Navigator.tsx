import { Link } from "react-router-dom";

const App = ()=>{
  return (
    <nav className="nav">
      <div className="container">

        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/product">Product</Link> */}
        <ul className="nav_row">
          <li className="nav_content"><Link to="/">Home</Link></li>
          <li className="nav_content"><Link to="/">Product</Link></li>
          <li className="nav_content"><Link to="/">Product</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default App;