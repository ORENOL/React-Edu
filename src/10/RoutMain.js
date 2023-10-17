import { BrowserRouter, Route, Routes } from "react-router-dom"
import RoutHome from "./RoutHome"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"
import TailsH1 from "../common/TailsH1"

const RoutMain = () => {
  return (
    <BrowserRouter>
        <main className="container">
                <TailsH1 title="React-router-dom으로 라우팅" />
            <RouteNav />
            <Routes>
                <Route path="/" element={<RoutHome />} />
                <Route path="/page1" element={<RoutePage1 />} />
                <Route path="/page1/:item" element={<RoutePage1 />} />
                <Route path="/page2" element={<RoutePage2 />} />
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default RoutMain
