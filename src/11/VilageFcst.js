import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import getCode from "./getcode.json"

const VilageFcst = () => {

  const [items, setItems] = useState();
  const selRef = useRef();
  const [type, setType] = useState();
  const [vilageMain, setVilageMain] = useState();
  const [type2, setType2]  = useState();

  // 입력폼
  const dtRef = useRef();
  const sel = useRef();

    // 파라미터로 전송된 정보 추출
    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    // 컴포넌트 생성시
  useEffect(() => {
    const serviceKey = "0WdoKUOsx38ayESWir6fAIUs5PzlcZs542pe8iS1Gpv2cL50rdjiKIbKV%2Fc9R6Rlau6FIv9VXVRwV4PT5HVeFQ%3D%3D"
    let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageSrtFcst"
    url += `?serviceKey=${serviceKey}`;
    url += `&numOfRows=60&pageNo=1`;
    url += `&base_date=${dt}&base_time=0630`;
    url += `&nx=${x}&ny=${y}&dataType=json`;
    //console.log("url:" + url)
    
    fetch(url)
    .then(resp => resp.json())
    .then(data => setItems(data.response.body.items.item))
    .catch(err => console.log("err" + err))
  }, [])


  useEffect(() => {
    //console.log("type: " + type)

    console.log(items)
    console.log(type2)
      
      
      {type2 &&
      setVilageMain(items.filter((item) => item.category === type2.항목값).map((item, idx) =>
      <tr>
        <td>{type2.항목명}</td>
        <td>{item.fcstTime}</td> 
        <td>{item.fcstValue}{type2.단위}</td>
      </tr>

      ))
      }
    
  }, [type2])


    const vilageType = getCode.filter((item) => item.예보구분 === "단기예보").map((item) => 
    <option value={item.항목값}>{item.항목값} ({item.항목명})</option>
  )

    const handleTypeChange = () => {
      setType(sel.current.value)
      setType2(getCode.filter((item) => item.예보구분 === "단기예보").filter((item) => item.항목값 === sel.current.value)[0])
    }


  return (
    <article>
      <header>
        <div className="grid justify-between pt-4">
        <a className="font-bold text-xl pt-2">{area} 단기예보 : {dt.substring(0,4)}-{dt.substring(4,6)}-{dt.substring(6,8)}</a>
        <form>
          <select ref={sel} id="sel2" name="sel2" onChange={handleTypeChange}>
            <option>타입 선택</option>
            {vilageType}
          </select>
        </form>
        </div>
      </header>
      <main>
        <table className="table-auto">
          <thead>
          <th>항목명</th>
          <th>예측시간</th>
          <th>예보값</th>
          </thead>
          <tbody>
            {vilageMain}
          </tbody>
        </table>
      </main>
    </article>
  )
}

export default VilageFcst
