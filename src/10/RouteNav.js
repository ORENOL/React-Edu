import { Link } from "react-router-dom"

const RouteNav = () => {
  return (
    <nav>
        <ul>
            <li><strong>라우팅연습</strong></li>
        </ul>
        <div className="grid grid-cols-1">
        <div className="text-center">
        <ul>
            <li><a href="./" role="button">RouteHome</a></li>
            <li><a href="./page1" >page1</a></li>
            <li><a href="./page2" >page2</a></li>
        </ul>
        </div>
        <div className="text-center">
        <ul>
            <li><Link to='/' role="button">Link Home</Link></li>
            <li><Link to='/page1'>Link page1</Link></li>
            <li><Link to='/page2?item=2' >Link page2</Link></li>
        </ul>
        </div>
        </div>
    </nav>
  )
}

export default RouteNav
