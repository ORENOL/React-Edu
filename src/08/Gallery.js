import { FcCameraIdentification } from "react-icons/fc";
import ButtonBlue from "../common/ButtonBlue";
import { useState, useEffect, useRef } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    // input box
    const txt1 = useRef();

    // 키워드 상태 변수
    const [kw, SetKw] = useState();
    const [photo, setPhoto] = useState();
    const [tag, setTag] = useState();

    // 컴포넌트 생성시 폼칸으로 이동
    useEffect(()=>{
        txt1.current.focus();
    }, []);

    // 컴포넌트 업데이트시
    useEffect(() => {
        getData(kw);
    }, [kw]);

    useEffect(() => {
        if (photo)
        setTag(photo.map((item, idx) => 
        <GalleryCard item={item} refv={txt1}/>
        ));
        if (!photo)
        setTag(null);
    }, [photo])


    const handleOk = (e) => {
        e.preventDefault();
        console.log("OK")
        if (txt1.current.value === "") return;
        SetKw(txt1.current.value);

    };

    const handleCancel = (e) => {
        e.preventDefault();
        txt1.current.value = "";
        txt1.current.focus();
        setPhoto(null);
        console.log("cancle")
    };

    const getData = (kw) => {
        console.log("getData:", kw);

        let apikey = '0WdoKUOsx38ayESWir6fAIUs5PzlcZs542pe8iS1Gpv2cL50rdjiKIbKV%2Fc9R6Rlau6FIv9VXVRwV4PT5HVeFQ%3D%3D'
        const enKw = encodeURI(kw);
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1'
        url += `?serviceKey=${apikey}`
        url +=  '&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json'
        url += `&keyword=${enKw}`

        fetch(url)
        .then(resp => resp.json())
        .then(data => setPhoto(data.response.body.items.item))
        .catch(err => console.log(err))

        console.log("url:", url)
    };
    
  return (
    <main className="container">
        <article>
            <header className="flex justify-center items-center">
                <div className="text-3xl font-bold">
                    한국관광공사 관광사진 정보&nbsp;
                </div>
                <div className="text-4xl font-bold">
                    <FcCameraIdentification/>
                </div>
            </header>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid">
                    <div>
                        <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." />
                    </div>
                    <div className="grid">
                        <ButtonBlue caption='확인' handleClick={handleOk} type="submit"/>
                        <ButtonBlue caption="취소" handleClick={handleCancel}/>
                    </div>
                </div>
            </form>
        </article>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                {tag}
            </div>
        </section>
      
    </main>
  )
}

export default Gallery
