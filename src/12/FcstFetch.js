import { useParams } from "react-router-dom"
import Ultra from "./Ultra"
import { useEffect, useState } from "react"

const FcstFetch = () => {
    const dt = useParams().dt
    const area = useParams().area
    const m = useParams().m
    const x = useParams().x
    const y = useParams().y

    const [items, setItems] = useState()

    //환경변수 값 가져오기


    useEffect(() => {
        const apikey = process.env.REACT_APP_API_KEY;
        console.log("apikey " + apikey)

        let url = ""
        if (m == 1) {
        url += "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst"
        url += `?serviceKey=${apikey}`;
        url += `&numOfRows=60&pageNo=1`;
        url += `&base_date=${dt}&base_time=0630`;
        url += `&nx=${x}&ny=${y}&dataType=json`;
        //console.log("url:" + url)
        } else if (m == 2) {
            url += "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"
            url += `?serviceKey=${apikey}`;
            url += `&pageNo=1&numOfRows=60`;
            url += `&base_date=${dt}&base_time=0500`;
            url += `&nx=${x}&ny=${y}&dataType=json`;
        }
        if (url) {
        fetch(url)
        .then(resp => resp.json())
        .then(data => setItems(data.response.body.items.item))
        .catch(err => console.log("err" + err))
        }
      }, [])

  return (
    <div>
        <Ultra dt={dt} area={area} m={m} items={items} />
    </div>
  )
}

export default FcstFetch
