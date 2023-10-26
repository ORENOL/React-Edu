import { Link } from "react-router-dom"
import { BsBroadcastPin } from "react-icons/bs";

const FcstNav = () => {
  return (
    <nav className="grid justify-evenly pt-3 px-8">
        <Link to="/" className="text-black">
        <ul className="text-2xl font-bold">
            <li>기상청 예보</li>
            <BsBroadcastPin />
        </ul>
        </Link>
    </nav>
  )
}

export default FcstNav
