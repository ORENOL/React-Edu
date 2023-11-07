import Div2 from "./Div2"

const Div1 = ({n, setN}) => {
  return (
    <article className="bg-orange-300">
    <div >
        Div1
        <Div2 n={n} setN={setN}/>
    </div>
    </article>
  )
}

export default Div1
