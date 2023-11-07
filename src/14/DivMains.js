import { useRecoilValue } from "recoil";
import Div1 from "./Div1";
import { DivAtoms, DivAtoms2 } from "./DivAtoms";

const DivMains = () => {

  const n = useRecoilValue(DivAtoms);
  const n2 = useRecoilValue(DivAtoms2);

  return (
    <article className="bg-orange-400">
    <div>
      <h1 className="text-2xl font-bold  text-orange-50">n={n}</h1>
      <h2 className="text-lg font-bold  text-orange-50">n2={n2}</h2>
      <Div1 />
    </div>
    </article>
  )
}

export default DivMains
