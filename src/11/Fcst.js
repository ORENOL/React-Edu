import { BrowserRouter, Route, Routes } from "react-router-dom"
import FcstNav from "./FcstNav"
import FcstMain from "./FcstMain"
import UltraSrtFcst from "./UltraSrtFcst"
import VilageFcst from "./VilageFcst"

const Fcst = () => {
  return (
    <div className="max-w-4xl place-self-center ml-20">
      <BrowserRouter>
      <main className="container mx-auto">
        <FcstNav />
        <Routes>
            <Route path="/" element={<FcstMain />} />
            <Route path="/ultra/:dt/:area/:x/:y" element={<UltraSrtFcst />} />
            <Route path="/vilage/:dt/:area/:x/:y" element={<VilageFcst />} />
        </Routes>
        </main>
      </BrowserRouter>  
    </div>
  )
}

export default Fcst
