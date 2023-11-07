const Div3 = ({n, setN}) => {

    return (
      <article className="bg-orange-100">
      <div >
          Div3
          <div className="grid">
          <button role="button" onClick={() => {setN(n++)}}>증가</button>
          <button role="button" onClick={() => {setN(n--)}}>감소</button>
          </div>    
      </div>
      </article>
    )
  }
  
  export default Div3