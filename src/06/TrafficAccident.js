import dataTaccident from "./dataTaccident.json"
import TaccidentNav from "./TaccidentNav";
import Hh1 from "../common/Hh1";
import { useState, useEffect } from "react";

const TrafficAccident = () => {

    // 오브젝트 값 가져오기
    // const tdata = dataTaccident['data']
    const tdata = dataTaccident.data;

    // 대분류 배열 순회
    let c1 = tdata.map((k, idx) => k.사고유형_대분류);
    c1 = [...new Set(c1)];

    // tdata.forEach
    // for item of tdata

    // 선택한 대분류
    const [sel1, setSel1] = useState();
    
    // 중분류
    const [c2, setC2] = useState();
    const [sel2, setSel2] = useState();

    // 선택항목 태그
    const [divTag, setDivTag] = useState();

    useEffect(() => {
        if (!sel1) return; 
        // console.log("대분류 선택", sel1);
        
        let temp = tdata
        .filter((item) => item.사고유형_대분류 === sel1)
        .map((item) => item.사고유형_중분류)
        setC2(temp);
        // console.log(temp)
        setSel2();
        setDivTag();
    }, [sel1]);

    useEffect(() => {
        if(!sel2)
            return;
        // console.log(sel2);

        let temp = tdata
        .filter((item) => item.사고유형_중분류 === sel2 && item.사고유형_대분류 === sel1)
        /* .map((item, idx) => {
            return (
                <div key={`item${idx}`}>
                    <ul>
                    <li>사고유형: {item.사고유형_대분류} -{">"} {item.사고유형_중분류}</li>
                    <li>사고건수: {item.사고건수}</li>
                    <li>부상신고자수: {item.부상신고자수}</li>
                    <li>경상자수: {item.경상자수}</li>
                    <li>중상자수: {item.중상자수}</li>
                    <li>사망자수: {item.사망자수}</li>
                    </ul>
                </div>
            )
        })
        */
        // temp = Object.keys(temp).map((item, idx) => <div>{item} : {item.temp}</div>)

        temp = temp[0];

        let k = Object.keys(temp).filter((item) => (item !=='사고유형_대분류' && item !== '사고유형_중분류'))
        temp = k.map((item, idx) => {
            <div>{item} : {tdata.경상자수}</div>
        })
        console.log(temp)
        setDivTag(temp) 
    }, [sel2])




    // console.log(c2)
    return (
        <main className="container">
            <article>
                <Hh1 title='유형별 교통사고' />
                <TaccidentNav title='교통사고 대분류' c={c1}  setSel={setSel1}/>
                {c2 && <TaccidentNav title='교통사고 중분류' c={c2} setSel={setSel2} />}
                <div>
                {divTag}
                </div>
            </article>
        </main>
    )
  }

export default TrafficAccident
