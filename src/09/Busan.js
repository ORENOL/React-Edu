import { useEffect, useRef, useState } from "react";
import ButtonBlue from "../common/ButtonBlue";
import pusandata from "./pusandata.json"
import Card from "../common/Card";

const Busan = () => {

    const sel = useRef();
    const [item, setItem] = useState();
    const [tags, setTags] = useState();
    const [but, setBut] = useState();

    useEffect(() => {
        sel.current.focus();
    }, [])

    useEffect(() => {
        console.log(item)
       if(item){
        setTags(<Card key={item.UC_SEQ} imgsrc={item.MAIN_IMG_NORMAL} title={item.TITLE} content={item.ITEMCNTNTS}/>)
       }
    }, [item])

    useEffect(() => {
        console.log(but)
        if(but){
            setTags(but.map((item) => {
                return <Card key={item.콘텐츠ID} imgsrc={item.이미지URL} title={item.제목} content={item.상세내용}/>}))
        }
    }, [but])

    const getDatas = (code) => {
        
        const apiKey = "0WdoKUOsx38ayESWir6fAIUs5PzlcZs542pe8iS1Gpv2cL50rdjiKIbKV%2Fc9R6Rlau6FIv9VXVRwV4PT5HVeFQ%3D%3D";
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr'
        url += `?serviceKey=${apiKey}`
        url += `&pageNo=1&numOfRows=10&resultType=json`
        url += `&UC_SEQ=${code}`

        fetch(url)
        .then(resp => resp.json())
        .then(data => setItem(data.getFestivalKr.item[0]))
        .catch(err => console.log(err))
    };

    const handleChange = () => {
        console.log(sel.current.value)
    }

    const handleOk = (e) => {
        e.preventDefault();
        getDatas(sel.current.value);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setBut(pusandata)
    }
  
  const code = pusandata.map((item) => {
    let 콘텐츠 = item.콘텐츠명.substring(0,item.콘텐츠명.indexOf("(한"));
    return [item.콘텐츠ID, 콘텐츠]
  })

  const selTag = code.map((item, idx) => {
        return <option key={idx} value={item[0]}>{item[1]}</option>
  })

    return (
        <main className="container">
            <article>
                <header>
                <div className="text-3xl font-bold">부산축제</div>
                </header>
                <form className="grid grid-cols4">
                    <div>
                        <select ref={sel} id="sel" onChange={handleChange}>
                            <option>축제명을 선택하세요.</option>
                            {selTag}
                        </select>
                    </div>
                    <div className="grid">
                        <ButtonBlue caption="확인" handleClick={handleOk} type="submit"/>
                        <ButtonBlue caption="취소" handleClick={handleCancel}/>
                    </div>
                </form>
            </article>
            <section>
                {tags}
                {but}
            </section>
        </main>
  )
}

export default Busan
