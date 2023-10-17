import { useEffect, useState } from "react"
import Hh1 from "../common/Hh1"
import data from "./dataFrcst.json"
import style from "./Frcst.module.css"

const Frcst = () => {

    // let temp = {};
    // temp[data.frcstOneDt] = data.frcstOneCn
    // temp[data.frcstTwoDt] = data.frcstTwoCn
    // temp[data.frcstThreeDt] = data.frcstThreeCn
    // temp[data.frcstFourDt] = data.frcstFourCn

    const [cnTag, SetCnTag] = useState([]);

    // 날짜 클릭시 미세먼지 정보 출력 split을 통해 문자열을 지역명과 값으로 구별함
    const handleClick = (date) => {
        let tmp = dtcn[date].split(',');
        tmp = tmp.map((item, idx) => {
            let spitem = item.split(':');
           return (
            <>
            <div key={'cn'+idx} className={style.contents}>
                <div>
                <span className={style.sp1}>{spitem[0]}</span>
                </div>
                <div className={style.sp2}>
                {spitem[1].trim() === '낮음'
                ? <span className={style.sp21}>{spitem[1]}</span>
                : spitem[1].trim() === '보통'
                ? <span className={style.sp22}>{spitem[1]}</span>
                : spitem[1].trim() === '높음'
                ? <span className={style.sp23}>{spitem[1]}</span>
                : ""}   
                </div>
            </div>
            </>
        )})
        SetCnTag(tmp);
    };

    useEffect(() => {
        console.log(cnTag)
    }, [cnTag])

    const dtkey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"]
    const Cnkey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"]

    let dtcn = {};

    dtkey.map((item, idx) =>
        dtcn[data[item]] = data[Cnkey[idx]]
    );

    let dtTag = Object.keys(dtcn).map((item, idx) => {
        return <div key={`dtcn ${idx}`} className={style.dtcnkey} onClick={() => {handleClick(item)}}>{item}</div>
    })

    console.log(dtcn)
     return (
        <main className="container">
            <article>
                <Hh1 title="미세먼지" />
                <div className="grid">
                    {dtTag}
                </div>
                <div className={style.gridTag}>
                    {cnTag}
                </div>
            </article>
        </main>
  )
}

export default Frcst
