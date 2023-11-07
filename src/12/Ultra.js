import { useEffect, useRef, useState } from "react"
import getCode from "./getcode.json"
import FcstTable from "./FcstTable"
import TailSelect from "../common/TailSelect"
import getcode from "./getcode.json"
const Ultra = ({dt, area, m, items}) => {

    const selRef = useRef()
    const [myItem, setMyItem] = useState()

    let fcst = (m === '1') ? "초단기예보" : "단기예보"

    const opItem = getcode.filter((item) => item.예보구분 === fcst).map((item => [item.항목값,item.항목명]))

    const sky = {'1': '☀', '3': '구름많음⛅', '4': '흐림☁'};
    const pty = {'0': '없음', '1': '비', '2': '비/눈', '3': '눈', '4': '소나기', '5':'빗방울','6':'빗방울눈날림','7':'눈날림'};

    const handleTypeChange = (e) => {
        if (!items) return;
        const temp = items.filter((i) => i.category === e.target.value)    
        const tempcd = getCode.filter((code) => code.항목값 == e.target.value && code.예보구분 === fcst)[0]

        const tempdata = temp.map((item) => 
        [tempcd.항목명,
          item.fcstTime,
          item.category === 'SKY' ? sky[item.fcstValue] : item.category === 'PTY' ? pty[item.fcstValue] : item.fcstValue,
          item.category === 'SKY' ? "" : item.category === 'PTY' ? "" : tempcd.단위])
    
        setMyItem(tempdata)
      }


  return (
    <article>
      <header>
        <div className="grid justify-between pt-4">
        <a className="font-bold text-xl pt-3">{area} {fcst} : {dt.substring(0,4)}-{dt.substring(4,6)}-{dt.substring(6,8)}</a>
        <form>
          <TailSelect id={'sel1'} opItem={opItem} handleChange={handleTypeChange}/>
        </form>
        </div>
      </header>
      <main>
        {myItem && <FcstTable trItem={myItem} />}
      </main>
    </article>
  )
}

export default Ultra
