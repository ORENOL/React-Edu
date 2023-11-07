import Div3 from "./Div3"

const Div2 = ({n, setN}) => {
    return (
      <article className="bg-orange-200">
      <div >
          Div2
          <Div3 n={n} setN={setN}/>
      </div>
      </article>
    )
  }
  
  export default Div2