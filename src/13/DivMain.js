import { useEffect, useState } from "react"
import Div1 from "./Div1";

const DivMain = () => {

    const [n, setN] = useState(1);

    useEffect(() => {
        console.log(n)
    }, [n])
  return (
    <article className="bg-orange-400">
    <div>
      <h1 className="text-2xl font-bold  text-orange-50">n={n}</h1>
      <h2 className="text-lg font-bold  text-orange-50">n2={n*2}</h2>
      <Div1 n={n} setN={setN}/>
    </div>
    </article>
  )
}

export default DivMain
