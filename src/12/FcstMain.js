import { useEffect, useRef, useState } from "react"
import TailsH1 from "../common/TailsH1"
import TailSelect from "../common/TailSelect"
import getxy from "./getxy.json"
import { Link } from "react-router-dom"

const FcstMain = () => {
    
    const opItem = getxy.map((item) => [item["격자 X"]+"-"+item["격자 Y"]+"-"+item["1단계"], item["1단계"]])

    //상태변수
    const [dt, setDt] = useState()
    const [area, setArea] =useState()
    const [x, setX] =useState()
    const [y, setY] =useState()

    const inDt = useRef()
    
    //이벤트 처리
    const handleDt = (e) => {
        //console.log(e.target.value)
        setDt(e.target.value.replaceAll("-", ""))        
    }

    const handleSel = (e) => {
        console.log(e.target.value)
        let temp = e.target.value.split("-")
        setX(temp[0])
        setY(temp[1])
        setArea(temp[2])
    }

    const handleBtClick = (e) => {
        e.preventDefault()
    }


    useEffect(() => {

        let today = new Date()
        let year = today.getFullYear()
        let month = ("0" + (today.getMonth() + 1)).slice(-2)
        let day = ("0" + (today.getDate())).slice(-2)
        setDt(year+month+day)
        //console.log(today)

        // 폼값을 현재 시각으로 기본 설정
        inDt.current.value = year+"-"+month+"-"+day

        }, [])

    useEffect(() => {
        //console.log(dt)
    }, [dt])


    return (
    <section className="m-5 bg-gray-50 rounded border-2 shadow-lg">
        <div className="p-1">
            <TailsH1 title='기상청 단기예보' />
        </div>
      <form>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-4 mx-5 my-4">
        <div><input ref={inDt} type="date" id="dt" name="dt" onChange={handleDt}/></div>
        <div><TailSelect id={'sel'} opItem={opItem} handleChange={handleSel} /></div>
        <div className="p-3">{ y 
            ? <Link to= {`/fetch/${dt}/${area}/${x}/${y}/1`}><button role="button">초단기예보</button></Link>
            : <button onClick={handleBtClick} className="grayscale opacity-75">초단기예보</button>}
            </div>
        <div className="p-3">{ y 
            ? <Link to= {`/fetch/${dt}/${area}/${x}/${y}/2`}><button role="button">단기예보</button></Link>
            : <button onClick={handleBtClick} className="grayscale opacity-75">단기예보</button>}</div>
      </div>
      </form>
    </section>
  )
}

export default FcstMain
