import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import getxy from "./getxy.json"
const FcstMain = () => {

        // 입력폼
        const dtRef = useRef();
        const selRef = useRef();

        // 상태변수
        const [dt, setDt] = useState(); // 날짜
        const [area, setArea] =useState() // 지역
        const [x, setX] = useState(); // X좌표
        const [y, setY] = useState(); // Y좌표
    
        // 컴포넌트 생성시
        useEffect(() => {
            dtRef.current.focus();
        }, [])

        // dt 변경시
        useEffect(() => {
            console.log("dt:" + dt)
            
        }, [dt])

        // area, x, y변경시
        useEffect(() => {
            console.log("area:" +  area)

        }, [area, x, y])

        // 사용자 정의 함수
        const handleDtChange = () => {
            setDt(dtRef.current.value.replaceAll("-", ""));
        }

        const handleAreaChange = () => {
            if(selRef.current.value == "") return;
            let temp = getxy.filter((item) => item.행정구역코드 === parseInt(selRef.current.value))[0];
            setArea(temp["1단계"])
            setX(temp["격자 X"])
            setY(temp["격자 Y"])
        }

        //select -> option 생성
        const opTag = getxy.map((item) => 
            <option key={"op"+item.행정구역코드} value={item.행정구역코드}>{item["1단계"]}</option>
        )


  return (
    <article>
        <header>
            <a className="text-2xl font-bold">단기예보 입력 정보</a>
            <div>
                {area}: X({x}), Y({y})
            </div>
        </header>
       <main>
        <form className="grid justify-between">
            <input ref={dtRef} type="date" id="dt" name="dt" onChange={handleDtChange}/>
            <div>
                <select ref={selRef} id="sel" name="sel" onChange={handleAreaChange}>
                    <option value="">지역 선택</option>
                    {opTag}
                </select>
            </div>
        </form>
       </main>
       <footer>
        <div className="grid justify-between">
            { (dt === undefined) | (x === undefined) 
            ? <button className="font-bold text-xl">초단기예보</button> 
            : <Link to={`/ultra/${dt}/${area}/${x}/${y}`} role="button" className="font-bold text-xl">초단기예보</Link>
            }
            { (dt === undefined) | (x === undefined) 
            ? <button className="font-bold text-xl">단기예보</button>
            : <Link to={`/vilage/${dt}/${area}/${x}/${y}`} role="button" className="font-bold text-xl">단기예보</Link>
            }
        </div>
       </footer>
    </article>
  )
}

export default FcstMain
