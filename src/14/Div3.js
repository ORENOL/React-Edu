import { useRecoilState } from "recoil"
import { DivAtoms } from "./DivAtoms";

const Div3 = () => {

  const [n, setN] = useRecoilState(DivAtoms);

    return (
      <article className="bg-orange-100">
      <div >
          Div3
          <div className="grid">
          <button role="button" onClick={() => {setN(n+1)}}>증가</button>
          <button role="button" onClick={() => {setN(n-1)}}>감소</button>
          </div>    
      </div>
      </article>
    )
  }
  
  export default Div3