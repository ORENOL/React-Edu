import { useState, useEffect } from "react";
const BoxOffice = () => {

    const [boxlist, setBoxlist] = useState();
    const [listTag, setListTag] = useState();
    const [conTag, setConTag] = useState();

    const GetInfo = (item) => {
        // console.log(item)
        // const [movieInfos, setMovieInfos] = useState();
      
        setConTag(
            <div>
            <span>{item.movieCd}</span>
            <span>{item.movieNm}</span>
            </div>
        )
        
//         )
//         let url2 = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888"
//         url2 += "&movieCd=" + item.movieCd; 

//         fetch(url2)
//         .then(resp => resp.json())
//         .then(data => {})
//         .
            


    };

    // 컴포넌트 생성시 한번 실행됨
    useEffect(() => {
        const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918";
    
        fetch(url)
        .then(resp => resp.json())
        .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch(err => console.log(err))
    }, []);

    //state [] 변수가 변경될떄 마다 실행됨
    useEffect(() => {
        console.log(boxlist);
        if (boxlist) {
           
            setListTag(boxlist.map((item, idx) =>
            <tr key={'mv' + idx}>
                <td>{item.rank}</td>
                <td onClick={() => GetInfo(item)}>{item.movieNm}</td>
                <td>{parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
                <td>{
                    item.rankInten == 0 
                    ? "-"
                    : item.rankInten > 0
                        ? "▲" + Math.abs(item.rankInten)
                        : "▽" + Math.abs(item.rankInten)
                    }</td>
            </tr>
            ));
        }
    }, [boxlist])
    

    return (
        <>
        <main className="container">
            <article>
            <table>
      <thead>
        <tr>
          <th>순위</th><th>영화명</th><th>매출</th><th>증감</th>
        </tr>
      </thead>
      <tbody>
        {listTag}
      </tbody>
    </table>
    <footer>
        {conTag}
    </footer>
            </article>
        </main>
        </>
    );
};

export default BoxOffice