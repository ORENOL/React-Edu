import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import getCode from "./getcode.json"
import FcstTable from "./FcstTable";

const UltraSrtFcst = () => {
  
  const [items, setItems] = useState();
  const selRef = useRef();
  const [type, setType] = useState();
  const [ultraMain, setUltraMain] = useState();
  const [type2, setType2]  = useState();
  const [myItem, setMyItem] = useState([]);

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
    //console.log("url:" + url)
    
    fetch(url)
    .then(resp => resp.json())
    .then(data => setItems(data.response.body.items.item))
    .catch(err => console.log("err" + err))
  }, [])

  useEffect(() => {
    //console.log(myItem)
  }, [items, myItem])

  useEffect(() => {
    //console.log("type: " + type)
    if (items == "") return;
    if (type2 == "") return; 
    
  }, [type2])

  const UltraType = getCode.filter((item) => item.예보구분 === "초단기예보").map((item) => 
    <option value={item.항목값}>{item.항목값} ({item.항목명})</option>
  )

  const handleTypeChange = () => {

    const temp = items.filter((i) => i.category === selRef.current.value)

    let tempcd = getCode.filter((code) => code.항목값 == selRef.current.value && code.예보구분 === "초단기예보")[0]

    let tempdata = temp.map((item) => [tempcd.항목명,
      item.fcstTime,
      item.fcstValue,
      tempcd.단위,])

    setMyItem(tempdata)
    setType2(getCode.filter((item) => item.예보구분 === "초단기예보").filter((item) => item.항목값 === selRef.current.value)[0])
  }

  return (
    <article>
      <header>
        <div className="grid justify-between pt-4">
        <a className="font-bold text-xl pt-2">{area} 초단기예보 : {dt.substring(0,4)}-{dt.substring(4,6)}-{dt.substring(6,8)}</a>
        <form>
          <select ref={selRef} id="sel2" name="sel2" onChange={handleTypeChange}>
            <option>타입 선택</option>
            {UltraType}
          </select>
        </form>
        </div>
      </header>
      <main>
        {myItem && <FcstTable trItem={myItem} />}
      </main>
    </article>
  )
}

export default UltraSrtFcst
