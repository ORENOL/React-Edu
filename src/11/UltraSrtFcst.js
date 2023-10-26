import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import getCode from "./getcode.json"

const UltraSrtFcst = () => {
  
  const [items, setItems] = useState();
  const selRef = useRef();

  // 파라미터로 전송된 정보 추출
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;

  // 컴포넌트 생성시
  useEffect(() => {
    const serviceKey = "0WdoKUOsx38ayESWir6fAIUs5PzlcZs542pe8iS1Gpv2cL50rdjiKIbKV%2Fc9R6Rlau6FIv9VXVRwV4PT5HVeFQ%3D%3D"
    let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst"
    url += `?serviceKey=${serviceKey}`;
    url += `&numOfRows=60&pageNo=1`;
    url += `&base_date=${dt}&base_time=0630`;
    url += `&nx=${x}&ny=${y}&dataType=json`;
    console.log("url:" + url)
    
    fetch(url)
    .then(resp => resp.json())
    .then(data => setItems(data.response.body.items.item))  
    .catch(err => console.log("err" + err))
  }, [])

  useEffect(() => {
    console.log(items)
  }, [items])

  const UltraTag = getCode.filter((item) => item.예보구분 == "초단기예보").map((item) => 
    <option value={item.항목값}>{item.항목값}</option>
  )

  return (
    <article>
      <header>
        <div className="grid justify-between pt-4">
        <a className="font-bold text-xl pt-2">{area} 초단기예보 : {dt.substring(0,4)}-{dt.substring(4,6)}-{dt.substring(6,8)}</a>
        <form>
          <select ref={selRef} id="sel" name="sel">
            <option>타입 선택</option>
            {UltraTag}
          </select>
        </form>
        </div>
      </header>
      <main>

      </main>
    </article>
  )
}

export default UltraSrtFcst
